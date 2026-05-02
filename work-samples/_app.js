// Shared interactivity for all Gratia work-samples.
// Loaded by every sample via <script src="../_app.js"></script>.

(function () {
  // ===== Toast =====
  function showToast(text, kind) {
    let host = document.getElementById('gratia-toast-host');
    if (!host) {
      host = document.createElement('div');
      host.id = 'gratia-toast-host';
      document.body.appendChild(host);
    }
    const t = document.createElement('div');
    t.className = 'gratia-toast' + (kind ? ' ' + kind : '');
    t.textContent = text;
    host.appendChild(t);
    requestAnimationFrame(() => t.classList.add('show'));
    setTimeout(() => {
      t.classList.remove('show');
      setTimeout(() => t.remove(), 280);
    }, 2400);
  }
  window.showToast = showToast;

  // ===== Decorative head-action buttons =====
  // Any .btn inside .head-actions that isn't otherwise wired up shows a
  // "Demo · would <label>" toast on click.
  document.addEventListener('click', function (e) {
    const btn = e.target.closest('.head-actions .btn');
    if (!btn) return;
    if (btn.dataset.wired === 'true') return; // skip if explicitly wired
    const label = (btn.textContent || '').trim().replace(/\s+/g, ' ');
    if (!label) return;
    showToast('Demo · would ' + label, 'info');
  });
})();
