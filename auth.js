// auth.js — shared password gate for Gratia decks
// Include in <head>: <script src="auth.js"></script>
// Wrap page content in: <div id="deck-content">...</div>
(function() {
  const HASH = 'fd778aa33d8e0adf7a31a82a94a5b7e8be90fbfec59d08e0846570406e018d74';
  const STORAGE_KEY = 'gratia-deck-auth';
  const REMEMBER_DAYS = 30;

  // Inject styles immediately to prevent flash
  const style = document.createElement('style');
  style.textContent = [
    '.auth-gate { position:fixed; inset:0; z-index:9999; background:#032729; display:flex; align-items:center; justify-content:center; }',
    '.auth-gate.hidden { display:none; }',
    '.auth-box { text-align:center; max-width:360px; width:100%; padding:0 24px; }',
    '.auth-logo { width:56px; height:56px; border-radius:14px; background:#00C9A7; color:#032729; font-size:28px; font-weight:700; display:inline-flex; align-items:center; justify-content:center; margin-bottom:24px; }',
    '.auth-title { font-size:22px; font-weight:600; color:#fff; margin-bottom:6px; }',
    '.auth-sub { font-size:14px; color:rgba(255,255,255,0.55); margin-bottom:28px; }',
    '.auth-input-wrap { position:relative; width:100%; }',
    '.auth-toggle-vis { position:absolute; right:12px; top:50%; transform:translateY(-50%); background:none; border:none; cursor:pointer; padding:4px; display:flex; align-items:center; justify-content:center; opacity:0.6; transition:opacity 0.2s; }',
    '.auth-toggle-vis:hover { opacity:1; }',
    '.auth-input { width:100%; padding:14px 44px 14px 16px; border:1px solid rgba(255,255,255,0.15); border-radius:10px; background:rgba(255,255,255,0.06); color:#fff; font-size:16px; font-family:inherit; outline:none; transition:border-color 0.2s; }',
    '.auth-input::placeholder { color:rgba(255,255,255,0.35); }',
    '.auth-input:focus { border-color:#00C9A7; }',
    '.auth-input.shake { animation:shake 0.4s ease; }',
    '@keyframes shake { 0%,100%{transform:translateX(0)} 20%,60%{transform:translateX(-8px)} 40%,80%{transform:translateX(8px)} }',
    '.auth-btn { width:100%; margin-top:12px; padding:14px; border:none; border-radius:10px; background:#00C9A7; color:#032729; font-size:16px; font-weight:600; font-family:inherit; cursor:pointer; transition:opacity 0.2s; }',
    '.auth-btn:hover { opacity:0.88; }',
    '.auth-remember { display:flex; align-items:center; justify-content:center; gap:8px; margin-top:16px; cursor:pointer; }',
    '.auth-remember input[type="checkbox"] { accent-color:#00C9A7; width:16px; height:16px; cursor:pointer; }',
    '.auth-remember span { font-size:13px; color:rgba(255,255,255,0.55); }',
    '.auth-error { margin-top:14px; font-size:13px; color:#ff6b6b; opacity:0; transition:opacity 0.2s; }',
    '.auth-error.visible { opacity:1; }',
    '#deck-content { display:none; }',
    '#deck-content.unlocked { display:contents; }'
  ].join('\n');
  document.head.appendChild(style);

  // Check auth before DOM ready (hide gate immediately if remembered)
  function isAuthed() {
    if (sessionStorage.getItem(STORAGE_KEY) === 'ok') return true;
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (stored && stored.hash === HASH && stored.expires > Date.now()) {
        sessionStorage.setItem(STORAGE_KEY, 'ok');
        return true;
      }
    } catch(e) {}
    return false;
  }

  document.addEventListener('DOMContentLoaded', function() {
    // Build gate HTML
    const gate = document.createElement('div');
    gate.className = 'auth-gate';
    gate.id = 'auth-gate';
    gate.innerHTML =
      '<div class="auth-box">' +
        '<div class="auth-logo">G</div>' +
        '<h1 class="auth-title">Gratia</h1>' +
        '<p class="auth-sub">Enter the password to continue</p>' +
        '<form id="auth-form" autocomplete="off">' +
          '<div class="auth-input-wrap">' +
            '<input type="password" id="auth-input" class="auth-input" placeholder="Password" autofocus>' +
            '<button type="button" id="auth-toggle-vis" class="auth-toggle-vis" aria-label="Toggle password visibility">' +
              '<svg id="eye-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.45)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>' +
              '<svg id="eye-off-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.45)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:none"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>' +
            '</button>' +
          '</div>' +
          '<button type="submit" class="auth-btn">Continue</button>' +
        '</form>' +
        '<label class="auth-remember">' +
          '<input type="checkbox" id="auth-remember" checked>' +
          '<span>Remember me for 30 days</span>' +
        '</label>' +
        '<p class="auth-error" id="auth-error">Incorrect password</p>' +
      '</div>';
    document.body.insertBefore(gate, document.body.firstChild);

    const content = document.getElementById('deck-content');
    const form = document.getElementById('auth-form');
    const input = document.getElementById('auth-input');
    const error = document.getElementById('auth-error');
    const remember = document.getElementById('auth-remember');
    const toggleVis = document.getElementById('auth-toggle-vis');
    const eyeIcon = document.getElementById('eye-icon');
    const eyeOffIcon = document.getElementById('eye-off-icon');

    // Already authed
    if (isAuthed()) {
      gate.classList.add('hidden');
      content.classList.add('unlocked');
      return;
    }

    // Toggle password visibility
    toggleVis.addEventListener('click', function() {
      const isPassword = input.type === 'password';
      input.type = isPassword ? 'text' : 'password';
      eyeIcon.style.display = isPassword ? 'none' : 'block';
      eyeOffIcon.style.display = isPassword ? 'block' : 'none';
      input.focus();
    });

    async function sha256(str) {
      const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
      return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');
    }

    // Form submit
    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      const hash = await sha256(input.value);
      if (hash === HASH) {
        sessionStorage.setItem(STORAGE_KEY, 'ok');
        if (remember.checked) {
          localStorage.setItem(STORAGE_KEY, JSON.stringify({
            hash: HASH,
            expires: Date.now() + REMEMBER_DAYS * 24 * 60 * 60 * 1000
          }));
        }
        gate.classList.add('hidden');
        content.classList.add('unlocked');
      } else {
        error.classList.add('visible');
        input.classList.add('shake');
        setTimeout(function() { input.classList.remove('shake'); }, 400);
      }
    });
  });
})();
