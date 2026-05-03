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

  // ===== Reusable drawer =====
  // Samples call gratiaDrawer.open({ eyebrow, title, body }) — body is HTML.
  // The drawer markup is injected once on first use and reused.
  let drawerEl = null;
  let overlayEl = null;
  function ensureDrawer() {
    if (drawerEl) return;
    overlayEl = document.createElement('div');
    overlayEl.className = 'drawer-overlay';
    overlayEl.id = 'gratia-drawer-overlay';
    overlayEl.setAttribute('aria-hidden', 'true');
    drawerEl = document.createElement('aside');
    drawerEl.className = 'drawer';
    drawerEl.id = 'gratia-drawer';
    drawerEl.setAttribute('role', 'dialog');
    drawerEl.setAttribute('aria-hidden', 'true');
    drawerEl.innerHTML =
      '<div class="drawer-head">' +
        '<div>' +
          '<div class="gratia-drawer-eyebrow" style="font-size:10px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:var(--ink-3);margin-bottom:4px;"></div>' +
          '<h2 class="gratia-drawer-title"></h2>' +
        '</div>' +
        '<button class="icon-btn gratia-drawer-close" aria-label="Close">' +
          '<svg fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24" style="width:18px;height:18px;"><path d="M6 6l12 12M18 6L6 18" stroke-linecap="round"/></svg>' +
        '</button>' +
      '</div>' +
      '<div class="drawer-body gratia-drawer-body"></div>';
    document.body.appendChild(overlayEl);
    document.body.appendChild(drawerEl);
    overlayEl.addEventListener('click', closeDrawer);
    drawerEl.querySelector('.gratia-drawer-close').addEventListener('click', closeDrawer);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && drawerEl.classList.contains('open')) closeDrawer();
    });
  }
  function openDrawer(opts) {
    ensureDrawer();
    drawerEl.querySelector('.gratia-drawer-eyebrow').textContent = opts.eyebrow || '';
    drawerEl.querySelector('.gratia-drawer-title').textContent = opts.title || '';
    drawerEl.querySelector('.gratia-drawer-body').innerHTML = opts.body || '';
    drawerEl.classList.add('open');
    drawerEl.setAttribute('aria-hidden', 'false');
    overlayEl.classList.add('open');
    overlayEl.setAttribute('aria-hidden', 'false');
  }
  function closeDrawer() {
    if (!drawerEl) return;
    drawerEl.classList.remove('open');
    drawerEl.setAttribute('aria-hidden', 'true');
    overlayEl.classList.remove('open');
    overlayEl.setAttribute('aria-hidden', 'true');
  }
  window.gratiaDrawer = { open: openDrawer, close: closeDrawer };
})();
