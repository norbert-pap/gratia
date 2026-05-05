// Shared nav behavior for the Grace KB. Each page links this script.
// - theme toggle (persists to localStorage)
// - section jump dropdown (open/close, click-outside to dismiss)
// - smooth scroll for in-page anchors
// - TOC active state on scroll (only runs if .toc-pane present)

(function () {
  // Theme
  const root = document.documentElement;
  const stored = localStorage.getItem('grace-kb-theme');
  if (stored) root.setAttribute('data-theme', stored);
  const themeBtn = document.getElementById('themeToggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      const cur = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', cur);
      localStorage.setItem('grace-kb-theme', cur);
    });
  }

  // Section jump dropdown
  const jump = document.querySelector('.nav-jump');
  if (jump) {
    const btn = jump.querySelector('.nav-jump-btn');
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      jump.classList.toggle('open');
    });
    document.addEventListener('click', function (e) {
      if (!jump.contains(e.target)) jump.classList.remove('open');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') jump.classList.remove('open');
    });
  }

  // Smooth scroll for in-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      const id = a.getAttribute('href').slice(1);
      if (!id) return;
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
      }
    });
  });

  // TOC active state
  const tocLinks = document.querySelectorAll('.toc-card .toc-link[href^="#"]');
  if (tocLinks.length) {
    const sections = Array.from(tocLinks)
      .map(function (l) { return document.getElementById(l.getAttribute('href').slice(1)); })
      .filter(Boolean);
    function setActiveTOC() {
      const scrollY = window.scrollY + 130;
      let active = sections[0];
      for (const s of sections) {
        if (s && s.offsetTop <= scrollY) active = s;
      }
      tocLinks.forEach(function (l) {
        l.classList.toggle('active', active && l.getAttribute('href') === '#' + active.id);
      });
    }
    window.addEventListener('scroll', setActiveTOC, { passive: true });
    setActiveTOC();
  }
})();
