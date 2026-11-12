// Metodik materiallar: solda mündəricat, sağda bölmələr.
PMS.views.materials = function (app) {
  const { esc } = PMS.util, S = PMS.materials.sections;
  app.innerHTML = `<h1>Metodik materiallar</h1><p class="mut">Tam MHBS (IFRS) — "Maliyyə hesabatları" sertifikat növü üçün qısa konspekt.</p>
  <div class="split"><aside class="toc">${S.map(s => `<button data-id="${s.id}">${esc(s.title)}</button>`).join('')}</aside>
  <div>${S.map(s => `<article class="card" id="m-${s.id}"><h2>${esc(s.title)}</h2><ul>${s.body.map(b => `<li>${b}</li>`).join('')}</ul></article>`).join('')}</div></div>`;
  app.querySelectorAll('.toc button').forEach(b => b.onclick = () => document.getElementById('m-' + b.dataset.id).scrollIntoView({ behavior: 'smooth', block: 'start' }));
};
