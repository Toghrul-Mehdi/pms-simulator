// Mühazirələr: rəsmi proqramın bəndləri üzrə mündəricat, mühazirə mətni, rəsmi mənbələr və yığcam konspekt.
PMS.views.materials = function (app, id) {
  const { esc } = PMS.util, S = PMS.materials.sections, K = PMS.materials.konspekt || [], SRC = PMS.sources || {};
  const read = new Set(PMS.store.get('read', []));
  const idx = Math.max(0, S.findIndex(s => s.id === id)), s = S[idx];
  const groups = [...new Set(S.map(x => x.group))];

  const block = b => {
    let body = '';
    if (b.p) body = b.p.map(x => `<p>${x}</p>`).join('');
    if (b.ul) body = `<ul>${b.ul.map(x => `<li>${x}</li>`).join('')}</ul>`;
    if (b.warn) body = `<ul>${b.warn.map(x => `<li>${x}</li>`).join('')}</ul>`;
    if (b.dt) body = `<div class="entries">${b.dt.map(x => `<div>${x}</div>`).join('')}</div>`;
    if (b.ex) body = `<p class="ex-q">${b.ex.q}</p><ol>${b.ex.steps.map(x => `<li>${x}</li>`).join('')}</ol>`;
    if (b.table) body = `<div class="tbl"><table>${b.table.map((r, i) => `<tr>${r.map(c => i ? `<td>${c}</td>` : `<th>${c}</th>`).join('')}</tr>`).join('')}</table></div>`;
    return `<section class="blk ${b.ex ? 'ex' : b.warn ? 'warn' : ''}"><h3>${esc(b.h)}</h3>${body}</section>`;
  };
  const k = K.find(x => x.id === s.k);
  const sources = (s.src || []).map(key => SRC[key]).filter(Boolean);

  app.innerHTML = `<h1>Mühazirələr</h1><p class="mut">Rəsmi imtahan proqramının bəndləri üzrə, Maliyyə Nazirliyinin dərc etdiyi standart mətnləri və qanunvericilik əsasında. Oxunub: ${read.size}/${S.length}</p>
  <div class="split">
    <aside class="toc">${groups.map(g => `<p>${esc(g)}</p>${S.filter(x => x.group === g).map(x => `<a href="#/materials/${x.id}" class="${x.id === s.id ? 'on' : ''} ${read.has(x.id) ? 'done' : ''}"><span class="num">${x.n}</span>${esc(x.title)}</a>`).join('')}`).join('')}</aside>
    <article class="card lesson">
      <p class="eyebrow">Proqramın ${esc(String(s.n))}-ci bəndi · ${esc(s.group)}</p><h2>${esc(s.title)}</h2>
      <p class="summary">${s.summary}</p>
      ${s.blocks.map(block).join('')}
      ${sources.length ? `<section class="blk src"><h3>Mənbələr</h3><ol>${sources.map(x => `<li><a href="${x.u}" target="_blank" rel="noopener">${esc(x.t)}</a></li>`).join('')}</ol><p class="mut small">Mətndəki "m." işarəsi birinci mənbənin maddə nömrəsini göstərir. Mühazirə rəsmi mətnin şərhidir — mübahisəli halda rəsmi mətn əsas götürülür.</p></section>` : ''}
      ${k ? `<details class="konspekt"><summary>Yığcam konspekt və hesablama nümunələri</summary>${k.blocks.map(block).join('')}</details>` : ''}
      <div class="row between">
        ${idx > 0 ? `<a class="btn ghost" href="#/materials/${S[idx - 1].id}">← Əvvəlki</a>` : '<span></span>'}
        ${s.topic ? `<a class="btn" href="#/practice/${encodeURIComponent(s.topic)}">Bu mövzu üzrə məşq</a>` : ''}
        ${idx < S.length - 1 ? `<a class="btn ghost" href="#/materials/${S[idx + 1].id}">Növbəti →</a>` : '<span></span>'}
      </div>
      <label class="mut small check"><input type="checkbox" id="rd" ${read.has(s.id) ? 'checked' : ''}> Bu mühazirəni oxudum</label>
    </article>
  </div>`;
  app.querySelector('#rd').onchange = e => { e.target.checked ? read.add(s.id) : read.delete(s.id); PMS.store.set('read', [...read]); PMS.views.materials(app, s.id); };
};
