# Kissflow Training Tab Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development to implement this plan task-by-task.

**Goal:** Add a "Training" tab to `gratia/hypercare-dashboard.html` showing the end-user training experience (Priya Shah's view): documents, video, walkthrough, quiz, mark-complete, support, metrics.

**Architecture:** Same single-file static prototype as the Hypercare tab. Adds one new tab button + one new `<div id="tab-training" class="tab-panel">` panel. Each section is self-contained HTML+CSS+JS. One real interaction: quiz auto-grades against hardcoded answers; passing unlocks "Mark complete". One bit of state persists in `localStorage`.

**Spec reference:** `docs/superpowers/specs/2026-05-07-kissflow-training-tab-design.md`

**Tech stack:** Same as Hypercare tab (plain HTML/CSS/JS, inline SVG, Inter + JetBrains Mono).

**Verification:** Visual via browser. No tests.

---

## File structure

- Modify: `gratia/hypercare-dashboard.html` (add tab button, add tab panel, add per-section CSS/JS)

No new files.

---

## Phase A: Tab scaffold + Welcome hero (1 commit)

**Files:** Modify `gratia/hypercare-dashboard.html`

- [ ] **Step 1: Add tab button**

Find the existing tab button:
```html
<button class="tab-btn active" data-tab="dashboard">Hypercare</button>
```

Replace with two tab buttons:
```html
<button class="tab-btn active" data-tab="dashboard">Hypercare</button>
<button class="tab-btn" data-tab="training">Training</button>
```

- [ ] **Step 2: Add empty training tab-panel**

After the existing `</div> <!-- /#tab-dashboard -->` close (and before the matching `</main>` or content close), add:

```html
      <div id="tab-training" class="tab-panel">
        <div class="kf-body">
          <!-- Welcome hero -->
          <section class="page-head">
            <div>
              <span class="eyebrow">Kissflow training · Day 7 of self-paced enrollment</span>
              <h1 class="lede">Welcome back, Priya.</h1>
              <p class="sublede">You've completed 3 of 5 modules. ~22 min left.</p>
            </div>
            <div class="head-actions">
              <div class="progress-ring-wrap">
                <svg width="84" height="84" viewBox="0 0 84 84">
                  <circle cx="42" cy="42" r="36" fill="none" stroke="var(--bg-3)" stroke-width="6"/>
                  <circle cx="42" cy="42" r="36" fill="none" stroke="var(--gold)" stroke-width="6"
                          stroke-dasharray="226" stroke-dashoffset="90"
                          transform="rotate(-90 42 42)" stroke-linecap="round"/>
                  <text x="42" y="46" text-anchor="middle" font-size="18" font-weight="600" fill="var(--ink-0)" font-family="Inter, sans-serif">60%</text>
                </svg>
                <div class="progress-ring-meta">3 of 5 modules</div>
              </div>
            </div>
          </section>

          <!-- Section placeholder for following phases -->
          <div id="training-sections"></div>
        </div>
      </div>
```

- [ ] **Step 3: Add CSS for progress ring**

```css
  .progress-ring-wrap { display: flex; align-items: center; gap: 12px; }
  .progress-ring-meta { color: var(--ink-2); font-family: 'JetBrains Mono', monospace; font-size: 12px; }
```

- [ ] **Step 4: Verify tab switching works**

The original `tab-btn` click handler at the bottom of the script sets `.active` on the matching `.tab-panel`. Confirm it still works for both panels by inspecting the existing `tab-btn` click handler — it should toggle `.active` based on `data-tab`. If not, fix it.

- [ ] **Step 5: Commit**

```bash
git -C /Users/norbertpap/Sites/gratia commit -am "feat: add Training tab scaffold with welcome hero"
```

---

## Phase B: Documents + Video (1 commit)

**Files:** Modify `gratia/hypercare-dashboard.html`

- [ ] **Step 1: Replace `<div id="training-sections"></div>` with the documents + video sections**

Find that placeholder div in the training tab and replace with:

```html
          <!-- Documents -->
          <section class="training-section">
            <div class="section-head">
              <h2>Reference materials</h2>
              <span class="count">2 documents · download or view in browser</span>
            </div>
            <div class="docs-grid">
              <a class="doc-tile cyan" href="#" onclick="event.preventDefault(); alert('Mock — PDF would open here.');">
                <div class="doc-icon">PDF</div>
                <div class="doc-meta">
                  <div class="doc-title">Quick Reference Guide</div>
                  <div class="doc-sub">8 pages · updated May 2</div>
                </div>
                <div class="doc-actions">
                  <button class="btn">View</button>
                  <button class="btn primary">Download</button>
                </div>
              </a>
              <a class="doc-tile gold" href="#" onclick="event.preventDefault(); alert('Mock — PDF would open here.');">
                <div class="doc-icon">PDF</div>
                <div class="doc-meta">
                  <div class="doc-title">Full Step Guide</div>
                  <div class="doc-sub">42 pages · updated April 28</div>
                </div>
                <div class="doc-actions">
                  <button class="btn">View</button>
                  <button class="btn primary">Download</button>
                </div>
              </a>
            </div>
          </section>

          <!-- Video demo -->
          <section class="training-section">
            <div class="section-head">
              <h2>Video walkthrough</h2>
              <span class="count">12 min · introduces the SMA onboarding workflow</span>
            </div>
            <div class="video-card">
              <div class="video-thumb">
                <div class="video-status watched"><span class="dot g"></span>Watched · May 4</div>
                <div class="video-duration">12:08</div>
                <div class="video-play">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                </div>
              </div>
              <div class="video-meta">
                <h3>Onboarding a new SMA client end-to-end</h3>
                <p class="sub">Walks through Impact Assessment → Tasks Selection → In Progress → Ready for Trading → Onboarding Complete with a real client example.</p>
              </div>
            </div>
          </section>

          <!-- Walkthrough placeholder -->
          <div id="walkthrough-section"></div>

          <!-- Quiz placeholder -->
          <div id="quiz-section"></div>

          <!-- Mark complete + support + metrics placeholder -->
          <div id="footer-sections"></div>
```

- [ ] **Step 2: Add CSS**

```css
  .training-section { margin-top: 28px; }
  .training-section .section-head {
    display: flex; align-items: baseline; justify-content: space-between;
    margin-bottom: 14px;
  }
  .training-section .section-head h2 { font-size: 18px; color: var(--ink-0); font-weight: 600; }
  .training-section .section-head .count { color: var(--ink-2); font-size: 12.5px; }
  .docs-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
  .doc-tile {
    display: grid; grid-template-columns: 56px 1fr auto; gap: 16px;
    align-items: center;
    padding: 18px;
    background: var(--bg-1);
    border: 1px solid var(--border);
    border-radius: 8px;
    text-decoration: none;
    color: inherit;
    transition: border-color 0.15s, background 0.15s;
    position: relative;
    overflow: hidden;
  }
  .doc-tile::before {
    content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 3px;
  }
  .doc-tile.cyan::before { background: #6cb6e8; }
  .doc-tile.gold::before { background: var(--gold); }
  .doc-tile:hover { border-color: var(--border-2); background: var(--bg-2); }
  .doc-icon {
    width: 56px; height: 64px; border-radius: 6px;
    background: var(--bg-3); border: 1px solid var(--border);
    display: flex; align-items: center; justify-content: center;
    font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--ink-2);
    font-weight: 600; letter-spacing: 0.04em;
  }
  .doc-tile.cyan .doc-icon { color: #6cb6e8; border-color: rgba(108, 182, 232, 0.3); }
  .doc-tile.gold .doc-icon { color: var(--gold-ink); border-color: var(--gold-line); }
  .doc-title { color: var(--ink-0); font-weight: 500; font-size: 14px; }
  .doc-sub { color: var(--ink-2); font-size: 12px; margin-top: 4px; font-family: 'JetBrains Mono', monospace; }
  .doc-actions { display: flex; gap: 8px; }
  .video-card {
    display: grid; grid-template-columns: 1.4fr 1fr; gap: 24px;
    background: var(--bg-1); border: 1px solid var(--border); border-radius: 8px;
    overflow: hidden;
  }
  .video-thumb {
    aspect-ratio: 16/9;
    background: linear-gradient(135deg, #1e3a5f 0%, #2d5985 50%, #4a7ba9 100%);
    position: relative; cursor: pointer;
    display: flex; align-items: center; justify-content: center;
  }
  .video-play {
    width: 64px; height: 64px; border-radius: 50%;
    background: rgba(255,255,255,0.92);
    color: #1a1a1c;
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 8px 24px rgba(0,0,0,0.4);
    transition: transform 0.2s;
  }
  .video-thumb:hover .video-play { transform: scale(1.06); }
  .video-status {
    position: absolute; top: 12px; right: 12px;
    background: rgba(0,0,0,0.5); color: var(--green-ink);
    padding: 4px 10px; border-radius: 999px;
    font-size: 11px; display: inline-flex; align-items: center; gap: 6px;
    backdrop-filter: blur(4px);
  }
  .video-status .dot { width: 6px; height: 6px; border-radius: 50%; }
  .video-status .dot.g { background: var(--green-ink); }
  .video-duration {
    position: absolute; bottom: 12px; right: 12px;
    background: rgba(0,0,0,0.6); color: white;
    padding: 3px 8px; border-radius: 4px;
    font-size: 11px; font-family: 'JetBrains Mono', monospace;
  }
  .video-meta { padding: 24px; display: flex; flex-direction: column; justify-content: center; }
  .video-meta h3 { font-size: 16px; color: var(--ink-0); margin-bottom: 8px; }
  .video-meta .sub { color: var(--ink-2); font-size: 13px; line-height: 1.55; }
```

- [ ] **Step 3: Wire video click**

Add a click handler to the video thumb that shows an alert (mock):

```javascript
  // ===== Training: video mock =====
  const videoThumb = document.querySelector('#tab-training .video-thumb');
  if (videoThumb) {
    videoThumb.addEventListener('click', () => alert('Mock — video player would open here.'));
  }
```

- [ ] **Step 4: Commit**

```bash
git -C /Users/norbertpap/Sites/gratia commit -am "feat: training tab — documents + video sections"
```

---

## Phase C: Click-through walkthrough stepper (1 commit)

**Files:** Modify `gratia/hypercare-dashboard.html`

- [ ] **Step 1: Replace `<div id="walkthrough-section"></div>` with**

```html
          <!-- Click-through walkthrough -->
          <section class="training-section">
            <div class="section-head">
              <h2>Hands-on walkthrough</h2>
              <span class="count" id="wkStepCount">Step 1 of 5</span>
            </div>
            <div class="walkthrough">
              <div class="wk-stepper" id="wkStepper"></div>
              <div class="wk-body" id="wkBody"></div>
              <div class="wk-nav">
                <button class="btn" id="wkPrev">← Previous</button>
                <button class="btn primary" id="wkNext">Next →</button>
              </div>
            </div>
          </section>
```

- [ ] **Step 2: Add CSS**

```css
  .walkthrough {
    background: var(--bg-1); border: 1px solid var(--border); border-radius: 8px;
    padding: 24px;
  }
  .wk-stepper { display: flex; align-items: center; gap: 0; margin-bottom: 24px; }
  .wk-step {
    flex: 1; display: flex; align-items: center; gap: 10px;
    padding: 8px 4px;
    color: var(--ink-3);
    border-bottom: 2px solid var(--border);
    font-size: 12.5px;
    cursor: pointer;
    transition: color 0.15s, border-color 0.15s;
  }
  .wk-step.done { color: var(--green-ink); border-color: var(--green-line); }
  .wk-step.active { color: var(--ink-0); border-color: var(--gold); font-weight: 500; }
  .wk-step .wk-num {
    width: 22px; height: 22px; border-radius: 50%;
    background: var(--bg-3); color: inherit;
    display: flex; align-items: center; justify-content: center;
    font-size: 11px; font-family: 'JetBrains Mono', monospace; font-weight: 500;
    border: 1px solid var(--border);
  }
  .wk-step.active .wk-num { background: var(--gold-dim); color: var(--gold-ink); border-color: var(--gold-line); }
  .wk-step.done .wk-num { background: var(--green-dim); color: var(--green-ink); border-color: var(--green-line); }
  .wk-body { display: grid; grid-template-columns: 1fr 1.3fr; gap: 28px; padding: 12px 0; }
  .wk-body h3 { font-size: 17px; color: var(--ink-0); margin-bottom: 12px; }
  .wk-body p { color: var(--ink-1); line-height: 1.55; font-size: 13.5px; }
  .wk-screenshot {
    aspect-ratio: 16/10;
    background: var(--bg-2); border: 1px solid var(--border); border-radius: 6px;
    display: flex; align-items: center; justify-content: center;
    color: var(--ink-3); font-size: 12.5px; font-family: 'JetBrains Mono', monospace;
    position: relative;
  }
  .wk-screenshot::before {
    content: ''; position: absolute; inset: 12px;
    border: 1px dashed var(--border-2); border-radius: 4px;
  }
  .wk-pin {
    position: absolute; width: 22px; height: 22px; border-radius: 50%;
    background: var(--gold); color: var(--bg);
    display: flex; align-items: center; justify-content: center;
    font-size: 11px; font-weight: 600; font-family: 'JetBrains Mono', monospace;
    box-shadow: 0 0 0 4px rgba(22, 163, 138, 0.25);
  }
  .wk-nav { display: flex; justify-content: space-between; gap: 12px; margin-top: 18px; }
  .wk-nav .btn[disabled] { opacity: 0.4; cursor: not-allowed; }
```

- [ ] **Step 3: Add walkthrough state + render JS**

```javascript
  // ===== Training: walkthrough stepper =====
  const WALKTHROUGH_STEPS = [
    { title: 'Open your work queue', body: 'From the Kissflow home screen, click "My Onboardings" in the left sidebar. Your queue shows all SMA clients assigned to you, grouped by stage.', pin: '1' },
    { title: 'Start a new SMA onboarding', body: 'Click "+ New onboarding". Fill in the client identifier and select the SMA strategy. The workflow opens at Impact Assessment by default.', pin: '2' },
    { title: 'Move tasks through stages', body: 'Drag a task card or use the stage selector to advance. Each stage has its own SLA — Impact Assessment and Tasks Selection are both 24h.', pin: '3' },
    { title: 'Add dependencies and notes', body: 'Use the dependency tag to flag pending input from another team. Notes are visible to the whole onboarding team and the exec dashboard.', pin: '4' },
    { title: 'Mark onboarding complete', body: 'Once Ready for Trading is signed off, complete any post-event closure tasks and click "Mark complete". The onboarding moves to the closed tab.', pin: '5' },
  ];
  let wkCurrent = 0;
  function renderWalkthrough() {
    const stepper = document.getElementById('wkStepper');
    const body = document.getElementById('wkBody');
    const count = document.getElementById('wkStepCount');
    if (!stepper || !body || !count) return;
    stepper.innerHTML = WALKTHROUGH_STEPS.map((s, i) => {
      const cls = i < wkCurrent ? 'wk-step done' : (i === wkCurrent ? 'wk-step active' : 'wk-step');
      return `<div class="${cls}" data-step="${i}"><span class="wk-num">${i+1}</span>${s.title}</div>`;
    }).join('');
    const s = WALKTHROUGH_STEPS[wkCurrent];
    body.innerHTML = `
      <div>
        <h3>${s.title}</h3>
        <p>${s.body}</p>
      </div>
      <div class="wk-screenshot">
        <span class="wk-pin" style="top:30%;left:18%;">${s.pin}</span>
      </div>
    `;
    count.textContent = `Step ${wkCurrent + 1} of ${WALKTHROUGH_STEPS.length}`;
    document.getElementById('wkPrev').disabled = wkCurrent === 0;
    document.getElementById('wkNext').disabled = wkCurrent === WALKTHROUGH_STEPS.length - 1;
  }
  document.getElementById('wkPrev').addEventListener('click', () => { if (wkCurrent > 0) { wkCurrent--; renderWalkthrough(); } });
  document.getElementById('wkNext').addEventListener('click', () => { if (wkCurrent < WALKTHROUGH_STEPS.length - 1) { wkCurrent++; renderWalkthrough(); } });
  document.getElementById('wkStepper').addEventListener('click', (e) => {
    const step = e.target.closest('.wk-step');
    if (!step) return;
    wkCurrent = +step.dataset.step;
    renderWalkthrough();
  });
  renderWalkthrough();
```

- [ ] **Step 4: Commit**

```bash
git -C /Users/norbertpap/Sites/gratia commit -am "feat: training tab — walkthrough stepper"
```

---

## Phase D: Quiz (1 commit)

**Files:** Modify `gratia/hypercare-dashboard.html`

- [ ] **Step 1: Replace `<div id="quiz-section"></div>` with**

```html
          <!-- Knowledge check -->
          <section class="training-section">
            <div class="section-head">
              <h2>Knowledge check</h2>
              <span class="count">5 questions · pass 4 of 5 to mark complete</span>
            </div>
            <div class="quiz" id="quizCard">
              <div id="quizScore" class="quiz-score" hidden></div>
              <div id="quizQuestions"></div>
              <div class="quiz-actions">
                <button class="btn primary" id="quizSubmit">Submit answers</button>
                <button class="btn" id="quizReset" hidden>Try again</button>
              </div>
            </div>
          </section>
```

- [ ] **Step 2: Add CSS**

```css
  .quiz {
    background: var(--bg-1); border: 1px solid var(--border); border-radius: 8px;
    padding: 24px;
  }
  .quiz-question { padding: 16px 0; border-top: 1px solid var(--border); }
  .quiz-question:first-child { border-top: none; padding-top: 0; }
  .quiz-question .q-text { color: var(--ink-0); font-size: 14px; font-weight: 500; margin-bottom: 12px; }
  .quiz-question .q-num { color: var(--ink-3); font-family: 'JetBrains Mono', monospace; margin-right: 8px; }
  .quiz-options { display: flex; flex-direction: column; gap: 6px; }
  .quiz-option {
    display: flex; align-items: center; gap: 10px;
    padding: 10px 14px;
    background: var(--bg-2); border: 1px solid var(--border);
    border-radius: 6px;
    cursor: pointer;
    color: var(--ink-1);
    font-size: 13px;
    transition: background 0.12s, border-color 0.12s;
  }
  .quiz-option:hover { background: var(--bg-3); }
  .quiz-option input { accent-color: var(--gold); }
  .quiz-option.correct  { background: var(--green-dim); border-color: var(--green-line); color: var(--green-ink); }
  .quiz-option.incorrect { background: var(--red-dim);  border-color: var(--red-line);  color: var(--red-ink); }
  .quiz-option.user-pick { font-weight: 500; }
  .quiz-actions { display: flex; gap: 12px; margin-top: 18px; }
  .quiz-score {
    padding: 12px 18px;
    border-radius: 6px;
    margin-bottom: 18px;
    font-weight: 500;
  }
  .quiz-score.pass { background: var(--green-dim); border: 1px solid var(--green-line); color: var(--green-ink); }
  .quiz-score.fail { background: var(--red-dim); border: 1px solid var(--red-line); color: var(--red-ink); }
```

- [ ] **Step 3: Add quiz data + JS**

```javascript
  // ===== Training: quiz =====
  const QUIZ_QUESTIONS = [
    {
      q: "Which stage comes immediately after Tasks Selection in the SMA onboarding workflow?",
      options: ["Impact Assessment", "In Progress", "Ready for Trading", "Onboarding Complete"],
      correct: 1,
    },
    {
      q: "What's the SLA for Impact Assessment and Tasks Selection?",
      options: ["8 hours", "24 hours", "3 business days", "No SLA — variable"],
      correct: 1,
    },
    {
      q: "How do you flag that a task is waiting on input from another team?",
      options: ["Add a comment", "Use the dependency tag", "Email the team lead", "Move to Onboarding Complete"],
      correct: 1,
    },
    {
      q: "Which icon in the left sidebar opens your assigned onboardings?",
      options: ["Calendar icon", "Inbox icon", "My Onboardings menu item", "Settings cog"],
      correct: 2,
    },
    {
      q: "If you're stuck on a stage and can't progress, who do you contact first?",
      options: ["Apollo IT", "Your team lead", "Kissflow support", "The onboarding sponsor"],
      correct: 1,
    },
  ];
  const QUIZ_ANSWERS = new Array(QUIZ_QUESTIONS.length).fill(null);
  let quizSubmitted = false;
  function renderQuiz() {
    const root = document.getElementById('quizQuestions');
    if (!root) return;
    root.innerHTML = QUIZ_QUESTIONS.map((q, qi) => {
      const opts = q.options.map((opt, oi) => {
        let cls = 'quiz-option';
        if (quizSubmitted) {
          if (oi === q.correct) cls += ' correct';
          else if (QUIZ_ANSWERS[qi] === oi) cls += ' incorrect';
          if (QUIZ_ANSWERS[qi] === oi) cls += ' user-pick';
        }
        const checked = QUIZ_ANSWERS[qi] === oi ? ' checked' : '';
        const disabled = quizSubmitted ? ' disabled' : '';
        return `
          <label class="${cls}">
            <input type="radio" name="q${qi}" value="${oi}"${checked}${disabled}>
            <span>${opt}</span>
          </label>
        `;
      }).join('');
      return `
        <div class="quiz-question">
          <div class="q-text"><span class="q-num">Q${qi+1}.</span>${q.q}</div>
          <div class="quiz-options">${opts}</div>
        </div>
      `;
    }).join('');
    root.querySelectorAll('input[type="radio"]').forEach(input => {
      input.addEventListener('change', (e) => {
        const [_, qi] = e.target.name.match(/q(\d+)/);
        QUIZ_ANSWERS[+qi] = +e.target.value;
      });
    });
  }
  function gradeQuiz() {
    const correctCount = QUIZ_QUESTIONS.reduce((acc, q, qi) => acc + (QUIZ_ANSWERS[qi] === q.correct ? 1 : 0), 0);
    const passed = correctCount >= 4;
    quizSubmitted = true;
    renderQuiz();
    const scoreEl = document.getElementById('quizScore');
    scoreEl.hidden = false;
    scoreEl.className = `quiz-score ${passed ? 'pass' : 'fail'}`;
    scoreEl.textContent = `${correctCount} of ${QUIZ_QUESTIONS.length} correct · ${passed ? 'pass — you can mark training complete' : 'try again to unlock training completion'}`;
    document.getElementById('quizSubmit').hidden = true;
    document.getElementById('quizReset').hidden = false;
    if (passed) {
      window.__quizPassed = true;
      document.dispatchEvent(new CustomEvent('quiz-passed'));
    }
  }
  function resetQuiz() {
    QUIZ_ANSWERS.fill(null);
    quizSubmitted = false;
    renderQuiz();
    const scoreEl = document.getElementById('quizScore');
    scoreEl.hidden = true;
    document.getElementById('quizSubmit').hidden = false;
    document.getElementById('quizReset').hidden = true;
  }
  document.getElementById('quizSubmit').addEventListener('click', () => {
    if (QUIZ_ANSWERS.some(a => a === null)) {
      alert('Please answer all questions before submitting.');
      return;
    }
    gradeQuiz();
  });
  document.getElementById('quizReset').addEventListener('click', resetQuiz);
  renderQuiz();
```

- [ ] **Step 4: Commit**

```bash
git -C /Users/norbertpap/Sites/gratia commit -am "feat: training tab — quiz with auto-grade"
```

---

## Phase E: Mark complete + Get support + Metrics (1 commit)

**Files:** Modify `gratia/hypercare-dashboard.html`

- [ ] **Step 1: Replace `<div id="footer-sections"></div>` with**

```html
          <!-- Mark training complete -->
          <section class="training-section">
            <div class="complete-card" id="completeCard">
              <div class="complete-locked" id="completeLocked">
                <div>
                  <div class="complete-title">Mark training complete</div>
                  <div class="complete-sub">Complete the knowledge check above with 4+ correct answers to unlock.</div>
                </div>
                <button class="btn primary" id="completeBtn" disabled>Mark training complete</button>
              </div>
              <div class="complete-done" id="completeDone" hidden>
                <span class="complete-check">✓</span>
                <div>
                  <div class="complete-title">Training complete</div>
                  <div class="complete-sub" id="completeStamp"></div>
                </div>
              </div>
            </div>
          </section>

          <!-- Modal -->
          <div class="modal" id="completeModal" hidden>
            <div class="modal-card">
              <h3>Confirm training complete</h3>
              <p>You're confirming that you've completed Kissflow training. Your team lead will see this in the hypercare dashboard.</p>
              <div class="modal-actions">
                <button class="btn" id="modalCancel">Cancel</button>
                <button class="btn primary" id="modalConfirm">Confirm</button>
              </div>
            </div>
          </div>

          <!-- Get support + Metrics row -->
          <section class="training-section">
            <div class="footer-grid">
              <div class="card support-card">
                <div class="card-head"><div><h3>Need help?</h3><p class="sub">We respond within 4 business hours.</p></div></div>
                <div class="card-body support-body">
                  <a class="support-row" href="mailto:kissflow-training@apollo.example">
                    <span class="support-icon">✉</span>
                    <div>
                      <div class="support-label">Email a trainer</div>
                      <div class="support-detail">kissflow-training@apollo.example</div>
                    </div>
                  </a>
                  <a class="support-row" href="#" onclick="event.preventDefault(); alert('Mock — Slack channel link.')">
                    <span class="support-icon">#</span>
                    <div>
                      <div class="support-label">Ask in Slack</div>
                      <div class="support-detail">#kissflow-help</div>
                    </div>
                  </a>
                  <div class="faq">
                    <div class="faq-title">Common questions</div>
                    <details class="faq-item"><summary>I can't see my onboarding queue</summary><div class="faq-answer">Check that you're signed in with your Apollo SSO account. The queue is filtered by assignee — your team lead can re-assign in bulk.</div></details>
                    <details class="faq-item"><summary>How do I add a dependency?</summary><div class="faq-answer">Open any task and use the "Dependencies" panel on the right. Choose the blocker type (Internal / Client / Vendor) and add a 1-line note. Visible on the exec dashboard.</div></details>
                    <details class="faq-item"><summary>What if I'm stuck on a stage?</summary><div class="faq-answer">First, ping your team lead in Slack. If they're unavailable, escalate to Roberto (project owner) via the dependency tag — that surfaces the blocker on the exec dashboard within an hour.</div></details>
                    <details class="faq-item"><summary>How do I get re-trained?</summary><div class="faq-answer">Re-take the quiz any time. For a 1:1 walkthrough, email kissflow-training@apollo.example with the topic and we'll schedule a 30-minute session within 2 days.</div></details>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-head"><div><h3>My training metrics</h3><p class="sub">Your progress vs Operations · Mumbai team avg</p></div></div>
                <div class="card-body">
                  <div class="metrics-grid">
                    <div class="metric"><div class="metric-label">Modules complete</div><div class="metric-value">3<span class="unit">/5</span></div><div class="metric-vs">team avg 3.7</div></div>
                    <div class="metric"><div class="metric-label">Last quiz score</div><div class="metric-value">4<span class="unit">/5</span></div><div class="metric-vs">team avg 4.1</div></div>
                    <div class="metric"><div class="metric-label">Time spent</div><div class="metric-value">38<span class="unit">m</span></div><div class="metric-vs">team avg 45m</div></div>
                    <div class="metric"><div class="metric-label">Days enrolled</div><div class="metric-value">18</div><div class="metric-vs">team avg 16</div></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
```

- [ ] **Step 2: Add CSS**

```css
  .complete-card {
    background: var(--bg-1); border: 1px solid var(--border); border-radius: 8px;
    padding: 20px 24px;
  }
  .complete-locked, .complete-done { display: flex; align-items: center; justify-content: space-between; gap: 18px; }
  .complete-done { color: var(--green-ink); }
  .complete-check {
    width: 36px; height: 36px; border-radius: 50%;
    background: var(--green-dim); border: 1px solid var(--green-line);
    display: flex; align-items: center; justify-content: center;
    font-size: 18px; flex-shrink: 0;
  }
  .complete-title { font-weight: 500; color: var(--ink-0); font-size: 15px; }
  .complete-done .complete-title { color: var(--green-ink); }
  .complete-sub { color: var(--ink-2); font-size: 12.5px; margin-top: 4px; }
  .complete-btn-enabled { animation: gentle-pulse 2s ease-in-out infinite; }
  @keyframes gentle-pulse { 0%, 100% { box-shadow: 0 0 0 0 var(--gold-line); } 50% { box-shadow: 0 0 0 8px transparent; } }
  .modal {
    position: fixed; inset: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex; align-items: center; justify-content: center;
    z-index: 200;
    backdrop-filter: blur(2px);
  }
  .modal[hidden] { display: none !important; }
  .modal-card {
    background: var(--bg-1); border: 1px solid var(--border-2); border-radius: 10px;
    padding: 24px; max-width: 440px; width: 90%;
    box-shadow: var(--shadow);
  }
  .modal-card h3 { color: var(--ink-0); font-size: 17px; margin-bottom: 10px; }
  .modal-card p { color: var(--ink-1); font-size: 13.5px; line-height: 1.55; margin-bottom: 18px; }
  .modal-actions { display: flex; justify-content: flex-end; gap: 10px; }
  .footer-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
  .support-body { padding: 16px 20px; }
  .support-row {
    display: flex; align-items: center; gap: 12px;
    padding: 10px 0;
    border-bottom: 1px solid var(--border);
    text-decoration: none; color: inherit;
  }
  .support-row:last-of-type { border-bottom: none; }
  .support-row:hover { color: var(--gold-ink); }
  .support-icon {
    width: 32px; height: 32px; border-radius: 50%;
    background: var(--bg-3); border: 1px solid var(--border);
    display: flex; align-items: center; justify-content: center;
    color: var(--ink-1); font-size: 15px;
  }
  .support-label { color: var(--ink-0); font-weight: 500; font-size: 13px; }
  .support-detail { color: var(--ink-2); font-size: 12px; font-family: 'JetBrains Mono', monospace; margin-top: 2px; }
  .faq { margin-top: 18px; padding-top: 14px; border-top: 1px solid var(--border); }
  .faq-title { color: var(--ink-2); font-size: 11.5px; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 8px; }
  .faq-item {
    padding: 8px 0; border-bottom: 1px solid var(--border);
  }
  .faq-item:last-child { border-bottom: none; }
  .faq-item summary {
    cursor: pointer; color: var(--ink-1); font-size: 13px;
    list-style: none;
    padding: 4px 0;
  }
  .faq-item summary::-webkit-details-marker { display: none; }
  .faq-item summary::before { content: '+ '; color: var(--ink-3); font-family: 'JetBrains Mono', monospace; }
  .faq-item[open] summary::before { content: '− '; color: var(--gold-ink); }
  .faq-answer { color: var(--ink-2); font-size: 12.5px; line-height: 1.55; padding: 6px 0 4px 14px; }
  .metrics-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; padding: 8px 4px; }
  .metric { padding: 8px; }
  .metric-label { color: var(--ink-2); font-size: 11.5px; text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 6px; }
  .metric-value { color: var(--ink-0); font-size: 24px; font-weight: 600; font-family: 'JetBrains Mono', monospace; }
  .metric-value .unit { color: var(--ink-3); font-size: 14px; margin-left: 2px; font-weight: 400; }
  .metric-vs { color: var(--ink-3); font-size: 11.5px; margin-top: 4px; font-family: 'JetBrains Mono', monospace; }
```

- [ ] **Step 3: Add JS for unlock + modal + persistence**

```javascript
  // ===== Training: mark complete =====
  const TRAINING_COMPLETE_KEY = 'kissflow-training-complete-priya';
  const completeBtn = document.getElementById('completeBtn');
  const completeLocked = document.getElementById('completeLocked');
  const completeDone = document.getElementById('completeDone');
  const completeStamp = document.getElementById('completeStamp');
  const completeModal = document.getElementById('completeModal');

  function showCompletedState(stamp) {
    completeLocked.hidden = true;
    completeDone.hidden = false;
    completeStamp.textContent = stamp;
  }

  // Restore prior completion if persisted
  try {
    const prior = localStorage.getItem(TRAINING_COMPLETE_KEY);
    if (prior) showCompletedState(prior);
  } catch (e) {}

  document.addEventListener('quiz-passed', () => {
    completeBtn.disabled = false;
    completeBtn.classList.add('complete-btn-enabled');
    completeLocked.querySelector('.complete-sub').textContent = 'Knowledge check passed. Click to confirm completion.';
  });

  completeBtn.addEventListener('click', () => { completeModal.hidden = false; });
  document.getElementById('modalCancel').addEventListener('click', () => { completeModal.hidden = true; });
  document.getElementById('modalConfirm').addEventListener('click', () => {
    completeModal.hidden = true;
    const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    const stamp = `Completed · ${today} by Priya Shah`;
    showCompletedState(stamp);
    try { localStorage.setItem(TRAINING_COMPLETE_KEY, stamp); } catch (e) {}
  });
```

- [ ] **Step 4: Commit and push**

```bash
git -C /Users/norbertpap/Sites/gratia commit -am "feat: training tab — mark complete + support + metrics"
git -C /Users/norbertpap/Sites/gratia push origin main
```

---

## Self-review checklist

- [x] Each section in spec has a task
- [x] Each task has commit
- [x] Code blocks are complete (no TBDs)
- [x] Property names consistent (`QUIZ_ANSWERS`, `WALKTHROUGH_STEPS`, `wkCurrent`, `quizSubmitted`)
- [x] DOM IDs consistent across HTML and JS (`quizCard`, `quizQuestions`, `quizSubmit`, `quizReset`, `quizScore`, `wkStepper`, `wkBody`, `wkPrev`, `wkNext`, `wkStepCount`, `completeBtn`, `completeLocked`, `completeDone`, `completeStamp`, `completeModal`, `modalCancel`, `modalConfirm`)
