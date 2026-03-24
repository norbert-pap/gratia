# Growth Calculator — Design Spec

**Date:** 2026-03-24
**Location:** `growth/index.html`
**Scope:** Gratia-wide revenue calculator (not Apollo-specific)

## Overview

A single-page interactive calculator that models Gratia's annual revenue against a configurable goal. Users set team composition (headcount and rates per analyst level), adjust utilization and hours, and track actuals against forecasts in a monthly breakdown for Jan–Dec 2026.

## Architecture

Single self-contained HTML file with inline CSS and vanilla JS. Same pattern as `apollo/latam-captive.html`. No build step, no dependencies beyond Google Fonts (DM Sans). Uses `auth.js` for access gating. Data persists actuals to `localStorage`.

## Layout — Four Sections

### 1. Goal Bar (top)

Dark (#1a3a3a) banner spanning full width with:
- **Annual Revenue Goal** — editable number input (default $6,000,000)
- **Progress bar** — projected / goal percentage, color-coded (green >=100%, amber >=60%, red <60%)
- **Projected Annual Revenue** — auto-calculated, large green number

### 2. Team Composition Table

Table with all 7 Gratia levels. Columns:

| Level | Role | Rate/hr | Cost/hr | HC | Mo. Revenue | Mo. Cost | Margin |
|-------|------|---------|---------|----|-------------|----------|--------|

- **Rate/hr** — editable input per level (default from rate card)
- **Cost/hr** — editable input per level (default from rate card)
- **HC** — editable input per level (default headcount)
- **Mo. Revenue** — auto-calculated: HC × rate × utilization × hours
- **Mo. Cost** — auto-calculated: HC × cost/hr × hours
- **Margin** — revenue minus cost
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
- **Blended Rate** — read-only, auto-calculated weighted average from team mix.
- **Monthly Target** — read-only, goal / 12 (or adjusted if compensation toggle is on).

### 4. Monthly Breakdown — Jan–Dec 2026

Grid table with 12 month columns. Rows:

1. **HC** — For completed months (Jan–Mar): editable input for actual headcount. For the current month (Apr): editable input with forecast as placeholder. Future months: auto-calculated from baseline HC + hiring pace.
2. **Utilization** — For completed months: editable input for actual utilization %. Future months: uses global utilization value.
3. **Revenue** — For completed months: editable input for actual revenue. Future months: auto-calculated from that month's HC × blended rate × utilization × hours.
4. **Target** — Monthly target. Either flat (goal/12) or escalating (compensating for prior shortfalls), controlled by toggle.
5. **Gap** — Revenue minus target. Color-coded: green (positive), red (negative).

**Compensation toggle:** When ON, remaining months' targets increase to absorb shortfalls from completed months. When OFF, every month shows flat goal/12.

**HC ramp for future months:** A "hiring pace" input (e.g., +2 analysts/month) determines how HC grows from the baseline across forecast months. The baseline HC comes from the team composition table totals.

**Actuals persistence:** Completed month data (HC, utilization, revenue) saved to `localStorage` under a unique key. Survives page reload.

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
Blended rate              = total monthly revenue / (total HC × utilization × hours)
Annual projected          = sum of 12 months (actuals for completed, forecast for future)
Gap                       = projected - goal
```

For forecast months with HC ramp:
```
Month N HC = baseline HC + (hiring_pace × months_from_baseline)
Month N revenue = Month_N_HC × blended_rate × utilization × hours
```

When compensation is ON:
```
remaining_target = (annual_goal - sum_of_actuals) / remaining_months
```

## Design System

Matches existing Gratia internal tools:
- Font: DM Sans
- Colors: #1a3a3a (dark), #2d8a70 (primary green), #4ecba5 (accent), #f9fafb (light bg)
- Inputs: same `.hc-input` style as latam-captive
- Section labels: 10px uppercase green
- Dark output panels: #1a3a3a with green/white text

## Out of Scope

- Multi-client breakdown (this is company-wide totals)
- Cost-side overhead (EOR, CLT, site lead) — that's the LATAM captive calculator's job
- Scenarios (bear/base/bull) — removed in favor of direct variable adjustment
- Gap analysis / pricing matrix — user adjusts variables directly
- Recruiter capacity modeling

## Nav Hub Integration

Add a card to `index.html` in the Strategy & Growth section linking to `growth/index.html`.
