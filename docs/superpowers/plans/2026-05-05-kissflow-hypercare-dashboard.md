# Kissflow Hypercare Dashboard Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build `gratia/hypercare-dashboard.html` — a single-file static prototype tracking Apollo Kissflow ISG hypercare (Day 12 of 30, amber). Reuses exec-dashboard chrome and tokens; replaces stage/pacing model with stabilization model (tickets ↓ + adoption ↑ + 6-criteria exit checklist).

**Architecture:** Static HTML prototype. Single file, inline CSS, inline JS, mock data baked in. Same render-function architecture as `exec-dashboard.html` (`renderHeader`, `renderKpis`, `renderMatrix`, etc.) but driven by a single fixed dataset. Reuses `auth.js`. No tests — verification is visual via browser.

**Tech Stack:** Plain HTML/CSS/JS, inline SVG charts, Inter + JetBrains Mono fonts, dark/light theme via CSS custom properties.

**Spec reference:** [`gratia/docs/superpowers/specs/2026-05-04-kissflow-hypercare-dashboard-design.md`](../specs/2026-05-04-kissflow-hypercare-dashboard-design.md)

**Verification approach:** Each task ends with a browser visual check (open the file in the user's default browser, inspect the affected section, confirm expected appearance and console clean). The user sets up local dev — for this prototype we open the file directly via `file://` URL or symlink into an existing dev server. No build step.

---

## File structure

Single file:

- **Create:** `gratia/hypercare-dashboard.html` (copied and modified from `gratia/exec-dashboard.html`)
- **Reuse (no edit):** `gratia/auth.js`

No new files. No new directories.

---

## Task 1: Bootstrap — duplicate exec-dashboard, retitle

**Files:**
- Create: `gratia/hypercare-dashboard.html`

- [ ] **Step 1: Copy the exec-dashboard file**

```bash
cp /Users/norbertpap/Sites/gratia/exec-dashboard.html /Users/norbertpap/Sites/gratia/hypercare-dashboard.html
```

- [ ] **Step 2: Update `<title>` (line 5)**

Find: `<title>Gratia — Helix × Apex Integration · Day 14 of 30</title>`
Replace with: `<title>Gratia — Apollo Kissflow Hypercare · Day 12 of 30</title>`

- [ ] **Step 3: Update theme localStorage key (line 15)**

Find: `const saved = localStorage.getItem('apollo-theme');`
Replace with: `const saved = localStorage.getItem('apollo-hypercare-theme');`

Also update the toggle write — search for `localStorage.setItem('apollo-theme'` and replace `'apollo-theme'` with `'apollo-hypercare-theme'`. Use `replace_all` for the key only.

- [ ] **Step 4: Update single dashboard tab label**

Find: `<button class="tab-btn active" data-tab="dashboard">Integration</button>`
Replace with: `<button class="tab-btn active" data-tab="dashboard">Hypercare</button>`

- [ ] **Step 5: Open in browser, smoke test**

Open `file:///Users/norbertpap/Sites/gratia/hypercare-dashboard.html` in browser.
Expected: Page renders identical to exec-dashboard but with new title in tab and "Hypercare" tab label. No console errors.

- [ ] **Step 6: Commit**

```bash
git -C /Users/norbertpap/Sites/gratia add hypercare-dashboard.html
git -C /Users/norbertpap/Sites/gratia commit -m "feat: bootstrap hypercare-dashboard.html from exec-dashboard"
```

---

## Task 2: Strip personas tab and other unused content

The exec-dashboard has a Personas tab (~lines 2025–2489 of original file). Hypercare is a single-purpose dashboard. Remove the Personas panel and its CSS to keep the prototype focused.

**Files:**
- Modify: `gratia/hypercare-dashboard.html`

- [ ] **Step 1: Remove the Personas tab panel HTML**

Delete the entire block starting at the comment `<!-- ============ PERSONAS TAB ============ -->` through the closing `</div>` of `<div id="tab-personas" class="tab-panel">`. This is the block from `<!-- ===== Roxanne Bunnel · Transitions ===== -->` block container. Verify in the modified file that the only `tab-panel` remaining is `tab-dashboard`.

After removing, the structure should go straight from the `<!-- /tab-dashboard -->` close to the `<!-- ===== FOOTER ===== -->` section.

- [ ] **Step 2: Remove personas-only CSS**

Search the `<style>` block for selectors prefixed with `.personas-` and `.persona-` (e.g. `.personas-grid`, `.persona-card`, `.persona-avatar`, `.persona-quote`, `.persona-badge`, `.persona-head`, `.persona-info`, `.persona-name`, `.persona-role`, `.persona-meta`, `.persona-footer`, `.persona-section`, `.persona-points`). Delete them.

Verify: search for `persona` (case-insensitive) in the file — no remaining references in CSS or HTML.

- [ ] **Step 3: Verify in browser**

Reload page. Expected:
- Dashboard tab still renders cleanly.
- No console errors.
- Page weight reduced.

- [ ] **Step 4: Commit**

```bash
git -C /Users/norbertpap/Sites/gratia commit -am "refactor: strip personas tab from hypercare-dashboard"
```

---

## Task 3: Update header — eyebrow, status, lede, sublede

**Files:**
- Modify: `gratia/hypercare-dashboard.html` (page-head section, ~line 1766)

- [ ] **Step 1: Update eyebrow text**

Find: `<span class="eyebrow">Helix × Apex Integration · Day 14 of 30</span>`
Replace with: `<span class="eyebrow">Apollo · Kissflow Hypercare · Day 12 of 30</span>`

- [ ] **Step 2: Update status chip**

Find the `statusChip` element. Set `data-status="amber"` and the chip label to `Stabilizing on track`:

```html
<span class="status-chip" id="statusChip" data-status="amber"><span class="dot-pulse"></span><span id="statusChipLabel">Stabilizing on track</span></span>
```

- [ ] **Step 3: Update lede**

Find: `<h1 class="lede" id="dashLede">5 workstreams off-track. <em>4 workstreams cleared sign-off</em>. On pace for May 13 cutover.</h1>`

Replace with:

```html
<h1 class="lede" id="dashLede">3 of 6 exit criteria met. <em>Tickets down 38% week-over-week</em>. Hypercare on track for June 30 exit.</h1>
```

- [ ] **Step 4: Update sublede**

Find: `<p class="sublede" id="dashSublede">IT Cutover and Customer Migration remain the bottlenecks. Legal contract harmonization cleared this week, IT Cutover dry-run restarting now.</p>`

Replace with:

```html
<p class="sublede" id="dashSublede">Adoption lagging in Mumbai Ops and Chicago Reporting. Repeat-issue rate still above threshold — workflow stage-transition bug accounts for the largest share.</p>
```

- [ ] **Step 5: Verify in browser**

Reload. Expected: header updates render cleanly; status chip shows amber; lede has `<em>` highlight on the tickets phrase.

- [ ] **Step 6: Commit**

```bash
git -C /Users/norbertpap/Sites/gratia commit -am "feat: update hypercare dashboard header copy"
```

---

## Task 4: Replace client filter with view-select dropdown

The exec dashboard has a client-filter dropdown that switches archetypes. Hypercare doesn't have archetypes — it has a view-select that re-aggregates the matrix and KPIs.

**Files:**
- Modify: `gratia/hypercare-dashboard.html` (page-head section, ~lines 1770–1790)

- [ ] **Step 1: Replace `.client-filter` block markup**

Find the entire `<div class="client-filter">…</div>` wrapper containing `clientSelectBtn` and `clientMenu`.

Replace with:

```html
<div class="client-filter">
  <button class="client-select" id="viewSelectBtn" title="Group rows" aria-haspopup="listbox" aria-expanded="false">
    <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="M3 6h18M6 12h12M9 18h6" stroke-linecap="round"/></svg>
    <span id="viewSelectLabel">All teams</span>
    <svg width="11" height="11" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round"/></svg>
  </button>
  <ul class="client-menu" id="viewMenu" role="listbox" hidden>
    <li class="client-menu-label">Group by</li>
    <li class="client-menu-item active" role="option" data-view="team">All teams</li>
    <li class="client-menu-item" role="option" data-view="region">By region</li>
    <li class="client-menu-item" role="option" data-view="role">By role</li>
  </ul>
</div>
```

- [ ] **Step 2: Verify in browser**

Reload. Expected: dropdown button renders. Clicking it does nothing yet (wiring comes in Task 11).

- [ ] **Step 3: Commit**

```bash
git -C /Users/norbertpap/Sites/gratia commit -am "feat: swap client filter for view-select scaffolding"
```

---

## Task 5: Swap KPI row to hypercare KPIs

**Files:**
- Modify: `gratia/hypercare-dashboard.html` (KPI row, ~lines 1802–1830)

- [ ] **Step 1: Replace the entire `<section class="kpi-row">` block**

Find the existing `<section class="kpi-row">` … `</section>` (5 KPI cards).

Replace the inner content (5 cards) with:

```html
      <section class="kpi-row">
        <div class="kpi">
          <div class="label">Adoption rate</div>
          <div class="value num"><span id="kpiAdoptionValue">84</span><span class="unit">%</span></div>
          <div class="delta amber" id="kpiAdoptionDelta">+6pp WoW · target 90%</div>
        </div>
        <div class="kpi">
          <div class="label">Open P1 / P2</div>
          <div class="value num" id="kpiTicketsValue">6</div>
          <div class="delta green" id="kpiTicketsDelta">−8 since last week</div>
        </div>
        <div class="kpi">
          <div class="label">Repeat-issue rate</div>
          <div class="value num"><span id="kpiRepeatValue">14</span><span class="unit">%</span></div>
          <div class="delta amber" id="kpiRepeatDelta">−3pp WoW · target &lt;10%</div>
        </div>
        <div class="kpi">
          <div class="label">MTTR (P2)</div>
          <div class="value num"><span id="kpiMttrValue">18</span><span class="unit">h</span></div>
          <div class="delta green" id="kpiMttrDelta">Within 24h target</div>
        </div>
        <div class="kpi">
          <div class="label"><span class="tip tip-wide tip-below" data-tip="Hypercare exits when all 6 criteria are met for 5 consecutive days. Today: 3 of 6 met.">Days to exit</span></div>
          <div class="value num" id="kpiDaysValue">18</div>
          <div class="delta" id="kpiDaysDelta">3 of 6 criteria met</div>
        </div>
      </section>
```

- [ ] **Step 2: Add CSS for delta color modifiers if not already present**

Search the `<style>` block for `.delta.green`, `.delta.amber`, `.delta.red`. If missing, add after the existing `.delta` rule:

```css
  .kpi .delta.green { color: var(--green-ink); }
  .kpi .delta.amber { color: var(--amber-ink); }
  .kpi .delta.red   { color: var(--red-ink); }
```

- [ ] **Step 3: Verify in browser**

Reload. Expected: 5 KPI cards render with new labels and values. The "Days to exit" tooltip appears on hover. Color hints visible on deltas.

- [ ] **Step 4: Commit**

```bash
git -C /Users/norbertpap/Sites/gratia commit -am "feat: hypercare KPI row (adoption, tickets, repeat, MTTR, days to exit)"
```

---

## Task 6: Replace pacing chart with stabilization chart (two series)

The left hero card holds an SVG pacing chart with one actual line + one dashed projection. Replace with a two-series stabilization chart: tickets line (declining) on left axis, adoption line (rising) on right axis, target band lines, today marker at Day 12.

**Files:**
- Modify: `gratia/hypercare-dashboard.html` (hero-grid left card, ~lines 1837–1920)

- [ ] **Step 1: Update card-head**

Find the left card's `card-head` block. Update title to `Stabilization` and replace the existing `pacingToggle` (Pacing/Teams) with a simpler `Trend` indicator (no toggle, just a static label). Replace the meta legend with two-series legend (Tickets / Adoption).

```html
        <div class="card">
          <div class="card-head">
            <div>
              <h3>Stabilization</h3>
              <p class="sub">Tickets declining · adoption climbing · 30-day window</p>
            </div>
            <div class="meta">
              <div class="legend-inline" id="stabLegend">
                <span class="lg"><span class="lg-dot lg-tickets"></span>Tickets open</span>
                <span class="lg"><span class="lg-dot lg-adopt"></span>Adoption %</span>
                <span class="lg"><span class="lg-dot lg-target"></span>Target band</span>
              </div>
            </div>
          </div>
```

- [ ] **Step 2: Replace the SVG chart contents**

Find the `<svg>` block inside the card-body. Replace its contents (preserve the `<svg>` tag and viewBox) with the following:

```html
            <svg id="stabChart" viewBox="0 0 720 290" preserveAspectRatio="none">
              <!-- Left axis (tickets, 0–35) -->
              <line class="ax" x1="60"  y1="30"  x2="60"  y2="250" stroke-width="1"/>
              <!-- Right axis (adoption %, 0–100) -->
              <line class="ax" x1="690" y1="30"  x2="690" y2="250" stroke-width="1"/>
              <!-- X axis -->
              <line class="ax" x1="60"  y1="250" x2="690" y2="250" stroke-width="1"/>

              <!-- Gridlines (4 horizontal) -->
              <line class="ax-grid" x1="60" y1="30"  x2="690" y2="30"  stroke-dasharray="2 4" stroke-width="1"/>
              <line class="ax-grid" x1="60" y1="85"  x2="690" y2="85"  stroke-dasharray="2 4" stroke-width="1"/>
              <line class="ax-grid" x1="60" y1="140" x2="690" y2="140" stroke-dasharray="2 4" stroke-width="1"/>
              <line class="ax-grid" x1="60" y1="195" x2="690" y2="195" stroke-dasharray="2 4" stroke-width="1"/>

              <!-- Target band: adoption ≥90% (top), tickets ≤5/day (bottom) -->
              <line class="target-line target-adopt"   x1="60" y1="55"  x2="690" y2="55"  stroke-dasharray="3 5" stroke-width="1.2"/>
              <line class="target-line target-tickets" x1="60" y1="222" x2="690" y2="222" stroke-dasharray="3 5" stroke-width="1.2"/>

              <!-- Today marker at Day 12 (x = 60 + (12/30)*630 = 312) -->
              <line class="today-line" x1="312" y1="22" x2="312" y2="262" stroke-width="0.9" stroke-dasharray="2 3"/>

              <!-- TICKETS series (red ink). Days 0–12 actual, 12–30 projected dashed.
                   y-coord: y = 250 - (tickets/35)*220.
                   Day 1 (32): y=49 → x=81; Day 4 (32): y=49 → x=144;
                   Day 6 (28): y=74 → x=186; Day 8 (22): y=112 → x=228;
                   Day 10 (17): y=143 → x=270; Day 12 (14): y=162 → x=312;
                   Day 30 projected (3): y=231 → x=690 -->
              <polyline class="line-tickets" fill="none" stroke-width="2.4"
                        points="81,49 144,49 186,74 228,112 270,143 312,162"/>
              <polyline class="line-tickets-projected" fill="none" stroke-width="2" stroke-dasharray="3 4" opacity="0.65"
                        points="312,162 690,231"/>

              <!-- ADOPTION series (gold/green ink). y-coord: y = 250 - (adopt%/100)*220.
                   Day 1 (30): y=184 → x=81;  Day 4 (45): y=151 → x=144;
                   Day 6 (58): y=122 → x=186; Day 8 (70): y=96 → x=228;
                   Day 10 (78): y=78 → x=270; Day 12 (84): y=65 → x=312;
                   Day 30 projected (94): y=43 → x=690 -->
              <polyline class="line-adopt" fill="none" stroke-width="2.4"
                        points="81,184 144,151 186,122 228,96 270,78 312,65"/>
              <polyline class="line-adopt-projected" fill="none" stroke-width="2" stroke-dasharray="3 4" opacity="0.65"
                        points="312,65 690,43"/>

              <!-- Today dots -->
              <circle class="dot-tickets" cx="312" cy="162" r="4.5"/>
              <circle class="dot-adopt"   cx="312" cy="65"  r="4.5"/>

              <!-- Axis labels -->
              <g class="axis-labels">
                <text class="label" x="60"  y="272" text-anchor="middle">Day 0</text>
                <text class="label" x="312" y="272" text-anchor="middle">Today · Day 12</text>
                <text class="label" x="690" y="272" text-anchor="end">Day 30</text>
                <!-- Y-axis scale marks: tickets left, adoption right -->
                <text class="label-y" x="52" y="34"  text-anchor="end">35</text>
                <text class="label-y" x="52" y="143" text-anchor="end">17</text>
                <text class="label-y" x="52" y="253" text-anchor="end">0</text>
                <text class="label-y" x="698" y="34"  text-anchor="start">100%</text>
                <text class="label-y" x="698" y="143" text-anchor="start">50%</text>
                <text class="label-y" x="698" y="253" text-anchor="start">0%</text>
              </g>

              <!-- Hover scrubber group (populated by JS) -->
              <g id="stabScrubber" style="display:none">
                <line class="scrubber-line" x1="0" y1="22" x2="0" y2="262" stroke-width="1" stroke-dasharray="2 3"/>
                <circle class="scrubber-dot-tickets" cx="0" cy="0" r="4"/>
                <circle class="scrubber-dot-adopt"   cx="0" cy="0" r="4"/>
              </g>

              <!-- Hover capture overlay (transparent, full chart area) -->
              <rect id="stabHoverArea" x="60" y="22" width="630" height="240" fill="transparent" style="cursor:crosshair"/>
            </svg>
```

- [ ] **Step 3: Add CSS for the new chart classes**

Locate the existing pacing-chart CSS (around line where `.actual-line`, `.plan-line`, `.projected`, `.today-line` are defined) and add the new classes after it:

```css
  .line-tickets           { stroke: var(--red-ink); }
  .line-tickets-projected { stroke: var(--red-ink); }
  .line-adopt             { stroke: var(--gold-ink); }
  .line-adopt-projected   { stroke: var(--gold-ink); }
  .dot-tickets            { fill: var(--red-ink); stroke: var(--bg-1); stroke-width: 2; }
  .dot-adopt              { fill: var(--gold-ink); stroke: var(--bg-1); stroke-width: 2; }
  .target-line            { stroke: var(--ink-3); opacity: 0.45; }
  .target-line.target-adopt   { stroke: var(--gold-ink); opacity: 0.35; }
  .target-line.target-tickets { stroke: var(--red-ink); opacity: 0.30; }
  .scrubber-line          { stroke: var(--ink-2); }
  .scrubber-dot-tickets   { fill: var(--red-ink); stroke: var(--bg-1); stroke-width: 1.5; }
  .scrubber-dot-adopt     { fill: var(--gold-ink); stroke: var(--bg-1); stroke-width: 1.5; }
  .label-y                { fill: var(--ink-3); font-size: 9.5px; font-family: 'JetBrains Mono', monospace; }
  .legend-inline .lg-dot.lg-tickets { background: var(--red-ink); }
  .legend-inline .lg-dot.lg-adopt   { background: var(--gold-ink); }
  .legend-inline .lg-dot.lg-target  { background: var(--ink-3); opacity: 0.5; }
```

- [ ] **Step 4: Remove the old pacing render JS**

Find and delete the `renderPacingChart` function (~line 2911) and any calls to it in `renderClient`. Also delete `currentPacingArchetype` and the `PACING` constant. The new chart is static SVG and needs no rendering function in v1 (hover scrubber is added in Task 7).

- [ ] **Step 5: Verify in browser**

Reload. Expected:
- Stabilization chart renders with two lines (red declining, gold rising), dashed projections from Day 12 to Day 30, target band lines, today marker at Day 12.
- Today dots visible on both lines.
- Console: no errors.

- [ ] **Step 6: Commit**

```bash
git -C /Users/norbertpap/Sites/gratia commit -am "feat: stabilization chart (two-series, dashed projection, target band)"
```

---

## Task 7: Wire stabilization chart hover scrubber

**Files:**
- Modify: `gratia/hypercare-dashboard.html` (script block at end)

- [ ] **Step 1: Add scrubber data array near the top of the `<script>` block, with the other DATA constants**

```javascript
  // Stabilization chart per-day data (Day 1..30)
  // tickets[i] is open count on day i+1; adopt[i] is adoption % on day i+1
  const STAB_DATA = {
    tickets: [32, 32, 32, 32, 30, 28, 25, 22, 19, 17, 15, 14, /* projected */ 13, 12, 11, 10, 9, 8, 7, 7, 6, 6, 5, 5, 5, 4, 4, 4, 3, 3],
    adopt:   [30, 35, 40, 45, 52, 58, 64, 70, 74, 78, 81, 84, /* projected */ 86, 87, 88, 89, 90, 91, 91, 92, 92, 93, 93, 93, 93, 93, 94, 94, 94, 94],
    todayDay: 12,
    totalDays: 30,
    ticketsMax: 35,
  };
```

- [ ] **Step 2: Add the hover scrubber wiring at the bottom of the `<script>` block, before any final IIFE close**

```javascript
  // ===== Stabilization chart hover scrubber =====
  (function wireStabScrubber() {
    const svg = document.getElementById('stabChart');
    const area = document.getElementById('stabHoverArea');
    const scrubber = document.getElementById('stabScrubber');
    if (!svg || !area || !scrubber) return;

    const line  = scrubber.querySelector('.scrubber-line');
    const dotT  = scrubber.querySelector('.scrubber-dot-tickets');
    const dotA  = scrubber.querySelector('.scrubber-dot-adopt');

    // Tooltip element (built once, appended to body)
    const tip = document.createElement('div');
    tip.className = 'stab-tooltip';
    tip.style.cssText = 'position:fixed;pointer-events:none;background:var(--bg-2);border:1px solid var(--border-2);border-radius:6px;padding:8px 10px;font-size:11.5px;line-height:1.5;font-family:Inter,sans-serif;box-shadow:var(--shadow);display:none;z-index:1000;min-width:160px;';
    document.body.appendChild(tip);

    function dayFromX(svgX) {
      const t = (svgX - 60) / 630; // 0..1
      const day = Math.max(1, Math.min(30, Math.round(t * 30)));
      return day;
    }
    function xFromDay(day) { return 60 + (day / 30) * 630; }
    function yFromTickets(t) { return 250 - (t / STAB_DATA.ticketsMax) * 220; }
    function yFromAdopt(p)   { return 250 - (p / 100) * 220; }

    area.addEventListener('mousemove', (e) => {
      const rect = svg.getBoundingClientRect();
      const svgX = ((e.clientX - rect.left) / rect.width) * 720;
      const day = dayFromX(svgX);
      const idx = day - 1;
      const t = STAB_DATA.tickets[idx];
      const a = STAB_DATA.adopt[idx];
      const x = xFromDay(day);
      const yT = yFromTickets(t);
      const yA = yFromAdopt(a);

      scrubber.style.display = '';
      line.setAttribute('x1', x); line.setAttribute('x2', x);
      dotT.setAttribute('cx', x); dotT.setAttribute('cy', yT);
      dotA.setAttribute('cx', x); dotA.setAttribute('cy', yA);

      const projected = day > STAB_DATA.todayDay;
      tip.innerHTML = `
        <div style="font-weight:600;color:var(--ink-0);margin-bottom:4px;">Day ${day}${projected ? ' · projected' : ''}</div>
        <div style="display:flex;align-items:center;gap:6px;color:var(--red-ink);"><span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:currentColor;"></span>${t} open tickets</div>
        <div style="display:flex;align-items:center;gap:6px;color:var(--gold-ink);"><span style="display:inline-block;width:7px;height:7px;border-radius:50%;background:currentColor;"></span>${a}% adoption</div>
      `;
      tip.style.display = 'block';
      tip.style.left = `${e.clientX + 14}px`;
      tip.style.top  = `${e.clientY + 14}px`;
    });
    area.addEventListener('mouseleave', () => {
      scrubber.style.display = 'none';
      tip.style.display = 'none';
    });
  })();
```

- [ ] **Step 3: Verify in browser**

Reload. Hover anywhere over the chart area. Expected:
- Vertical guide line follows cursor.
- Two dots (red + gold) move along their respective lines for the hovered day.
- Tooltip appears near cursor showing `Day N`, ticket count, adoption %. Tooltip says "projected" for days > 12.
- Mouseleave clears scrubber + tooltip.

- [ ] **Step 4: Commit**

```bash
git -C /Users/norbertpap/Sites/gratia commit -am "feat: stabilization chart hover scrubber with multi-series tooltip"
```

---

## Task 8: Replace right hero card with exit-criteria card

The exec-dashboard's right hero card is a waffle/list of teams. Replace with an exit-criteria card: title, counter, 6 criterion rows.

**Files:**
- Modify: `gratia/hypercare-dashboard.html` (hero-grid right card, ~lines 1920–1975)

- [ ] **Step 1: Replace right card contents**

Find the second `<div class="card">` inside `.hero-grid` (the one with the waffle). Replace its entire contents (including `card-head` and `card-body`) with:

```html
        <div class="card exit-card">
          <div class="card-head">
            <div>
              <h3>Hypercare exit criteria</h3>
              <p class="sub"><span id="exitMetCount">3</span> of 6 met</p>
            </div>
          </div>
          <div class="card-body exit-body">
            <ul class="exit-list" id="exitList"></ul>
          </div>
        </div>
```

- [ ] **Step 2: Add CSS for the exit-criteria card**

Add to the `<style>` block (group with other card styles):

```css
  .exit-card .card-body { padding: 0; }
  .exit-list { display: flex; flex-direction: column; }
  .exit-row {
    display: grid;
    grid-template-columns: 88px 1fr auto;
    gap: 14px;
    align-items: center;
    padding: 12px 18px;
    border-top: 1px solid var(--border);
    font-size: 13px;
  }
  .exit-row:first-child { border-top: none; }
  .exit-row.failing { cursor: pointer; }
  .exit-row.failing:hover { background: var(--row-hover); }
  .exit-row .exit-pill {
    display: inline-flex; align-items: center; gap: 5px;
    padding: 3px 8px;
    border-radius: 999px;
    font-size: 10.5px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    white-space: nowrap;
  }
  .exit-row .exit-pill.met       { color: var(--green-ink); background: var(--green-dim); border: 1px solid var(--green-line); }
  .exit-row .exit-pill.progress  { color: var(--amber-ink); background: var(--amber-dim); border: 1px solid var(--amber-line); }
  .exit-row .exit-pill.failing   { color: var(--red-ink);   background: var(--red-dim);   border: 1px solid var(--red-line); }
  .exit-row .exit-text { display: flex; flex-direction: column; gap: 2px; }
  .exit-row .exit-label { color: var(--ink-0); font-weight: 500; }
  .exit-row .exit-detail { color: var(--ink-2); font-size: 11.5px; font-family: 'JetBrains Mono', monospace; }
  .exit-row .exit-streak { display: inline-flex; gap: 3px; }
  .exit-row .streak-dot {
    width: 7px; height: 7px; border-radius: 50%;
    background: var(--bg-4);
    border: 1px solid var(--border-2);
  }
  .exit-row .streak-dot.filled { background: var(--amber-ink); border-color: var(--amber-ink); }
  .exit-row .streak-dot.filled.met { background: var(--green-ink); border-color: var(--green-ink); }
```

- [ ] **Step 3: Add EXIT_CRITERIA data and renderer to the `<script>` block**

Add near the other DATA constants:

```javascript
  // Exit criteria. state: 'met' | 'progress' | 'failing'.
  // streak: { current, target } if applicable, else null.
  // jumpTo: anchor id to scroll to when row is clicked (failing rows only).
  const EXIT_CRITERIA = [
    { label: 'Open P1 incidents',          target: '0 for 5 consecutive days', current: '0 · day 2 of 5', state: 'progress', streak: { current: 2, target: 5 }, jumpTo: null },
    { label: 'Adoption rate (all teams)',  target: '≥ 90%',                    current: '84% · 7 of 9 teams pass', state: 'failing',  streak: null, jumpTo: 'matrix-section' },
    { label: 'Repeat-issue rate',          target: '< 10%',                    current: '14%',                      state: 'failing',  streak: null, jumpTo: 'repeat-issues' },
    { label: 'MTTR (P2)',                  target: '≤ 24h sustained',          current: '18h · day 5 of 5',         state: 'met',      streak: { current: 5, target: 5 }, jumpTo: null },
    { label: 'Old SMA process retirement', target: '100% on Kissflow',         current: '100%',                     state: 'met',      streak: null, jumpTo: null },
    { label: 'Training completion',        target: '≥ 95%',                    current: '96%',                      state: 'met',      streak: null, jumpTo: null },
  ];

  function renderExitCriteria(list) {
    const root = document.getElementById('exitList');
    if (!root) return;
    const pillLabel = { met: 'Met', progress: 'In progress', failing: 'Failing' };
    root.innerHTML = list.map(c => {
      let streakHtml = '';
      if (c.streak) {
        const dots = [];
        for (let i = 0; i < c.streak.target; i++) {
          const filled = i < c.streak.current;
          const cls = `streak-dot${filled ? ' filled' : ''}${filled && c.state === 'met' ? ' met' : ''}`;
          dots.push(`<span class="${cls}"></span>`);
        }
        streakHtml = `<span class="exit-streak">${dots.join('')}</span>`;
      }
      const rowCls = c.state === 'failing' ? 'exit-row failing' : 'exit-row';
      const dataJump = c.jumpTo ? ` data-jump-to="${c.jumpTo}"` : '';
      return `
        <li class="${rowCls}"${dataJump}>
          <span class="exit-pill ${c.state}">${pillLabel[c.state]}</span>
          <span class="exit-text">
            <span class="exit-label">${c.label}</span>
            <span class="exit-detail">${c.target} · ${c.current}</span>
          </span>
          ${streakHtml}
        </li>
      `;
    }).join('');

    document.getElementById('exitMetCount').textContent = list.filter(c => c.state === 'met').length;
  }

  renderExitCriteria(EXIT_CRITERIA);
```

- [ ] **Step 4: Verify in browser**

Reload. Expected:
- Right hero card title "Hypercare exit criteria · 3 of 6 met".
- 6 rows render with correct pills (3 met green, 1 in progress amber with 2/5 streak dots filled, 2 failing red).
- "MTTR (P2)" row has 5 filled green streak dots.
- Row labels and details legible.

- [ ] **Step 5: Commit**

```bash
git -C /Users/norbertpap/Sites/gratia commit -am "feat: exit-criteria card with status pills and streak dots"
```

---

## Task 9: Wire exit-criteria failing-row click-to-jump

**Files:**
- Modify: `gratia/hypercare-dashboard.html`

- [ ] **Step 1: Add anchor IDs to matrix and (future) repeat-issues sections**

Update the matrix section open tag from `<section class="matrix-section">` to `<section class="matrix-section" id="matrix-section">`.

(The repeat-issues section will be created in Task 13 and will get `id="repeat-issues"` then.)

- [ ] **Step 2: Add click handler in script block**

Add at the bottom of the `<script>` block:

```javascript
  // ===== Exit-criteria failing-row jump =====
  document.getElementById('exitList').addEventListener('click', (e) => {
    const row = e.target.closest('.exit-row.failing');
    if (!row) return;
    const targetId = row.dataset.jumpTo;
    if (!targetId) return;
    const target = document.getElementById(targetId);
    if (!target) return;
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    target.style.transition = 'box-shadow 0.4s';
    target.style.boxShadow = '0 0 0 2px var(--gold-line)';
    setTimeout(() => { target.style.boxShadow = ''; }, 1400);
  });
```

- [ ] **Step 3: Verify in browser**

Reload. Click the "Adoption rate" failing row. Expected:
- Page scrolls smoothly to matrix section.
- Brief gold outline highlight on the matrix section.

(The "Repeat-issue rate" jump will fail silently until Task 13. That's expected.)

- [ ] **Step 4: Commit**

```bash
git -C /Users/norbertpap/Sites/gratia commit -am "feat: exit-criteria failing row click-to-jump"
```

---

## Task 10: Replace team matrix data and structure

The original matrix has 23 workstreams with stage-progression cells. Replace with 9 hypercare teams with adoption-bar / training / last-login / days cells.

**Files:**
- Modify: `gratia/hypercare-dashboard.html`

- [ ] **Step 1: Replace `TEAM_META` and `ARCHETYPES` with `HYPERCARE_TEAMS`**

In the script block, find the `STAGES` const and the `TEAM_META` and `ARCHETYPES` blocks. Replace all of them with:

```javascript
  // Single fixed dataset: 9 teams. Wave 1 went live May 30 (day 12 today). Wave 2 went live June 5 (day 7 today).
  // status: 'g' on-track, 'a' lagging, 'r' at-risk.
  const HYPERCARE_TEAMS = [
    { name: 'Onboarding Program',    region: 'NY',      lead: 'Jordan Reyes',   leadInit: 'JR', avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg', wave: 1, days: 12, adoption: 96, openTickets: 0, training: 100, lastLogin: 'Today', status: 'g', role: 'Primary user' },
    { name: 'Performance Reporting', region: 'NY',      lead: 'Sarah Chen',     leadInit: 'SC', avatarUrl: 'https://randomuser.me/api/portraits/women/68.jpg', wave: 1, days: 12, adoption: 92, openTickets: 1, training: 100, lastLogin: 'Today', status: 'g', role: 'Contributor' },
    { name: 'Performance Reporting', region: 'Chicago', lead: 'Daniel Okafor',  leadInit: 'DO', avatarUrl: 'https://randomuser.me/api/portraits/men/22.jpg',   wave: 1, days: 12, adoption: 71, openTickets: 3, training: 88,  lastLogin: '1–3d', status: 'a', role: 'Contributor' },
    { name: 'Operations',            region: 'NY',      lead: 'Aiko Tanaka',    leadInit: 'AT', avatarUrl: 'https://randomuser.me/api/portraits/women/30.jpg', wave: 1, days: 12, adoption: 90, openTickets: 1, training: 96,  lastLogin: 'Today', status: 'g', role: 'Power user' },
    { name: 'Operations',            region: 'Mumbai',  lead: 'Priya Shah',     leadInit: 'PS', avatarUrl: 'https://randomuser.me/api/portraits/women/79.jpg', wave: 2, days: 7,  adoption: 64, openTickets: 5, training: 92,  lastLogin: '4–7d', status: 'r', role: 'Power user' },
    { name: 'Client Service',        region: 'NY',      lead: 'Marcus Bell',    leadInit: 'MB', avatarUrl: 'https://randomuser.me/api/portraits/men/35.jpg',   wave: 1, days: 12, adoption: 88, openTickets: 0, training: 100, lastLogin: 'Today', status: 'g', role: 'Contributor' },
    { name: 'Client Service',        region: 'London',  lead: 'Hannah Green',   leadInit: 'HG', avatarUrl: 'https://randomuser.me/api/portraits/women/52.jpg', wave: 2, days: 7,  adoption: 82, openTickets: 1, training: 95,  lastLogin: '1–3d', status: 'a', role: 'Contributor' },
    { name: 'Trade Ops',             region: 'NY',      lead: 'Liam Park',      leadInit: 'LP', avatarUrl: 'https://randomuser.me/api/portraits/men/48.jpg',   wave: 1, days: 12, adoption: 91, openTickets: 1, training: 100, lastLogin: 'Today', status: 'g', role: 'Contributor' },
    { name: 'Compliance',            region: 'NY',      lead: 'Rachel Stone',   leadInit: 'RS', avatarUrl: 'https://randomuser.me/api/portraits/women/12.jpg', wave: 1, days: 12, adoption: 89, openTickets: 0, training: 100, lastLogin: 'Today', status: 'g', role: 'Glance-only' },
  ];
```

- [ ] **Step 2: Update matrix-head-row markup**

Find the `<div class="matrix-head-row">` block. Replace its contents with the new column headers:

```html
          <div class="matrix-head-row">
            <div>Team</div>
            <div>Lead</div>
            <div><span class="tip" data-tip="Share of target users active in the last 7 days. Bar color: green ≥90%, amber 75–89%, red &lt;75%.">Adoption</span></div>
            <div style="text-align:right">Open tickets</div>
            <div style="text-align:right"><span class="tip tip-wide" data-tip="% of users in the team who completed all required Kissflow training modules.">Training</span></div>
            <div>Last login</div>
            <div>Status</div>
            <div style="text-align:right"><span class="tip" data-tip="Days since this team's go-live. Wave 1: May 30. Wave 2: June 5.">Days</span></div>
          </div>
```

- [ ] **Step 3: Update grid-template-columns CSS for `.matrix-head-row` and `.matrix-row`**

Find the existing `grid-template-columns` rule for `.matrix-row` (and head-row if separate). Replace with:

```css
  .matrix-head-row,
  .matrix-row {
    display: grid;
    grid-template-columns: 1.4fr 1fr 1.3fr 0.8fr 0.8fr 0.9fr 0.9fr 0.7fr;
    gap: 14px;
    align-items: center;
    padding: 10px 18px;
  }
```

(Adjust any old rule that targets the matrix grid; keep `.matrix-head-row` styling for header text color/weight as it was.)

- [ ] **Step 4: Update `matrixTeamCount` and section title**

Find: `<h2><span id="matrixTeamCount">23</span> workstreams</h2>`
Replace with: `<h2><span id="matrixTeamCount">9</span> teams</h2>`

Find: `<span class="count">Sorted by risk · most urgent first</span>`
Replace with: `<span class="count">Sorted by status · attention-first</span>`

- [ ] **Step 5: Update filter chips counts and labels**

Find the `.filter-bar` block. Replace its filter chips with:

```html
          <div class="filter-bar" id="filters">
            <button class="chip active" data-filter="all">All<span class="ct" id="chipCountAll">9</span></button>
            <button class="chip" data-filter="r" title="Lagging adoption or open P1 tickets"><span class="dot r"></span>At risk<span class="ct" id="chipCountR">1</span></button>
            <button class="chip" data-filter="a" title="Adoption below 75% or stale logins"><span class="dot a"></span>Lagging<span class="ct" id="chipCountA">2</span></button>
            <button class="chip" data-filter="g" title="On track"><span class="dot g"></span>On track<span class="ct" id="chipCountG">6</span></button>
          </div>
```

Remove the `stage-filter-banner` block — there are no stages in hypercare.

- [ ] **Step 6: Verify in browser**

Reload. Expected:
- Matrix section header reads "9 teams · Sorted by status · attention-first".
- Filter chips show All 9, At risk 1, Lagging 2, On track 6.
- Body matrix is empty (renderer rebuild in next task).

- [ ] **Step 7: Commit**

```bash
git -C /Users/norbertpap/Sites/gratia commit -am "feat: replace matrix headers + chips with hypercare team structure"
```

---

## Task 11: Implement matrix renderer with adoption-bar cell

**Files:**
- Modify: `gratia/hypercare-dashboard.html`

- [ ] **Step 1: Replace `renderMatrix` function**

Find the existing `function renderMatrix(teams)`. Replace its entire body with:

```javascript
  function renderMatrix(teams) {
    const root = document.getElementById('matrix-rows');
    if (!root) return;
    const STATUS_LABEL = { g: 'On-track', a: 'Lagging', r: 'At risk' };
    root.innerHTML = teams.map(t => {
      // Adoption bar color: ≥90% g, 75–89% a, <75% r
      const adCls = t.adoption >= 90 ? 'g' : (t.adoption >= 75 ? 'a' : 'r');
      // Last-login class: >7d red, 4–7d amber, else neutral
      const llCls = t.lastLogin === '>7d' ? 'bad' : (t.lastLogin === '4–7d' ? 'warn' : '');
      // Open-tickets class
      const tkCls = t.openTickets >= 4 ? 'bad' : (t.openTickets >= 2 ? 'warn' : '');
      return `
        <div class="matrix-row" data-status="${t.status}" data-region="${t.region}" data-role="${t.role}">
          <div class="team">
            <span class="health ${t.status}"></span>
            <span class="team-name">${t.name}</span>
            <span class="region-pill">${t.region}</span>
          </div>
          <div class="assignee">
            <span class="av" style="background-image:url('${t.avatarUrl}')">${t.leadInit}</span>
            <span class="lead-name">${t.lead}</span>
          </div>
          <div class="adopt-cell">
            <div class="adopt-bar"><span class="adopt-fill ${adCls}" style="width:${t.adoption}%"></span></div>
            <span class="adopt-num">${t.adoption}%</span>
          </div>
          <div class="num-cell ${tkCls}">${t.openTickets}</div>
          <div class="num-cell">${t.training}%</div>
          <div class="ll-cell ${llCls}">${t.lastLogin}</div>
          <div><span class="status-text status-${t.status}">${STATUS_LABEL[t.status]}</span></div>
          <div class="num-cell">${t.days}</div>
        </div>
      `;
    }).join('');
  }
  renderMatrix(HYPERCARE_TEAMS);
```

- [ ] **Step 2: Add CSS for the new cell types**

Add to the `<style>` block after existing `.matrix-row` styles:

```css
  .matrix-row .team .team-name { font-weight: 500; color: var(--ink-0); }
  .matrix-row .region-pill {
    font-size: 10.5px;
    color: var(--ink-2);
    background: var(--bg-3);
    border: 1px solid var(--border);
    padding: 2px 6px;
    border-radius: 4px;
    font-family: 'JetBrains Mono', monospace;
    margin-left: 6px;
  }
  .matrix-row .lead-name { color: var(--ink-1); }
  .matrix-row .adopt-cell { display: flex; align-items: center; gap: 8px; }
  .matrix-row .adopt-bar {
    flex: 1;
    height: 5px;
    background: var(--bg-3);
    border-radius: 3px;
    overflow: hidden;
    min-width: 60px;
  }
  .matrix-row .adopt-fill { display: block; height: 100%; border-radius: 3px; }
  .matrix-row .adopt-fill.g { background: var(--green); }
  .matrix-row .adopt-fill.a { background: var(--amber); }
  .matrix-row .adopt-fill.r { background: var(--red); }
  .matrix-row .adopt-num { font-family: 'JetBrains Mono', monospace; font-size: 12px; color: var(--ink-1); min-width: 36px; text-align: right; }
  .matrix-row .num-cell { font-family: 'JetBrains Mono', monospace; font-size: 12.5px; color: var(--ink-1); text-align: right; }
  .matrix-row .num-cell.warn { color: var(--amber-ink); }
  .matrix-row .num-cell.bad  { color: var(--red-ink); font-weight: 500; }
  .matrix-row .ll-cell { font-size: 12px; color: var(--ink-2); }
  .matrix-row .ll-cell.warn { color: var(--amber-ink); }
  .matrix-row .ll-cell.bad  { color: var(--red-ink); font-weight: 500; }
  .matrix-row .status-text { font-size: 12px; }
  .matrix-row .status-text.status-g { color: var(--green-ink); }
  .matrix-row .status-text.status-a { color: var(--amber-ink); }
  .matrix-row .status-text.status-r { color: var(--red-ink); }
```

- [ ] **Step 3: Verify in browser**

Reload. Expected:
- 9 matrix rows render with team name, region pill, avatar + lead name, adoption bar with % number, open tickets, training %, last login, status text, days.
- Mumbai Operations row: red adoption bar (64%), red 5 in tickets, amber "4–7d" last login, red "At risk" status.
- All other rows: green or amber adoption bars matching the data.

- [ ] **Step 4: Commit**

```bash
git -C /Users/norbertpap/Sites/gratia commit -am "feat: matrix renderer with adoption-bar, training, last-login cells"
```

---

## Task 12: Wire filter chips and view-select dropdown

**Files:**
- Modify: `gratia/hypercare-dashboard.html`

- [ ] **Step 1: Add filter-chip click handlers**

Find any existing chip-click handler code (in the original it sets `.matrix-row.hidden` based on `data-status`). Replace with:

```javascript
  // ===== Filter chips =====
  document.querySelectorAll('#filters .chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const filter = chip.dataset.filter;
      document.querySelectorAll('#filters .chip').forEach(c => c.classList.toggle('active', c === chip));
      document.querySelectorAll('.matrix-row').forEach(row => {
        const show = filter === 'all' || row.dataset.status === filter;
        row.classList.toggle('hidden', !show);
      });
    });
  });
```

- [ ] **Step 2: Wire view-select dropdown**

Add at the bottom of the `<script>` block:

```javascript
  // ===== View-select dropdown (group by team / region / role) =====
  (function wireViewSelect() {
    const btn = document.getElementById('viewSelectBtn');
    const menu = document.getElementById('viewMenu');
    const label = document.getElementById('viewSelectLabel');
    if (!btn || !menu || !label) return;

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = menu.hidden;
      menu.hidden = !open;
      btn.setAttribute('aria-expanded', String(open));
    });
    document.addEventListener('click', () => { menu.hidden = true; btn.setAttribute('aria-expanded', 'false'); });

    menu.addEventListener('click', (e) => {
      const item = e.target.closest('.client-menu-item');
      if (!item) return;
      menu.querySelectorAll('.client-menu-item').forEach(i => i.classList.toggle('active', i === item));
      label.textContent = item.textContent.trim();
      const view = item.dataset.view;
      applyView(view);
      menu.hidden = true;
      btn.setAttribute('aria-expanded', 'false');
    });

    function applyView(view) {
      // For v1: re-sort the existing rows. No row-collapse aggregation.
      const sorted = [...HYPERCARE_TEAMS];
      if (view === 'region') {
        const order = { 'NY': 0, 'Chicago': 1, 'London': 2, 'Mumbai': 3 };
        sorted.sort((a, b) => (order[a.region] ?? 99) - (order[b.region] ?? 99) || a.name.localeCompare(b.name));
      } else if (view === 'role') {
        const order = { 'Power user': 0, 'Primary user': 1, 'Contributor': 2, 'Glance-only': 3 };
        sorted.sort((a, b) => (order[a.role] ?? 99) - (order[b.role] ?? 99) || a.name.localeCompare(b.name));
      } else {
        // 'team' default — original spec order, status-attention first
        sorted.sort((a, b) => {
          const statusOrder = { 'r': 0, 'a': 1, 'g': 2 };
          return statusOrder[a.status] - statusOrder[b.status];
        });
      }
      renderMatrix(sorted);
      // Reapply current filter
      const activeFilter = document.querySelector('#filters .chip.active')?.dataset.filter || 'all';
      document.querySelectorAll('.matrix-row').forEach(row => {
        const show = activeFilter === 'all' || row.dataset.status === activeFilter;
        row.classList.toggle('hidden', !show);
      });
    }
  })();
```

- [ ] **Step 3: Verify in browser**

Reload. Expected:
- Click filter chips: matrix rows filter correctly. "At risk" shows only Mumbai Operations. "Lagging" shows Performance Reporting Chicago + Client Service London.
- Click view-select dropdown → toggle open. Click "By region": rows reorder NY → Chicago → London → Mumbai. Click "By role": rows reorder Power user → Primary user → Contributor → Glance-only. Click "All teams": status-attention order returns. Filter persists across view changes.

- [ ] **Step 4: Commit**

```bash
git -C /Users/norbertpap/Sites/gratia commit -am "feat: matrix filter chips and view-select dropdown wiring"
```

---

## Task 13: Replace bottlenecks with repeat-issues list

**Files:**
- Modify: `gratia/hypercare-dashboard.html`

- [ ] **Step 1: Locate the bottlenecks section in HTML**

The exec-dashboard has a bottlenecks section (search for `class="bottlenecks"` or `id="bottlenecks"`). Identify the wrapping section and its rows. The hypercare design replaces this with a repeat-issues card that lives in a new bottom row alongside a tickets-by-category card.

If the original file has a bottlenecks section as a standalone full-width block, restructure it into a `bottom-row` flex container with two cards. Replace the bottlenecks section markup with:

```html
      <!-- ===== BOTTOM ROW: REPEAT ISSUES + TICKETS BY CATEGORY ===== -->
      <section class="bottom-row">
        <div class="card" id="repeat-issues">
          <div class="card-head">
            <div>
              <h3>Repeat issues</h3>
              <p class="sub">Top recurring issues · sorted by open count</p>
            </div>
          </div>
          <div class="card-body">
            <div class="ri-table">
              <div class="ri-head">
                <div>Issue</div>
                <div>Category</div>
                <div style="text-align:right">Open</div>
                <div>First seen</div>
                <div>Owner</div>
                <div style="text-align:center">Severity</div>
              </div>
              <div id="ri-rows"></div>
            </div>
          </div>
        </div>
        <div class="card" id="tickets-by-cat">
          <div class="card-head">
            <div>
              <h3>Tickets by category</h3>
              <p class="sub">Last 14 days · stacked daily counts</p>
            </div>
          </div>
          <div class="card-body">
            <svg id="catChart" viewBox="0 0 720 240" preserveAspectRatio="none"></svg>
            <div class="cat-legend">
              <span class="lg"><span class="lg-dot" style="background:var(--red-ink)"></span>Workflow logic</span>
              <span class="lg"><span class="lg-dot" style="background:var(--amber-ink)"></span>Data</span>
              <span class="lg"><span class="lg-dot" style="background:var(--gold-ink)"></span>Training gap</span>
              <span class="lg"><span class="lg-dot" style="background:#87b3ec"></span>UX / usability</span>
              <span class="lg"><span class="lg-dot" style="background:#b07ce0"></span>Integration</span>
            </div>
          </div>
        </div>
      </section>
```

- [ ] **Step 2: Add CSS for the bottom row, ri-table, and cat-legend**

```css
  .bottom-row {
    display: grid;
    grid-template-columns: 1.3fr 1fr;
    gap: 18px;
    margin-top: 22px;
  }
  .ri-table { display: flex; flex-direction: column; }
  .ri-head, .ri-row {
    display: grid;
    grid-template-columns: 2fr 1fr 0.55fr 0.7fr 0.9fr 0.7fr;
    gap: 12px;
    align-items: center;
    padding: 10px 18px;
    font-size: 12.5px;
  }
  .ri-head {
    color: var(--ink-2);
    font-size: 11.5px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    border-bottom: 1px solid var(--border);
  }
  .ri-row { border-bottom: 1px solid var(--border); }
  .ri-row:last-child { border-bottom: none; }
  .ri-row:hover { background: var(--row-hover); }
  .ri-row .ri-issue { color: var(--ink-0); font-weight: 500; }
  .ri-row .ri-cat {
    font-size: 11px;
    padding: 2px 7px;
    border-radius: 4px;
    background: var(--bg-3);
    border: 1px solid var(--border);
    color: var(--ink-2);
    width: fit-content;
  }
  .ri-row .ri-open { font-family: 'JetBrains Mono', monospace; text-align: right; color: var(--ink-1); }
  .ri-row .ri-first, .ri-row .ri-owner { color: var(--ink-2); font-size: 12px; }
  .ri-row .ri-sev {
    display: inline-block;
    width: fit-content;
    margin: 0 auto;
    padding: 2px 7px;
    border-radius: 999px;
    font-size: 10.5px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }
  .ri-row .ri-sev.p1 { color: var(--red-ink);   background: var(--red-dim);   border: 1px solid var(--red-line); }
  .ri-row .ri-sev.p2 { color: var(--amber-ink); background: var(--amber-dim); border: 1px solid var(--amber-line); }
  .ri-row .ri-sev.p3 { color: var(--ink-2);     background: var(--bg-3);      border: 1px solid var(--border); }
  .cat-legend {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    padding: 12px 18px 0;
    font-size: 11.5px;
    color: var(--ink-2);
  }
  .cat-legend .lg { display: inline-flex; align-items: center; gap: 6px; }
  .cat-legend .lg-dot { width: 8px; height: 8px; border-radius: 50%; display: inline-block; }
```

- [ ] **Step 3: Add REPEAT_ISSUES data and renderer**

Add to script block:

```javascript
  const REPEAT_ISSUES = [
    { issue: 'Stage transition stuck on Tasks Selection',     category: 'Workflow logic', open: 8, firstSeen: 'Day 2', owner: 'Eng',      severity: 'p1' },
    { issue: 'Client field validation error on rare chars',   category: 'Data',           open: 5, firstSeen: 'Day 4', owner: 'Eng',      severity: 'p2' },
    { issue: 'Trade Ready notification missing for Wave-2',   category: 'Workflow logic', open: 4, firstSeen: 'Day 6', owner: 'Eng',      severity: 'p2' },
    { issue: 'Re-onboarding flow unclear when client returns', category: 'Training gap',  open: 3, firstSeen: 'Day 5', owner: 'Training', severity: 'p3' },
    { issue: 'Audit log missing fields on bulk import',       category: 'Data',           open: 2, firstSeen: 'Day 8', owner: 'Eng',      severity: 'p3' },
  ];

  function renderRepeatIssues(list) {
    const root = document.getElementById('ri-rows');
    if (!root) return;
    const sevLabel = { p1: 'P1', p2: 'P2', p3: 'P3' };
    root.innerHTML = list.map(r => `
      <div class="ri-row">
        <div class="ri-issue">${r.issue}</div>
        <div><span class="ri-cat">${r.category}</span></div>
        <div class="ri-open">${r.open}</div>
        <div class="ri-first">${r.firstSeen}</div>
        <div class="ri-owner">${r.owner}</div>
        <div><span class="ri-sev ${r.severity}">${sevLabel[r.severity]}</span></div>
      </div>
    `).join('');
  }
  renderRepeatIssues(REPEAT_ISSUES);
```

- [ ] **Step 4: Remove dead bottlenecks code**

Search the file for any remaining references to `bottlenecks` (id, class, or const). Delete dead code. Confirm console clean.

- [ ] **Step 5: Verify in browser**

Reload. Expected:
- Bottom row appears below matrix.
- Repeat-issues card renders 5 rows with issue text, category pill, open count (right-aligned), first-seen, owner, severity pill (P1 red, P2 amber, P3 muted).
- Category labels visible.
- Tickets-by-category card has empty SVG so far + visible legend with 5 entries. (Chart wired in Task 14.)

Also: revisit the exit-criteria "Repeat-issue rate" failing row. Click it. Expected: smooth scroll to repeat-issues card, brief gold outline.

- [ ] **Step 6: Commit**

```bash
git -C /Users/norbertpap/Sites/gratia commit -am "feat: repeat issues list + bottom row scaffolding"
```

---

## Task 14: Render tickets-by-category stacked bar chart

**Files:**
- Modify: `gratia/hypercare-dashboard.html`

- [ ] **Step 1: Add CAT_DATA and renderer**

Add to script block:

```javascript
  // Tickets by category, last 14 days. Ordered: 5 categories per day.
  // Values are total tickets opened that day, broken out by category.
  // Ordering of stack (bottom to top): workflow, data, training, ux, integration.
  const CAT_COLORS = ['var(--red-ink)', 'var(--amber-ink)', 'var(--gold-ink)', '#87b3ec', '#b07ce0'];
  const CAT_DATA = [
    { day: 1,  workflow: 4, data: 3, training: 2, ux: 2, integration: 1 }, // 12
    { day: 2,  workflow: 5, data: 3, training: 2, ux: 2, integration: 1 }, // 13
    { day: 3,  workflow: 4, data: 4, training: 2, ux: 2, integration: 1 }, // 13
    { day: 4,  workflow: 5, data: 3, training: 2, ux: 1, integration: 1 }, // 12
    { day: 5,  workflow: 4, data: 3, training: 2, ux: 1, integration: 0 }, // 10
    { day: 6,  workflow: 4, data: 2, training: 2, ux: 1, integration: 0 }, // 9
    { day: 7,  workflow: 3, data: 2, training: 2, ux: 1, integration: 0 }, // 8
    { day: 8,  workflow: 3, data: 2, training: 1, ux: 1, integration: 0 }, // 7
    { day: 9,  workflow: 2, data: 2, training: 1, ux: 1, integration: 0 }, // 6
    { day: 10, workflow: 2, data: 1, training: 1, ux: 1, integration: 0 }, // 5
    { day: 11, workflow: 2, data: 1, training: 1, ux: 0, integration: 0 }, // 4
    { day: 12, workflow: 1, data: 1, training: 1, ux: 0, integration: 0 }, // 3
    { day: 13, workflow: 1, data: 1, training: 1, ux: 0, integration: 0 }, // 3
    { day: 14, workflow: 1, data: 1, training: 1, ux: 0, integration: 0 }, // 3
  ];

  function renderCategoryChart() {
    const svg = document.getElementById('catChart');
    if (!svg) return;
    const W = 720, H = 240, padL = 40, padR = 20, padT = 20, padB = 30;
    const innerW = W - padL - padR;
    const innerH = H - padT - padB;
    const days = CAT_DATA.length;
    const barW = innerW / days * 0.62;
    const slotW = innerW / days;
    const max = Math.max(...CAT_DATA.map(d => d.workflow + d.data + d.training + d.ux + d.integration));
    const yScale = innerH / max;
    const keys = ['workflow', 'data', 'training', 'ux', 'integration'];

    let svgContent = '';
    // Y gridlines
    for (let i = 0; i <= 4; i++) {
      const y = padT + (innerH * i / 4);
      const v = Math.round(max - (max * i / 4));
      svgContent += `<line x1="${padL}" y1="${y}" x2="${W-padR}" y2="${y}" stroke="var(--border)" stroke-dasharray="2 4" stroke-width="1"/>`;
      svgContent += `<text x="${padL-6}" y="${y+3}" text-anchor="end" font-size="9.5" font-family="JetBrains Mono, monospace" fill="var(--ink-3)">${v}</text>`;
    }
    // Bars
    CAT_DATA.forEach((d, i) => {
      const xCenter = padL + slotW * (i + 0.5);
      const x = xCenter - barW / 2;
      let yCursor = padT + innerH;
      keys.forEach((k, kIdx) => {
        const h = d[k] * yScale;
        if (h <= 0) return;
        yCursor -= h;
        svgContent += `<rect x="${x}" y="${yCursor}" width="${barW}" height="${h}" fill="${CAT_COLORS[kIdx]}" opacity="0.85"/>`;
      });
      // X axis label every 2 days
      if ((i + 1) % 2 === 1 || i === days - 1) {
        svgContent += `<text x="${xCenter}" y="${padT+innerH+18}" text-anchor="middle" font-size="9.5" font-family="JetBrains Mono, monospace" fill="var(--ink-3)">D${d.day}</text>`;
      }
    });
    svg.innerHTML = svgContent;
  }
  renderCategoryChart();
```

- [ ] **Step 2: Verify in browser**

Reload. Expected:
- Stacked bar chart renders inside the bottom-right card.
- Bars start tall (~13/day) on left, decline to ~3/day on right.
- Five color stacks visible (red workflow at bottom, then amber data, gold training, blue UX, purple integration).
- Legend below chart matches stack colors.

- [ ] **Step 3: Commit**

```bash
git -C /Users/norbertpap/Sites/gratia commit -am "feat: tickets-by-category stacked bar chart (14-day window)"
```

---

## Task 15: Final QA, theme check, and cleanup

**Files:**
- Modify: `gratia/hypercare-dashboard.html` (cleanup only)

- [ ] **Step 1: Visual QA in dark theme (default)**

Open the page. Walk through each section and confirm:

- [ ] Header: eyebrow, view-select, status chip, lede with `<em>`, sublede.
- [ ] KPI row: 5 cards, deltas color-coded.
- [ ] Stabilization chart: two lines, target band, today marker, dots, legend, hover scrubber works.
- [ ] Exit-criteria card: 6 rows, pills, streak dots, click-to-jump.
- [ ] Matrix: 9 rows, all cells render. Filter chips work. View-select reorders.
- [ ] Bottom row: repeat issues 5 rows, severity pills; category chart bars + legend.
- [ ] Theme toggle: switch to light, all sections re-skin correctly. Switch back.
- [ ] Console: zero errors and zero warnings.

- [ ] **Step 2: Search for and remove any dead code**

Search for:
- `archetype` / `ARCHETYPES` / `currentPacingArchetype` — any references? Delete.
- `STAGES` const — referenced anywhere? If not, delete.
- `renderWaffle`, `renderTeamsView`, `renderMovers`, `renderStatusList`, `renderPacingChart` — are they still called? Delete unused.
- `client-menu-item[data-client]` — old client filter remnants in CSS? Delete unused selectors.
- `pending-tag`, `dep-tag`, `dep-empty`, `seg.done`, `seg.future`, `seg.cur-r`, `.stages`, `.stage-labels`, `.stage-filter-banner`, `stageBanner*` — any dead CSS or JS related to stages? Delete unused.

After each deletion, reload to verify nothing broke.

- [ ] **Step 3: Verify final file**

```bash
wc -l /Users/norbertpap/Sites/gratia/hypercare-dashboard.html
```

Expected: somewhere between 1500 and 2500 lines (down from original 3370 due to personas tab + dead code removal).

- [ ] **Step 4: Final commit**

```bash
git -C /Users/norbertpap/Sites/gratia commit -am "chore: remove dead code from hypercare dashboard prototype"
```

- [ ] **Step 5: Push (only if user explicitly requests)**

Do NOT push without user instruction.

---

## Self-review checklist (already run inline by author)

**Spec coverage**

- [x] Header (eyebrow, status chip, lede, sublede, view-select) — Tasks 3, 4
- [x] KPI row (5 KPIs with the right labels and tip) — Task 5
- [x] Stabilization chart (two series, target band, today marker, hover scrubber) — Tasks 6, 7
- [x] Exit-criteria card (title, 6 rows, pills, streaks, click-to-jump) — Tasks 8, 9
- [x] Team matrix (9 rows, columns Adoption/Tickets/Training/Last login/Status/Days, filter chips, view-select) — Tasks 10, 11, 12
- [x] Repeat-issues list (5 rows, severity pills) — Task 13
- [x] Tickets-by-category stacked bar — Task 14
- [x] Theme + tokens reuse — Task 1 (file copy preserves them)
- [x] Visual deviations from reference — implemented section by section

**Type/property consistency**

- [x] `HYPERCARE_TEAMS` row property names (`name`, `region`, `lead`, `leadInit`, `avatarUrl`, `wave`, `days`, `adoption`, `openTickets`, `training`, `lastLogin`, `status`, `role`) — used consistently in `renderMatrix` and `applyView`.
- [x] `EXIT_CRITERIA` property names (`label`, `target`, `current`, `state`, `streak`, `jumpTo`) — used consistently in `renderExitCriteria` and the click handler.
- [x] `REPEAT_ISSUES` property names (`issue`, `category`, `open`, `firstSeen`, `owner`, `severity`) — consistent in `renderRepeatIssues`.
- [x] CSS class consistency: `.adopt-fill`, `.ri-cat`, `.ri-sev`, `.exit-pill`, `.streak-dot` — used as defined.
- [x] Element IDs: `matrix-section`, `repeat-issues`, `exitList`, `viewSelectBtn`, `viewMenu`, `viewSelectLabel`, `stabChart`, `stabHoverArea`, `stabScrubber`, `catChart`, `ri-rows` — all referenced from JS as defined in HTML.

**Placeholder scan**

- [x] Every code step contains complete code (no "TBD", no "fill in details", no "similar to Task N").
- [x] Mock data is fully specified (no placeholder names — all 9 teams have real names).
- [x] All commit messages are concrete.
