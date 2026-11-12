// Hash əsaslı marşrutlaşdırıcı (GitHub Pages-də əlavə konfiqurasiya tələb etmir).
(function () {
  const app = document.getElementById('app');
  let cleanup = null;
  function route() {
    const [name, arg] = (location.hash.replace(/^#\/?/, '') || 'home').split('/');
    const view = PMS.views[name] || PMS.views.home;
    if (cleanup) { cleanup(); cleanup = null; }
    document.querySelectorAll('#nav a').forEach(a => a.classList.toggle('on', a.dataset.r === (PMS.views[name] ? name : 'home')));
    cleanup = view(app, arg ? decodeURIComponent(arg) : undefined) || null;
    window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', route);
  route();
})();
