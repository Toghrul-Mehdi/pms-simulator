// Məşq rejimi: mövzu və tip üzrə filtr, hər cavabdan sonra izah.
PMS.views.practice = function (app, arg) {
  const { esc } = PMS.util, ui = PMS.ui, bank = PMS.bank;
  const wrongIds = PMS.store.get('wrong', []);
  const preset = arg === 'wrong' ? { src: 'wrong' } : { topic: arg };

  app.innerHTML = `<h1>Mövzu üzrə məşq</h1>
  <section class="card filters">
    <label>Mövzu<select id="f-topic"><option value="">Bütün mövzular</option>${bank.topics().map(t => `<option ${t === preset.topic ? 'selected' : ''}>${esc(t)}</option>`).join('')}</select></label>
    <label>Tapşırıq növü<select id="f-type"><option value="all">Hamısı</option><option value="closed">Qapalı (test)</option><option value="open">Açıq (hesablama)</option><option value="gen">Yeni rəqəmlərlə hesablama ∞</option></select></label>
    <label>Mənbə<select id="f-src"><option value="all">Bütün bank</option><option value="wrong" ${preset.src === 'wrong' ? 'selected' : ''}>Səhvlərim (${wrongIds.length})</option></select></label>
    <label>Say<select id="f-n"><option>10</option><option selected>20</option><option>40</option></select></label>
    <button class="btn" id="go">Başla</button>
  </section><div id="stage"></div>`;
  const $ = s => app.querySelector(s), stage = $('#stage');

  function start() {
    const src = $('#f-src').value, type = $('#f-type').value;
    const list = bank.select({ topic: $('#f-topic').value || undefined, type: src === 'wrong' && type === 'gen' ? 'all' : type, ids: src === 'wrong' ? PMS.store.get('wrong', []) : undefined, limit: +$('#f-n').value });
    if (!list.length) { stage.innerHTML = '<section class="card"><p>Bu filtrə uyğun sual tapılmadı.</p></section>'; return; }
    let i = 0, ok = 0;
    const show = () => {
      if (i >= list.length) {
        stage.innerHTML = `<section class="card center"><div class="big">${ok} / ${list.length}</div><p class="mut">Məşq bitdi.</p><div class="row center"><button class="btn" id="again">Yenidən</button><a class="btn ghost" href="#/home">Əsas səhifə</a></div></section>`;
        $('#again').onclick = start; return;
      }
      const q = list[i];
      stage.innerHTML = `<section class="card qcard"><div class="progress"><i style="width:${i / list.length * 100}%"></i></div>
        ${ui.tags(q, `<span class="tag strong">${i + 1} / ${list.length}</span>`)}
        <div id="qb">${ui.question(q)}</div><div id="fb"></div>
        <div class="row"><button class="btn" id="chk">Yoxla</button><span class="mut small">Düzgün: ${ok}</span></div></section>`;
      const check = () => {
        const given = ui.read(stage, q); if (given === undefined) return;
        const good = bank.check(q, given); if (good) ok++;
        bank.record(q, good);
        $('#qb').innerHTML = ui.question(q, given, true);
        $('#fb').innerHTML = ui.feedback(q, good);
        const b = $('#chk'); b.textContent = i === list.length - 1 ? 'Nəticə' : 'Növbəti →'; b.onclick = () => { i++; show(); }; b.focus();
      };
      $('#chk').onclick = check;
      const inp = $('#open-in'); if (inp) { inp.focus(); inp.onkeydown = e => { if (e.key === 'Enter') check(); }; }
    };
    show(); stage.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  $('#go').onclick = start;
  if (arg) start();
};
