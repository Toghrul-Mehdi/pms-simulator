// Nüvə: qlobal ad fəzası, konfiqurasiya, köməkçi funksiyalar, localStorage.
window.PMS = {
  config: {
    certificate: 'Maliyyə hesabatları (MHBS)',
    full: { closed: 30, open: 10, minutes: 180 },
    mini: { closed: 10, open: 3, minutes: 30 },
    closedPoints: 2, openPoints: 4, passPercent: 50,
    generatedShare: 0.4, // açıq tapşırıqların hansı hissəsi generatordan gəlir
  },
  // Mövzu adları (bütün data fayllarında eyni açarlar)
  T: {
    F: 'Konseptual əsaslar / IAS 1', E: 'IAS 8 / IAS 10', I2: 'IAS 2 Ehtiyatlar', I16: 'IAS 16 Əsas vəsaitlər',
    I36: 'IAS 36 Dəyərsizləşmə', I38: 'IAS 38 / 40 / 23 / 20', L: 'IFRS 16 İcarə', R: 'IFRS 15 Gəlir',
    P: 'IAS 37 Ehtiyatlar', X: 'IAS 12 Mənfəət vergisi', FI: 'IFRS 9 / IAS 32', G: 'IFRS 10 / 3 / IAS 28',
    OT: 'IAS 7 / 21 / 33 / 19 / 13 / 5 / 24', N: 'Digər standartlar (IFRS 1, 2, 8, 11, IAS 34, 41)',
  },
  questions: [], generators: [], materials: null, views: {},
};

PMS.util = {
  esc: s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])),
  time(s) { s = Math.max(0, s); const p = n => String(n).padStart(2, '0'); return `${p(Math.floor(s / 3600))}:${p(Math.floor(s / 60) % 60)}:${p(s % 60)}`; },
  parse: v => Number(String(v).replace(/\s/g, '').replace(',', '.')),
  money: n => Number(n).toLocaleString('ru-RU', { maximumFractionDigits: 2 }).replace(/ /g, ' '),
  shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; },
  ri: (a, b) => a + Math.floor(Math.random() * (b - a + 1)),
  pick: a => a[Math.floor(Math.random() * a.length)],
  round: (x, d = 0) => Math.round(x * 10 ** d) / 10 ** d,
};

PMS.store = {
  get(k, d) { try { const v = JSON.parse(localStorage.getItem('pms_' + k)); return v ?? d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem('pms_' + k, JSON.stringify(v)); } catch {} },
  del(k) { try { localStorage.removeItem('pms_' + k); } catch {} },
};
