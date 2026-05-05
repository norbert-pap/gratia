# Kissflow Hypercare Dashboard — Design

## Context

Apollo's Kissflow ISG SMA implementation goes live May 30, 2026 with a 4–8 week hypercare window starting June 1. Hypercare is the post-launch stabilization phase: monitor adoption, drive ticket volume down, fix repeat issues, retire the old SMA process, and exit cleanly when criteria are met.

The existing exec dashboard (`gratia/exec-dashboard.html`, M&A integration shape with stages and pacing) is the visual reference. Its content shape (workstreams progressing through stages) does not fit hypercare — there are no stages post-launch. The hypercare dashboard reuses the same chrome, KPI/card primitives, theme, and matrix shape, but replaces the stage/pacing model with a **stabilization** model: tickets declining + adoption climbing + exit-criteria checklist.

Audience: mixed exec view. Top-of-page reads at a glance for the MD; matrix and bottom row support the change/training lead and operational owners.

This is a prototype for stakeholder review, paralleling the current exec-dashboard prototype. No backend, no live Kissflow data — mock data baked into the page.

## Scope

### In scope (v1)

- Single-page dashboard at `gratia/hypercare-dashboard.html`, sibling to `exec-dashboard.html`.
- Same auth shell (`auth.js`), same theme tokens, same dark/light toggle.
- Header with eyebrow, status chip, lede, sublede, head actions (matching exec-dashboard).
- KPI row (5 KPIs).
- Hero grid (2 cards): stabilization chart + exit-criteria card.
- Team / cohort matrix (rows = ~9 teams across roles and regions).
- Bottom row: repeat-issues list (left) + tickets-by-category mini-chart (right).
- Filter: dropdown for Team / Region / Role view; chip row for All / Lagging / On-track.
- Mock data baked in. One scenario state: Day 12 of 30, amber.

### Out of scope (v1)

- Live Kissflow data, BFF, auth integration with Apollo SSO.
- Drawer detail on row click (placeholder only).
- Mobile / tablet layout (desktop only, like exec-dashboard).
- Multiple scenario states (only Day 12 of 30 amber rendered).
- Drill-through into a specific team / ticket.
- History / time-machine view.
- Notifications, exports, alerts.
- A "previous week" comparison toggle on the team grid.

## Design

### 1. Page chrome (header + nav)

Identical to `exec-dashboard.html`:

- `.glow` background.
- `.mainnav` with brand mark, single tab `Hypercare` (active), theme toggle, notifications icon, avatar.
- `.content > .tab-panel.active`.

No nav/chrome changes from the reference.

### 2. Page-head

Same `.page-head` structure as exec-dashboard. Content:

- **Eyebrow**: `Apollo · Kissflow Hypercare · Day 12 of 30`
- **Filter dropdown** (replaces client filter): a `view-select` with options:
  - Default: `All teams`
  - `By region` (sub-options: NY · Chicago · Mumbai · London)
  - `By role` (sub-options: Primary user · Contributor · Power user · Glance-only)
  - Filtering re-aggregates KPIs and re-shapes the matrix rows accordingly.
- **Status chip**: amber, label `Stabilizing on track`. Pulsing dot per existing `.dot-pulse`.
- **Lede**: `3 of 6 exit criteria met. Tickets down 38% week-over-week.`
- **Sublede**: `Adoption lagging in Mumbai Ops and Chicago Reporting. Repeat-issue rate still above threshold — workflow stage-transition bug accounts for the largest share.`
- **Head actions**: one primary button `Export weekly summary` (visual only, no behavior in v1).

### 3. KPI row (5 KPIs)

Same `.kpi-row` and `.kpi` structure as exec-dashboard. Five cards in order:

| # | Label | Value | Delta line |
|---|---|---|---|
| 1 | Adoption rate | `84%` | `+6pp WoW · target 90%` (amber) |
| 2 | Open P1 / P2 | `6` | `−8 since last week` (green) |
| 3 | Repeat-issue rate | `14%` | `−3pp WoW · target <10%` (amber) |
| 4 | MTTR (P2) | `18h` | `Within 24h target` (green) |
| 5 | Days to exit | `18` | `3 of 6 criteria met` (neutral/amber) |

The "Days to exit" tile uses `tip.tip-wide` to explain that exit requires all 6 criteria met for 5 consecutive days (matching the SLA-tooltip pattern in the reference).

### 4. Hero grid — left card: stabilization chart

Two-series SVG line chart, Day 0 → Day 30 horizontal axis. Same chart frame as the exec dashboard's pacing chart (axes, grid, today line at Day 12, legend).

- **Series A — Open tickets** (red ink): line peaks around Day 4 (~32 tickets), declines to Day 12 at ~14, projected dashed extension to ~3 by Day 30.
- **Series B — Adoption %** (gold/green ink, plotted on a secondary right-side axis 0–100%): rising line from ~30% at Day 1 to 84% at Day 12, projected dashed to ~94% at Day 30.
- **Target band** (subtle dashed): adoption ≥90% target line at the top, ticket-volume ≤5/day target line at the bottom.
- **Today marker**: vertical dashed line at Day 12, matching exec-dashboard's plan-line/today-line treatment.
- **Hover scrubber**: vertical guide + multi-value tooltip showing both series at the hovered day. Same interaction model as the exec-dashboard pacing chart.
- **Card head toggle** (matching exec-dashboard's left-card toggle): `Trend` (default) / `Daily` (bar view of net ticket open vs. close per day). Daily view is a simple bar chart with green (closed) and red (opened) bars side-by-side per day for the last 14 days. Stretch — implement only if straightforward; otherwise ship Trend-only and log Daily as v1.1.

### 5. Hero grid — right card: exit-criteria card

New card, replaces the right-side waffle/list of the exec dashboard. Title row:

- Title: `Hypercare exit criteria`
- Counter: `3 of 6 met`
- No toggle; no filter.

Body: a vertical list of 6 rows. Each row:

```
[status pill]  Criterion label
              target · current value           [streak indicator]
```

| # | Criterion | Target | Current | State |
|---|---|---|---|---|
| 1 | Open P1 incidents | 0 for 5 consecutive days | 0 · day 2 of 5 | in progress (streak) |
| 2 | Adoption rate (all teams) | ≥ 90% | 84% · 7 of 9 teams pass | failing |
| 3 | Repeat-issue rate | < 10% | 14% | failing |
| 4 | MTTR (P2) | ≤ 24h sustained | 18h · day 5 of 5 | met |
| 5 | Old SMA process retirement | 100% on Kissflow | 100% | met |
| 6 | Training completion | ≥ 95% | 96% | met |

Rendering rules per row:

- **Status pill** (left): `met` (green), `in progress` (amber, with mini streak dots), `failing` (red).
- **Streak indicator** (right, only when target uses "for N consecutive days"): N small dots, filled = day passed, hollow = pending. E.g. for criterion 1: `● ● ○ ○ ○`.
- **Failing rows are clickable**: clicking jumps the page to the matrix row(s) or repeat-issues list explaining the failure (e.g., Adoption-rate row jumps to matrix sorted by Adoption asc; Repeat-issue row jumps to repeat-issues list).
- **Met rows are calm**: muted ink, no emphasis.

This card is the MD's glance surface — at-a-glance state of "are we exiting on time?"

### 6. Team / cohort matrix

Replaces the exec-dashboard team matrix (`.matrix-row` etc.). Same row chrome, lead avatar, status indicator dot, and hover behavior. Different columns.

Matrix columns:

| Col | Label | Cell content |
|---|---|---|
| 1 | Team | Team name + region pill (e.g. `Operations · Mumbai`) |
| 2 | Lead | Avatar + name. Use the four named personas where they map (Jordan Reyes — Onboarding Program NY, Sarah Chen — Performance Reporting NY, Priya Shah — Operations Mumbai, Marcus Hart — referenced as MD-level oversight, not a row lead). Other rows use generic avatars + plausible names. |
| 3 | Adoption | Bar cell: % adoption with a thin horizontal bar (replaces the stage-progression segments cell in exec-dashboard). Bar color follows adoption thresholds: ≥90% green, 75–89% amber, <75% red. |
| 4 | Open tickets | Number cell, colored by P1/P2 weighting. |
| 5 | Training | % completion with a tiny gauge / progress dot. |
| 6 | Last login | Bucket: `Today`, `1–3d`, `4–7d`, `>7d`. >7d gets red ink. |
| 7 | Status | Same dot-and-label as exec-dashboard (`On-track` / `Lagging` / `At risk`). |
| 8 | Days | Days since this team's go-live. Wave 1 teams (May 30) show 12; Wave 2 teams (June 5) show 7. |

Filter chips above the matrix: `All (9)` · `Lagging (2)` · `At-risk (1)` · `On-track (6)`.

Mock teams (rows):

| Team | Region | Lead | Wave | Adoption | Open tickets | Training | Last login | Status |
|---|---|---|---|---|---|---|---|---|
| Onboarding Program | NY | Jordan Reyes | 1 | 96% | 0 | 100% | Today | On-track |
| Performance Reporting | NY | Sarah Chen | 1 | 92% | 1 | 100% | Today | On-track |
| Performance Reporting | Chicago | (peer of Sarah) | 1 | 71% | 3 | 88% | 1–3d | Lagging |
| Operations | NY | (peer of Priya) | 1 | 90% | 1 | 96% | Today | On-track |
| Operations | Mumbai | Priya Shah | 2 | 64% | 5 | 92% | 4–7d | At risk |
| Client Service | NY | TBD | 1 | 88% | 0 | 100% | Today | On-track |
| Client Service | London | TBD | 2 | 82% | 1 | 95% | 1–3d | Lagging |
| Trade Ops | NY | TBD | 1 | 91% | 1 | 100% | Today | On-track |
| Compliance | NY | TBD | 1 | 89% | 0 | 100% | Today | On-track |

Sortable by any column header.

### 7. Bottom row — repeat issues + tickets by category

Two cards side-by-side, same width split as the hero grid above.

#### Left: repeat issues list

Replaces the exec-dashboard bottlenecks list. Same `.bottlenecks` row chrome (sortable, hover, severity dot). Columns: Issue · Category · Open count · First seen · Owner · Severity.

Top 5 mock rows:

| Issue | Category | Open | First seen | Owner | Severity |
|---|---|---|---|---|---|
| Stage transition stuck on Tasks Selection | Workflow logic | 8 | Day 2 | Eng | P1 |
| Client field validation error on rare characters | Data | 5 | Day 4 | Eng | P2 |
| Trade Ready notification missing for Wave-2 teams | Workflow logic | 4 | Day 6 | Eng | P2 |
| Re-onboarding flow unclear when client returns | Training gap | 3 | Day 5 | Training | P3 |
| Audit log missing fields on bulk import | Data | 2 | Day 8 | Eng | P3 |

The first row (workflow stage-transition bug) is the one referenced in the lede sublede — accounts for the elevated repeat-issue rate.

#### Right: tickets by category

Stacked bar chart, last 14 days, x-axis = day, y-axis = count. Stack categories (color-coded):

- Workflow logic (red)
- Data (amber)
- Training gap (gold)
- UX / usability (blue)
- Integration (purple)

Pattern over the 14 days: bars start tall (~10–14/day) and decline to ~3/day by Day 12. Training-gap stack is small but stable — a flag that training refreshers may be needed.

A small legend below the chart with the five categories.

### 8. Theme + tokens

Reuse `exec-dashboard.html` design tokens verbatim. No new tokens. Add only:

- One semantic class for the **streak dot** (filled / hollow) used in the exit-criteria card. CSS: same red/amber/green palette.
- One class for the **secondary right-side axis** in the stabilization chart.

### 9. Visual deviations from the reference (summary)

For implementation review traceability:

1. Pacing chart → stabilization chart (two series, secondary axis, target band).
2. Right hero card (waffle + list toggle) → exit-criteria card (no toggle).
3. Bottlenecks list → repeat-issues list (adds Category column).
4. Stage-progression cell in matrix → adoption-bar cell.
5. Adds tickets-by-category stacked bar chart in the bottom-right card position (the reference doesn't have this card; in exec-dashboard the bottom-right is empty).
6. Client filter dropdown → Team / Region / Role view selector.

Everything else (typography, color tokens, KPI shape, status chip, header, theme toggle, filter chips, hover/scrubber, drawer behavior placeholder) is identical.

## Cuts to make if pressure

In priority order:

1. Drop the "Daily" toggle on the stabilization chart; ship Trend-only.
2. Drop the secondary axis for adoption in the stabilization chart; show tickets only, with adoption coverage moved to the KPI row delta.
3. Drop the tickets-by-category stacked bar; leave the bottom-right empty (matches exec-dashboard).
4. Reduce matrix from 9 teams to 5.
5. Drop streak dots on exit-criteria card; show plain `met / in progress / failing` pills only.

## Decisions locked

1. Persona avatars: use named personas (Jordan, Sarah, Priya) where they map; generic avatars for other rows.
2. Hypercare window: **30 days**. Eyebrow `Day 12 of 30`; stabilization chart x-axis 0–30.
3. Wave structure: **2 waves** (Wave 1 May 30, Wave 2 June 5). Days column shows 12 / 7 accordingly.

## File layout

- `gratia/hypercare-dashboard.html` — single-file prototype (HTML + CSS + JS + mock data inline), matching the exec-dashboard pattern.
- Reuses `gratia/auth.js`.
- No new assets, fonts, or libraries.
