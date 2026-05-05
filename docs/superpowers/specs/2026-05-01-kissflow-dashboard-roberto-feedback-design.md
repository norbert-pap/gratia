# Kissflow Dashboard — Roberto's Round-3 Feedback

## Context

Roberto consolidated John's feedback on the Kissflow exec dashboard prototype (`kissflow.html`) and asked for the changes to land before EoW so Michelle can forward to engineering. Pure prototype edits — no backend, no API work.

## Scope

Six focused changes to the dashboard tab:

1. Hero left-card toggle: pacing chart ↔ team grid (week-over-week).
2. Tooltip on the SLA breaches KPI explaining the breach rule.
3. Tooltip on the matrix Days column header.
4. Tooltip on each matrix stage column header (Impact Assessment, Tasks Selection, In Progress, Ready for Trading, Onboarding Complete) — encodes the post-onboarding-tasks logic into the headers.
5. Remove the bottlenecks section entirely.
6. Faked previous-week status data per team for the new team-grid view.

Out of scope: live previous-week data, any non-dashboard tabs (Personas, Decision Log, etc.), engineering's Kissflow-vs-custom architecture decision.

## Design

### 1. Left hero card — pacing/teams toggle

The left card currently holds the pacing line chart. Add a `.waffle-head-toggle`-style toggle in its header (matching the right card's Grid/List pattern) with two views:

- **Pacing** (default) — existing SVG chart, no changes.
- **Teams** — a roomy team grid:
  - 5-column grid of 23 team tiles (5 rows of 4–5).
  - Each tile is ~46px tall: status dot · team name · trailing "last week" dot at the right edge.
  - Tile colors follow the existing red/amber/green semantic palette.
  - The trailing dot is the same colors but smaller (~5px) and dimmer.
  - A small `vs last wk` legend label sits with the existing on-track / pending / off-track counts so the trailing dot decodes.
  - Stage filtering (clicking a row in pacing chart) only applies in Pacing view; Teams view is portfolio-only.

Right hero card (compact waffle + Grid/List toggle) is unchanged.

### 2. SLA breaches KPI tooltip

Wrap the KPI label in `.tip[data-tip]`. Copy:

> A team is in breach if it has spent >24h in Impact Assessment, >24h in Tasks Selection, or is past the due date without reaching Ready for Trading.

### 3. Days column header tooltip

Wrap the matrix-head-row "Days" cell in `.tip[data-tip]`. Copy:

> Elapsed time in the current stage.

### 4. Stage column header tooltips

Wrap each `.matrix-head-row .stage-labels > div` in `.tip[data-tip]`. Copy:

- **Impact Assessment** — Initial assessment of the team's involvement and what's required for this client. SLA: 24 hours.
- **Tasks Selection** — Tasks chosen and assigned to owners on the team. SLA: 24 hours.
- **In Progress** — Team is executing the assigned tasks. Duration varies by scope.
- **Ready for Trading** — Team can support trading for this client. Teams with post-event closure tasks remain here while completing them.
- **Onboarding Complete** — All onboarding work closed. Teams without post-event closure tasks move directly from Ready for Trading to Complete.

The existing `.tip` CSS uses `white-space: nowrap`. Multi-sentence copy needs `white-space: normal` + a max-width on the tooltip — add a modifier (`.tip.tip-wide` or similar) instead of changing the global behavior.

### 5. Remove bottlenecks section

Delete the `<section class="bottom-grid single">` containing the bottlenecks card from the dashboard tab. Remove the corresponding render code that populates `#bottleneck-list` and `#bottleneck-count` and any data structures used only there.

### 6. Faked previous-week status

For the prototype, give each team a plausible `lastWeekHealth` value alongside its current `health`:

- Most teams: same as current week.
- ~3 teams: improved (red→amber, amber→green).
- ~3 teams: worsened (green→amber, amber→red).
- Distribution applied across the 23 teams in the existing dataset, weighted so the mix tells a believable "things are slipping" story consistent with the rest of the dashboard.

Per-client variants (when the client filter is active) should also have plausible last-week states.

## Non-goals

- No changes to the matrix table itself beyond the header tooltips.
- No changes to KPIs other than the SLA tooltip.
- No changes to the Personas or other tabs.
- No new color/typography tokens.

## Risks

- Tooltip wrapping: existing `.tip` class assumes single-line. Adding multi-line variants without breaking single-line uses is a small CSS change; verify both still render correctly.
- Stage filter banner: clicking pacing chart stages currently filters the matrix. Switching to Teams view should not trap the user in a stale filter — clearing on toggle is cheapest; preserving it is fine if natural.
- Previous-week dot legibility against the tile background tints (red-dim / amber-dim / green-dim): pick a dot opacity/border that reads on all three.
