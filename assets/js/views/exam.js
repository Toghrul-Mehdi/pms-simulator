// Sınaq imtahanı: vaxtlı, sərbəst naviqasiya, "sonra bax", avtomatik təhvil.
// Vəziyyət localStorage-da saxlanılır — səhifə yenilənsə imtahan itmir.
PMS.views.exam = function (app) {
  const { esc, time } = PMS.util, ui = PMS.ui, bank = PMS.bank, cfg = PMS.config;
  let st = PMS.store.get('exam', null), timer = null;
  const save = () => PMS.store.set('exam', st);
  const left = () => Math.round((st.end - Date.now()) / 1000);

  function lobby() {
    const card = (m, title, note) => `<section class="card mode"><h2>${title}</h2>
      <p class="facts"><b>${cfg[m].closed}</b> qapalı · <b>${cfg[m].open}</b> açıq · <b>${cfg[m].minutes}</b> dəqiqə</p><p class="mut">${note}</p>
      <button class="btn ${m === 'mini' ? 'ghost' : ''}" data-m="${m}">Başla</button></section>`;
    app.innerHTML = `<h1>Sınaq imtahanı</h1><p class="mut">DİM-in elektron imtahan üslubunda: suallar arasında sərbəst keçid, işarələmə, qalan vaxt. Səhv cavaba görə bal çıxılmır.</p>
      <div class="modes">${card('full', 'Tam imtahan', `Qapalı tapşırıq ${cfg.closedPoints} bal, açıq tapşırıq ${cfg.openPoints} bal, cəmi 100 bal. Keçid həddi ${cfg.passPercent}%.`)}${card('mini', 'Mini sınaq', 'Qısa yoxlama — gündəlik məşq üçün.')}</div>
      <section class="card"><h2>Qaydalar</h2><ul><li>Açıq tapşırıqlarda cavabı yalnız rəqəmlə yazın (onluq üçün vergül və ya nöqtə).</li><li>Kalkulyator və qaralama kağızı hazırlayın.</li><li>Vaxt bitdikdə imtahan avtomatik təhvil verilir.</li><li>Səhifəni bağlasanız, imtahan saxlanılır və vaxt davam edir.</li></ul></section>`;
    app.querySelectorAll('[data-m]').forEach(b => b.onclick = () => {
      const e = bank.buildExam(b.dataset.m);
      st = { ...e, i: 0, ans: {}, flag: {}, start: Date.now(), end: Date.now() + e.minutes * 60000 }; save(); run();
    });
  }

  function run() {
    clearInterval(timer);
    timer = setInterval(() => {
      const t = app.querySelector('#tm'); const s = left();
      if (t) { t.textContent = time(s); t.classList.toggle('low', s < 600); }
      if (s <= 0) finish(true);
    }, 1000);
    draw();
  }

  function draw() {
    const N = st.questions.length, q = st.questions[st.i], done = st.questions.filter(x => bank.answered(st.ans[x.id])).length;
    app.innerHTML = `<div class="exam-bar"><span>Cavablandırılıb <b>${done}/${N}</b></span><span class="timer" id="tm">${time(left())}</span><button class="btn small" id="fin">İmtahanı bitir</button></div>
    <div class="exam-grid"><section class="card qcard">
      ${ui.tags({ ...q, topic: 'Tapşırıq ' + (st.i + 1) })}
      ${ui.question(q, st.ans[q.id])}
      <div class="row between"><button class="btn ghost" id="pv" ${st.i === 0 ? 'disabled' : ''}>← Əvvəlki</button>
      <button class="btn ghost" id="fl">${st.flag[q.id] ? '★ İşarəni götür' : '☆ Sonra bax'}</button>
      <button class="btn" id="nx" ${st.i === N - 1 ? 'disabled' : ''}>Növbəti →</button></div></section>
    <aside class="card pal"><h3>Tapşırıqlar</h3><div class="grid">${st.questions.map((x, k) => `<button data-k="${k}" class="${bank.answered(st.ans[x.id]) ? 'ans' : ''} ${k === st.i ? 'cur' : ''} ${st.flag[x.id] ? 'flag' : ''} ${x.type === 'open' ? 'opn' : ''}">${k + 1}</button>`).join('')}</div>
      <p class="legend"><span class="lg ans"></span>cavablı <span class="lg flag"></span>işarəli <span class="lg opn"></span>açıq tip</p></aside></div>`;
    const go = k => { st.i = k; save(); draw(); };
    app.querySelectorAll('input[name=q]').forEach(r => r.onchange = () => { st.ans[q.id] = +r.value; save(); draw(); });
    const inp = app.querySelector('#open-in');
    if (inp) { inp.oninput = () => { st.ans[q.id] = inp.value.trim(); save(); }; inp.onkeydown = e => { if (e.key === 'Enter' && st.i < N - 1) go(st.i + 1); }; }
    app.querySelector('#pv').onclick = () => go(st.i - 1);
    app.querySelector('#nx').onclick = () => go(st.i + 1);
    app.querySelector('#fl').onclick = () => { st.flag[q.id] = !st.flag[q.id]; save(); draw(); };
    app.querySelector('#fin').onclick = () => finish(false);
    app.querySelectorAll('.grid button').forEach(b => b.onclick = () => go(+b.dataset.k));
  }

  function finish(auto) {
    const blank = st.questions.filter(x => !bank.answered(st.ans[x.id])).length;
    if (!auto && !confirm(blank ? `${blank} tapşırıq cavabsızdır. İmtahanı bitirmək istəyirsiniz?` : 'İmtahanı bitirmək istəyirsiniz?')) return;
    clearInterval(timer);
    const r = bank.grade(st.questions, st.ans), spent = Math.min(st.minutes * 60, Math.round((Date.now() - st.start) / 1000));
    r.details.forEach(d => bank.record(d.q, d.ok));
    const hist = PMS.store.get('hist', []); hist.push({ t: Date.now(), mode: st.mode === 'mini' ? 'Mini' : 'Tam', score: r.score, max: r.max, pct: r.percent, pass: r.passed }); PMS.store.set('hist', hist.slice(-50));
    PMS.store.del('exam'); st = null;
    result(r, spent, auto);
  }

  function result(r, spent, auto) {
    const topics = Object.entries(r.byTopic).sort((a, b) => a[1].correct / a[1].total - b[1].correct / b[1].total);
    app.innerHTML = `<h1>Nəticə</h1>${auto ? '<p class="mut">Vaxt bitdi — imtahan avtomatik təhvil verildi.</p>' : ''}
    <section class="card result ${r.passed ? 'ok' : 'bad'}"><div><div class="big">${r.score}<small> / ${r.max}</small></div><span class="pill ${r.passed ? 'ok' : 'bad'}">${r.passed ? 'Keçid həddini keçdiniz' : `Keçid həddi ${cfg.passPercent}% — çatmadı`}</span></div>
      <div class="facts-col"><span>Faiz: <b>${r.percent}%</b></span><span>Düzgün: <b>${r.details.filter(d => d.ok).length}/${r.details.length}</b></span><span>Vaxt: <b>${time(spent)}</b></span></div>
      <div class="row"><a class="btn" href="#/practice/wrong">Səhvlər üzərində iş</a><button class="btn ghost" id="new">Yeni sınaq</button></div></section>
    <section class="card"><h2>Mövzular üzrə</h2><div class="bars">${topics.map(([t, v]) => { const p = Math.round(v.correct / v.total * 100); return `<a class="bar" href="#/practice/${encodeURIComponent(t)}"><span class="bar-t">${esc(t)}</span><span class="bar-track"><i class="${p < 50 ? 'bad' : p < 75 ? 'mid' : 'ok'}" style="width:${Math.max(p, 3)}%"></i></span><span class="bar-v">${v.correct}/${v.total}</span></a>`; }).join('')}</div></section>
    <div class="row between"><h2>Cavabların təhlili</h2><label class="mut small"><input type="checkbox" id="only"> yalnız səhvlər</label></div>
    <div id="rev">${r.details.map((d, k) => `<section class="card qcard rv ${d.ok ? 'is-ok' : 'is-bad'}">${ui.tags(d.q, `<span class="tag strong">${k + 1}</span><span class="pill ${d.ok ? 'ok' : 'bad'}">${d.ok ? '+' + d.pts + ' bal' : bank.answered(d.given) ? '0 bal' : 'cavabsız'}</span>`)}${ui.question(d.q, d.q.type === 'closed' ? d.given : d.given, true)}${ui.feedback(d.q, d.ok)}</section>`).join('')}</div>`;
    app.querySelector('#new').onclick = lobby;
    app.querySelector('#only').onchange = e => app.querySelector('#rev').classList.toggle('only-bad', e.target.checked);
    window.scrollTo(0, 0);
  }

  if (st && left() > 0) run(); else if (st) finish(true); else lobby();
  return () => clearInterval(timer);
};
