# Growth Calculator — Design Spec

**Date:** 2026-03-24
**Location:** `growth/index.html`
**Scope:** Gratia-wide revenue calculator (not Apollo-specific)

## Overview

A single-page interactive calculator that models Gratia's annual revenue against a configurable goal. Users set team composition (headcount and rates per analyst level), adjust utilization and hours, and track actuals against forecasts in a monthly breakdown for Jan–Dec 2026.

## Architecture

Single self-contained HTML file with inline CSS and vanilla JS. Same pattern as `apollo/latam-captive.html`. No build step, no dependencies beyond Google Fonts (DM Sans). Uses `../auth.js` for access gating (file lives one level deep in `growth/`). Data persists actuals to `localStorage` under key `gratia-growth-calc-actuals`.

## Layout — Four Sections

### 1. Goal Bar (top)

Dark (#1a3a3a) banner spanning full width with:
- **Annual Revenue Goal** — editable number input (default $6,000,000)
- **Progress bar** — projected / goal percentage, color-coded (green >=100%, amber >=60%, red <60%). Bar width caps at 100%.
- **Projected Annual Revenue** — auto-calculated, large green number

### 2. Team Composition Table

Table with all 7 Gratia levels. Columns:

| Level | Role | Rate/hr | Cost/hr | HC | Mo. Revenue | Mo. Cost | Margin ($) |
|-------|------|---------|---------|----|-------------|----------|------------|

- **Rate/hr** — editable input per level (default from rate card)
- **Cost/hr** — editable input per level (default from rate card)
- **HC** — editable input per level (default headcount)
- **Mo. Revenue** — auto-calculated: HC × rate × utilization × hours
- **Mo. Cost** — auto-calculated: HC × cost/hr × hours
- **Margin ($)** — dollar margin: revenue minus cost per level
- **Totals footer** — sums for HC, revenue, cost, margin

Default levels and rates (from existing rate card):

```
A1  Apprentice Analyst     $15/hr    $7.50/hr   HC: 0
A2  Associate Analyst      $30/hr    $15/hr     HC: 0
A3  Business Analyst       $50/hr    $25/hr     HC: 3
A4  Senior Analyst         $75/hr    $37.50/hr  HC: 4
E1  AI/Automation Engineer $80/hr    $40/hr     HC: 0
L1  Lead Analyst           $100/hr   $50/hr     HC: 10
M1  Manager                $200/hr   $100/hr    HC: 3
```

### 3. Global Controls

Row of control cards below the team table:

- **Utilization** — slider, 20–100%, default 60%. Applied globally to revenue calculation.
- **Hours/Month** — slider, 120–200, default 160.
- **Hiring Pace** — slider, 0–10 analysts/month, default 2. Determines how total HC grows across forecast months. New hires are added proportionally to the current team mix (weighted by each level's share of total HC). If total HC is 0, new hires default to A3.
- **Blended Rate** — read-only, auto-calculated: `sum(HC_i × rate_i) / total_HC`. Shows $0 if total HC is 0.
- **Monthly Target** — read-only, goal / 12 (or adjusted if compensation toggle is on).

### 4. Monthly Breakdown — Jan–Dec 2026

Grid table with 12 month columns. Rows:

1. **HC** — For completed months (Jan–Mar, hardcoded boundary): editable input for actual headcount. For Apr onward: auto-calculated from baseline HC + hiring pace ramp. Apr also accepts manual override.
2. **Utilization** — For completed months: editable input for actual utilization %. Future months: uses global utilization value.
3. **Revenue** — For completed months: editable input for actual revenue. Future months: auto-calculated per-level (each level's HC × rate × utilization × hours, then summed), not blended — so the monthly forecast matches the team table exactly.
4. **Target** — Monthly target. Either flat (goal/12) or escalating (compensating for prior shortfalls), controlled by toggle.
5. **Gap** — Revenue minus target. Color-coded: green (positive), red (negative).

**Month boundary:** Months Jan–Mar 2026 are treated as completed (accept actuals). This is hardcoded for simplicity. Future iteration could auto-detect based on current date.

**Compensation toggle:** Switch positioned above the monthly table. When ON, remaining months' targets increase to absorb shortfalls from completed months: `remaining_target = (annual_goal - sum_of_actuals) / remaining_months`. Edge cases: if actuals exceed goal, remaining targets are $0. If no months remain (all 12 completed), the toggle is disabled.

**Forecast month revenue:** Uses per-level calculation, not blended rate. For ramped HC months, new hires are distributed across levels proportionally, then each level's revenue is calculated individually and summed. This ensures the monthly breakdown stays consistent with the team table.

**Actuals persistence:** Completed month data (HC, utilization, revenue) saved to `localStorage`. A small "Clear actuals" link at the bottom resets stored data.

### Summary Bar (bottom of monthly breakdown)

4-cell bar:
- Annual Goal (dark)
- Projected Revenue (light)
- Annual Gap (accent, red if negative, green if positive)
- % of Goal (dark)

## Calculations

```
Monthly revenue per level = HC × rate/hr × utilization × hours/month
Monthly cost per level    = HC × cost/hr × hours/month
Total monthly revenue     = sum of all levels' monthly revenue
Total monthly cost        = sum of all levels' monthly cost
Blended rate              = sum(HC_i × rate_i) / total_HC  (0 if HC is 0)
Annual projected          = sum of 12 months (actuals for completed, forecast for future)
Gap                       = projected - goal
```

For forecast months with HC ramp:
```
Month N total HC = baseline_HC + (hiring_pace × months_from_start_of_forecast)
New hires distributed proportionally across levels by current mix share
Month N revenue = sum of each level's (HC_i × rate_i × utilization × hours)
```

When compensation is ON:
```
remaining_target = max(0, (annual_goal - sum_of_actuals_and_forecasts_so_far)) / remaining_months
```

## Design System

Matches existing Gratia internal tools:
- Font: DM Sans
- Colors: #1a3a3a (dark), #2d8a70 (primary green), #4ecba5 (accent), #f9fafb (light bg)
- Inputs: same `.hc-input` style as latam-captive
- Section labels: 10px uppercase green
- Dark output panels: #1a3a3a with green/white text

## Nav Hub Integration

Add a card to `index.html` in the Strategy & Growth section linking to `growth/index.html`:
- **Icon:** chart-line (amber)
- **Title:** Growth Calculator
- **Description:** Revenue calculator — model analysts, rates, and utilization against your annual goal.
- **Tag:** Dashboard

## Out of Scope

- Multi-client breakdown (this is company-wide totals)
- Cost-side overhead (EOR, CLT, site lead) — that's the LATAM captive calculator's job
- Scenarios (bear/base/bull) — removed in favor of direct variable adjustment
- Gap analysis / pricing matrix — user adjusts variables directly
- Recruiter capacity modeling
- "How to use" box — the UI should be self-explanatory with labeled inputs
