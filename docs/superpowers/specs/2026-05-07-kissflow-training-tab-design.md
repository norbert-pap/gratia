# Kissflow Training Tab — Design

## Context

Kirsty asked what we'd need from Apollo to vibe-code their Kissflow training environment. Rather than answer in writing, we're mocking the training environment as a second tab in the existing hypercare dashboard prototype (`gratia/hypercare-dashboard.html`) so she can see it concretely.

Two distinct audiences across the two tabs:
- **Hypercare tab** (existing) — exec / change lead view of rollout health
- **Training tab** (this spec) — end-user view: someone in ISG SMA consuming Kissflow training

Mock user: Priya Shah, Operations Mumbai (same persona used in the matrix).

This is mock-only — no real PDF rendering, no real quiz scoring, no persistence. Convincing visuals + one fake interaction (quiz auto-grades against hardcoded answers, training-complete button toggles a local state).

## Scope

### In scope (v1)

- New tab button `Training` in main nav, sibling to `Hypercare`
- New `<div id="tab-training" class="tab-panel">`
- Eight sections inside the training tab:
  1. Welcome hero (greeting, progress ring, time remaining)
  2. Documents (2 PDF tiles — Quick Reference + Full Step Guide)
  3. Video demo card (thumbnail + play affordance, "Watched" state)
  4. Click-through walkthrough (5-step stepper)
  5. Quiz (5 multiple-choice questions, scored)
  6. Mark training complete button (gated by quiz pass; persists to localStorage)
  7. Get support card (email + Slack + FAQ accordion)
  8. My training metrics (4 stats vs team)
- Same dark/light theme tokens
- Same nav chrome
- One real interaction: quiz submission auto-grades + reveals correct answers; passing (≥4 of 5 correct) unlocks the "Mark complete" button

### Out of scope (v1)

- Real PDF previews (tile click is a no-op or alert)
- Real video player (hero is a static card with play icon; click is a no-op)
- Real walkthrough content (steps are placeholder titles + lorem-ipsum bodies)
- Saving quiz results to a backend (purely client-side)
- Multi-user persistence (localStorage only)
- Mobile / tablet layout (desktop only)

## Design

### Mock user state baked in

```js
const TRAINING_USER = { name: 'Priya Shah', team: 'Operations · Mumbai', avatar: 'https://randomuser.me/api/portraits/women/79.jpg' };
const TRAINING_PROGRESS = { modulesComplete: 3, modulesTotal: 5, estMinutesLeft: 22, daysSinceEnroll: 18 };
```

### 1. Welcome hero

Full-width card. Layout: avatar + greeting on the left; progress ring + stats on the right.

- Eyebrow: `Kissflow training · Day 7 of self-paced enrollment`
- H1: `Welcome back, Priya.`
- Sub: `You've completed 3 of 5 modules. ~22 min left.`
- Right side: SVG progress ring (60% filled), inside the ring `60%`, beneath the ring: `3 of 5 modules`.

### 2. Documents

Title `Reference materials`. Two-column grid of PDF tiles. Each tile:

- Icon (PDF), title, page count, last-updated, two buttons (`View` / `Download`).

Tiles:
- *Quick Reference Guide* · 8 pages · updated May 2 · cyan accent
- *Full Step Guide* · 42 pages · updated April 28 · gold accent

Click is a no-op in v1 (could show a toast: "Mock — wire this up when PDFs are uploaded").

### 3. Video demo

Single full-width card. Aspect-ratio 16:9 thumbnail (gradient placeholder), play icon centered, duration chip bottom-right, status chip top-right showing `Watched · May 4` (green) or `Not yet watched` (amber). For Priya: status is `Watched`.

Below the thumbnail: title + 1-line description.

### 4. Click-through walkthrough

Stepper UI. Title `Hands-on walkthrough`. A horizontal 5-step header strip showing step 1..5 with current step highlighted. Below it, the active step's content panel:

- Step number, step title
- Body text (1 paragraph placeholder)
- Faux screenshot (simple SVG/CSS rectangle with annotation pins)
- `← Previous` / `Next →` buttons

5 step titles:
1. Open your work queue
2. Start a new SMA onboarding
3. Move tasks through stages
4. Add dependencies and notes
5. Mark onboarding complete

Stepper state is local to the page (re-render the body when step changes).

### 5. Quiz

Title `Knowledge check · 5 questions`. State-machine: `unanswered` → `submitted`.

Five questions with 4 multiple-choice answers each. State stores user's selection per question. `Submit` button at the bottom.

After submit:
- Each question displays the user's selection + the correct answer (green/red highlight)
- Score chip at top: `4 of 5 correct · pass`
- "Mark complete" button (Section 6) becomes enabled

Pass threshold: ≥4 of 5. If user fails, show "Try again" — re-renders the quiz unanswered.

Five sample questions about Kissflow SMA workflow stages, dependency tags, etc. Two are about the SMA process (Impact Assessment → Tasks Selection → In Progress → Ready for Trading → Onboarding Complete), two about Kissflow UI, one about who to contact for support.

### 6. Mark training complete

A single CTA card. Disabled state until quiz pass:
- Disabled copy: `Complete the knowledge check to unlock`
- Enabled copy: `Mark training complete`

When clicked: confirmation modal `You're confirming that you've completed Kissflow training. This will be visible to your team lead.` + `Cancel` / `Confirm` buttons. On Confirm: button collapses into a green chip showing `Completed · May 7, 2026 by Priya Shah`. State persists in localStorage `kissflow-training-complete-priya`.

### 7. Get support

Card with title `Need help?`. Three subsections:

- **Email a trainer** — button `kissflow-training@apollo.example` (mailto:)
- **Ask in Slack** — button `#kissflow-help` (no real link)
- **FAQ** — accordion with 4 items (Q + A). Sample questions: "I can't see my onboarding queue", "How do I add a dependency?", "What if I'm stuck on a stage?", "How do I get re-trained?"

### 8. My training metrics

Four stat tiles in one row:

| Stat | Priya | Team avg |
|---|---|---|
| Modules complete | 3 of 5 | 3.7 of 5 |
| Last quiz score | 4/5 | 4.1/5 |
| Time spent | 38 min | 45 min |
| Days enrolled | 18 | 16 |

Each tile shows the user's number, then "vs team avg" in muted text below.

## File layout

Single file: `gratia/hypercare-dashboard.html`. Adds:
- One new tab button + one new tab-panel
- Per-section HTML + CSS + JS
- One small piece of localStorage interaction (training-complete state)

No new files, no new directories.

## Decisions locked

- Mock user: Priya Shah (matches existing matrix persona)
- Mock-only: no real PDF/video/quiz backend
- Quiz state machine: `unanswered → submitted` (with optional "Try again" reset)
- Persistence: localStorage only (per-user key namespace)
- Theme: same dark/light tokens as Hypercare tab
- Visual language: same chrome (cards, KPIs, accent colors, JetBrains Mono for numbers)
