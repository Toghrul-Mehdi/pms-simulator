// Sual bankı: qeydiyyat, seçim, yoxlama, qiymətləndirmə və irəliləyişin uçotu.
(function () {
  const { shuffle, parse } = PMS.util;
  const L = 'ABCDE';

  PMS.bank = {
    letters: L,
    // Data faylları üçün: sabit id-li sual yaradan köməkçilər
    maker(prefix) {
      let n = 0;
      return {
        C: (topic, text, options, answer, explanation) => ({ id: prefix + 'c' + ++n, type: 'closed', topic, text, options, answer, explanation }),
        O: (topic, text, answer, explanation, tolerance, unit) => ({ id: prefix + 'o' + ++n, type: 'open', topic, text, answer, explanation, tolerance: tolerance ?? 0.5, unit: unit || 'AZN' }),
      };
    },
    add(list) { PMS.questions.push(...list); },
    gen(topic, fn) { PMS.generators.push({ topic, fn }); },

    topics() { return [...new Set([...PMS.questions, ...PMS.generators].map(q => q.topic))]; },
    counts() { const q = PMS.questions; return { closed: q.filter(x => x.type === 'closed').length, open: q.filter(x => x.type === 'open').length, gen: PMS.generators.length }; },

    // Qapalı sualın variantlarını qarışdırır (düzgün cavabın yeri hər dəfə dəyişir)
    instance(q) {
      if (q.type !== 'closed') return { ...q };
      const order = shuffle(q.options.map((_, i) => i));
      return { ...q, options: order.map(i => q.options[i]), answer: order.indexOf(q.answer) };
    },
    generated(count, topic) {
      const pool = PMS.generators.filter(g => !topic || g.topic === topic);
      if (!pool.length) return [];
      let bag = [];
      while (bag.length < count) bag = bag.concat(shuffle(pool));
      return bag.slice(0, count).map((g, i) => {
        const q = g.fn();
        return { id: 'g' + Date.now() + '_' + i, type: 'open', topic: g.topic, tolerance: 0.5, unit: 'AZN', generated: true, ...q };
      });
    },
    // Filtrə uyğun suallar: {topic, type: all|closed|open|gen, ids}
    select({ topic, type = 'all', ids, limit = 25 } = {}) {
      if (type === 'gen') return this.generated(limit, topic);
      let pool = PMS.questions.filter(q => (!topic || q.topic === topic) && (type === 'all' || q.type === type) && (!ids || ids.includes(q.id)));
      return shuffle(pool).slice(0, limit).map(q => this.instance(q));
    },
    buildExam(mode) {
      const c = PMS.config[mode];
      const nGen = Math.round(c.open * PMS.config.generatedShare);
      const closed = this.select({ type: 'closed', limit: c.closed });
      const open = shuffle([...this.select({ type: 'open', limit: c.open - nGen }), ...this.generated(nGen)]);
      return { mode, minutes: c.minutes, questions: [...closed, ...open] };
    },

    answered: v => v !== undefined && v !== null && v !== '',
    check(q, given) {
      if (!this.answered(given)) return false;
      if (q.type === 'closed') return Number(given) === q.answer;
      const n = parse(given);
      return Number.isFinite(n) && Math.abs(n - q.answer) <= q.tolerance + 1e-9;
    },
    answerText: q => q.type === 'closed' ? `${L[q.answer]}) ${q.options[q.answer]}` : `${PMS.util.money(q.answer)} ${q.unit}`,
    grade(questions, answers) {
      const cfg = PMS.config; let score = 0, max = 0; const byTopic = {};
      // Bal tapşırığın öz tipi daxilindəki sırasına görə verilir (rəsmi bölgü; mini sınaqda mütənasib).
      const seen = { closed: 0, open: 0 }, total = { closed: 0, open: 0 };
      questions.forEach(q => total[q.type]++);
      const ptsFor = (type, i) => {
        const tiers = cfg.points[type], full = tiers.reduce((a, [n]) => a + n, 0);
        let acc = 0;
        for (const [n, p] of tiers) { acc += n; if (i < Math.round(acc * total[type] / full)) return p; }
        return tiers[tiers.length - 1][1];
      };
      const details = questions.map(q => {
        const pts = ptsFor(q.type, seen[q.type]++);
        const ok = this.check(q, answers[q.id]);
        max += pts; if (ok) score += pts;
        const t = byTopic[q.topic] ||= { correct: 0, total: 0 }; t.total++; if (ok) t.correct++;
        return { q, given: answers[q.id], ok, pts: ok ? pts : 0, max: pts };
      });
      const percent = max ? Math.round(score / max * 1000) / 10 : 0;
      return { score, max, percent, passed: percent >= cfg.passPercent, byTopic, details };
    },

    // İrəliləyiş: mövzu statistikası və səhv cavablanmış sualların siyahısı
    record(q, ok) {
      const stats = PMS.store.get('stats', {});
      const s = stats[q.topic] ||= { c: 0, t: 0 }; s.t++; if (ok) s.c++;
      PMS.store.set('stats', stats);
      if (q.generated) return;
      const wrong = new Set(PMS.store.get('wrong', []));
      ok ? wrong.delete(q.id) : wrong.add(q.id);
      PMS.store.set('wrong', [...wrong]);
    },
  };
})();
