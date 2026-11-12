// Tək server: API + statik frontend. Xarici asılılıq yoxdur.
const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { questions, config } = require('./data/questions');
const materials = require('./data/materials');

const PORT = process.env.PORT || 3000;
const PUB = path.join(__dirname, 'public');
const sessions = new Map(); // examId -> {ids, started, track}
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.svg': 'image/svg+xml' };

function send(res, code, obj) { res.writeHead(code, { 'Content-Type': 'application/json; charset=utf-8' }); res.end(JSON.stringify(obj)); }
function body(req) { return new Promise((ok, no) => { let d = ''; req.on('data', c => { d += c; if (d.length > 1e6) req.destroy(); }); req.on('end', () => { try { ok(d ? JSON.parse(d) : {}); } catch (e) { no(e); } }); }); }
function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = crypto.randomInt(i + 1); [a[i], a[j]] = [a[j], a[i]]; } return a; }
const publicQ = q => ({ id: q.id, type: q.type, topic: q.topic, text: q.text, options: q.options, unit: q.unit });

function pick(track, closedN, openN) {
  const pool = questions.filter(q => q.tracks.includes(track));
  const closed = shuffle(pool.filter(q => q.type === 'closed')).slice(0, closedN);
  const open = shuffle(pool.filter(q => q.type === 'open')).slice(0, openN);
  return [...closed, ...open];
}
function isCorrect(q, ans) {
  if (ans === undefined || ans === null || ans === '') return false;
  if (q.type === 'closed') return Number(ans) === q.answer;
  const n = Number(String(ans).replace(/\s/g, '').replace(',', '.'));
  return Number.isFinite(n) && Math.abs(n - q.answer) <= (q.tolerance ?? 0.5);
}
function grade(ids, answers) {
  let score = 0, max = 0; const byTopic = {};
  const details = ids.map(id => {
    const q = questions.find(x => x.id === id);
    const pts = q.type === 'closed' ? config.closedPoints : config.openPoints;
    const ok = isCorrect(q, answers[id]);
    max += pts; if (ok) score += pts;
    const t = byTopic[q.topic] ||= { correct: 0, total: 0 }; t.total++; if (ok) t.correct++;
    return { ...publicQ(q), answer: q.answer, given: answers[id] ?? null, correct: ok, points: ok ? pts : 0, explanation: q.explanation };
  });
  const pct = max ? Math.round((score / max) * 1000) / 10 : 0;
  return { score, max, percent: pct, passed: pct >= config.passPercent, passPercent: config.passPercent, byTopic, details };
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, 'http://x');
  const p = url.pathname;
  try {
    if (p === '/api/health') return send(res, 200, { ok: true });
    if (p === '/api/config') return send(res, 200, { ...config, counts: { closed: questions.filter(q => q.type === 'closed').length, open: questions.filter(q => q.type === 'open').length } });
    if (p === '/api/materials') return send(res, 200, materials);
    if (p === '/api/topics') return send(res, 200, [...new Set(questions.map(q => q.topic))]);
    if (p === '/api/exam/start' && req.method === 'POST') {
      const b = await body(req);
      const mode = b.mode === 'mini' ? 'mini' : 'full';
      const track = 'mhbs';
      const ids = (mode === 'mini' ? pick(track, 10, 3) : pick(track, config.closedCount, config.openCount)).map(q => q.id);
      const id = crypto.randomUUID();
      const minutes = mode === 'mini' ? 30 : config.minutes;
      sessions.set(id, { ids, started: Date.now(), minutes });
      if (sessions.size > 5000) sessions.delete(sessions.keys().next().value);
      return send(res, 200, { examId: id, minutes, questions: ids.map(i => publicQ(questions.find(q => q.id === i))) });
    }
    if (p === '/api/exam/submit' && req.method === 'POST') {
      const b = await body(req);
      const s = sessions.get(b.examId);
      if (!s) return send(res, 404, { error: 'İmtahan sessiyası tapılmadı (server yenidən başlamış ola bilər).' });
      sessions.delete(b.examId);
      return send(res, 200, { ...grade(s.ids, b.answers || {}), elapsedSec: Math.round((Date.now() - s.started) / 1000) });
    }
    if (p === '/api/practice') { // mövzu üzrə məşq: cavablar dərhal yoxlanılır
      const topic = url.searchParams.get('topic');
      const list = shuffle(questions.filter(q => !topic || q.topic === topic));
      return send(res, 200, list.map(q => ({ ...publicQ(q), answer: q.answer, tolerance: q.tolerance ?? 0.5, explanation: q.explanation })));
    }
    if (p.startsWith('/api/')) return send(res, 404, { error: 'not found' });
    // statik
    let f = path.normalize(path.join(PUB, p === '/' ? 'index.html' : p));
    if (!f.startsWith(PUB) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) f = path.join(PUB, 'index.html');
    res.writeHead(200, { 'Content-Type': TYPES[path.extname(f)] || 'application/octet-stream' });
    fs.createReadStream(f).pipe(res);
  } catch (e) { send(res, 400, { error: e.message }); }
});
server.listen(PORT, () => console.log(`PMS Simulator: http://localhost:${PORT}`));
