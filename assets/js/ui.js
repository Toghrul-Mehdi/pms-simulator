// Ortaq UI hissələri: sualın göstərilməsi və cavabın oxunması.
(function () {
  const { esc, money } = PMS.util, L = PMS.bank.letters;
  PMS.ui = {
    tags: (q, extra = '') => `<div class="tags">${extra}<span class="tag">${esc(q.topic)}</span><span class="tag ${q.type}">${q.type === 'open' ? 'Açıq tip' : 'Qapalı tip'}</span>${q.generated ? '<span class="tag">Yeni rəqəmlər</span>' : ''}</div>`,
    // reveal=true olduqda düzgün/səhv cavablar rənglənir və input bağlanır
    question(q, given, reveal) {
      const body = q.type === 'closed'
        ? `<div class="opts">${q.options.map((o, i) => {
            const cls = reveal ? (i === q.answer ? 'good' : i === given ? 'wrong' : '') : (i === given ? 'sel' : '');
            return `<label class="opt ${cls}"><input type="radio" name="q" value="${i}" ${i === given ? 'checked' : ''} ${reveal ? 'disabled' : ''}><span class="let">${L[i]}</span><span>${esc(o)}</span></label>`;
          }).join('')}</div>`
        : `<div class="open"><input type="text" id="open-in" inputmode="decimal" autocomplete="off" placeholder="Cavabı rəqəmlə yazın" value="${esc(given ?? '')}" ${reveal ? 'disabled' : ''}><span class="unit">${esc(q.unit)}</span></div>`;
      return `<p class="q-text">${esc(q.text)}</p>${body}`;
    },
    read(root, q) {
      if (q.type === 'closed') { const s = root.querySelector('input[name=q]:checked'); return s ? +s.value : undefined; }
      const v = root.querySelector('#open-in').value.trim(); return v === '' ? undefined : v;
    },
    feedback(q, ok) {
      return `<div class="fb ${ok ? 'ok' : 'bad'}"><b>${ok ? 'Düzdür' : 'Səhvdir'}</b> · Düzgün cavab: ${esc(PMS.bank.answerText(q))}<p>${esc(q.explanation)}</p></div>`;
    },
    money,
  };
})();

// Seçilmiş variantı bütün brauzerlərdə (CSS :has dəstəyindən asılı olmayaraq) vurğulayır.
document.addEventListener('change', e => {
  const r = e.target;
  if (!(r instanceof HTMLInputElement) || r.type !== 'radio' || r.name !== 'q') return;
  const box = r.closest('.opts');
  if (box) box.querySelectorAll('.opt').forEach(o => o.classList.toggle('sel', o.contains(r)));
});
