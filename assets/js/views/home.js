// Əsas səhifə: irəliləyiş paneli, araşdırma nəticələri, plan.
PMS.views.home = function (app) {
  const { esc } = PMS.util, r = PMS.materials.research, cnt = PMS.bank.counts();
  const hist = PMS.store.get('hist', []), stats = PMS.store.get('stats', {}), wrong = PMS.store.get('wrong', []);
  const running = PMS.store.get('exam', null);
  const tot = Object.values(stats).reduce((a, s) => ({ c: a.c + s.c, t: a.t + s.t }), { c: 0, t: 0 });
  const best = hist.filter(h => h.mode === 'Tam').reduce((m, h) => Math.max(m, h.pct), 0);
  const topicRows = PMS.bank.topics().map(t => ({ t, s: stats[t] })).sort((a, b) => (a.s ? a.s.c / a.s.t : 2) - (b.s ? b.s.c / b.s.t : 2));

  app.innerHTML = `
  <section class="hero">
    <div><p class="eyebrow">Sertifikat növü: ${esc(PMS.config.certificate)}</p>
    <h1>PMS I mərhələyə hazırlıq</h1>
    <p class="lead">${cnt.closed} qapalı və ${cnt.open} açıq tapşırıq, üstəgəl hər dəfə yeni rəqəmlərlə yaranan ${cnt.gen} növ hesablama tapşırığı.</p>
    <div class="row">${running ? '<a class="btn" href="#/exam">İmtahana davam et</a>' : '<a class="btn" href="#/exam">Sınaq imtahanına başla</a>'}<a class="btn ghost" href="#/practice">Mövzu üzrə məşq</a></div></div>
  </section>

  <section class="tiles">
    <div class="tile"><span>Cavablandırılıb</span><b>${tot.t}</b><small>${tot.t ? Math.round(tot.c / tot.t * 100) + '% düzgün' : 'hələ başlamamısınız'}</small></div>
    <div class="tile"><span>Tam sınaqlar</span><b>${hist.filter(h => h.mode === 'Tam').length}</b><small>${best ? 'ən yaxşı nəticə ' + best + '%' : 'keçid həddi ' + PMS.config.passPercent + '%'}</small></div>
    <div class="tile"><span>Səhvlərim</span><b>${wrong.length}</b><small>${wrong.length ? '<a href="#/practice/wrong">təkrar et →</a>' : 'siyahı boşdur'}</small></div>
  </section>

  <section class="card"><h2>Mövzular üzrə irəliləyiş</h2>
    <div class="bars">${topicRows.map(({ t, s }) => { const p = s ? Math.round(s.c / s.t * 100) : 0; return `<a class="bar" href="#/practice/${encodeURIComponent(t)}"><span class="bar-t">${esc(t)}</span><span class="bar-track"><i class="${!s ? '' : p < 50 ? 'bad' : p < 75 ? 'mid' : 'ok'}" style="width:${s ? Math.max(p, 3) : 0}%"></i></span><span class="bar-v">${s ? p + '% · ' + s.t : '—'}</span></a>`; }).join('')}</div>
    <p class="mut small">Zəif mövzular yuxarıdadır. Mövzuya klikləyib məşq edin.</p></section>

  ${hist.length ? `<section class="card"><h2>Son nəticələr</h2><table><tr><th>Tarix</th><th>Rejim</th><th>Bal</th><th>Nəticə</th></tr>${hist.slice(-8).reverse().map(h => `<tr><td>${new Date(h.t).toLocaleString('az')}</td><td>${h.mode}</td><td>${h.score}/${h.max} (${h.pct}%)</td><td><span class="pill ${h.pass ? 'ok' : 'bad'}">${h.pass ? 'Keçdi' : 'Keçmədi'}</span></td></tr>`).join('')}</table></section>` : ''}

  <section class="card"><h2>${esc(r.title)}</h2><ul>${r.points.map(p => `<li>${esc(p)}</li>`).join('')}</ul></section>
  <section class="card"><h2>İmtahan formatı</h2><ul>${r.format.map(p => `<li>${esc(p)}</li>`).join('')}</ul></section>
  <section class="card"><h2>10 günlük plan</h2><table>${PMS.materials.plan.map(d => `<tr><td class="nowrap"><b>Gün ${d.day}</b></td><td>${esc(d.task)}</td></tr>`).join('')}</table></section>
  <section class="card"><h2>Mənbələr</h2><ul>${r.sources.map(s => `<li><a href="${s}" target="_blank" rel="noopener">${esc(s)}</a></li>`).join('')}</ul>
    <button class="btn ghost small" id="reset">İrəliləyişi sıfırla</button></section>`;

  app.querySelector('#reset').onclick = () => {
    if (!confirm('Bütün nəticələr və statistika silinsin?')) return;
    ['hist', 'stats', 'wrong', 'exam'].forEach(PMS.store.del); PMS.views.home(app);
  };
};
