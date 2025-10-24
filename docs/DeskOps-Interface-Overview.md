# DeskOps Interface Guidelines

## Objective

Refactor manually input Excel sheets for a *Construction & Demolition Recycling Facility* into a modern web application with unified design, export, and data visualization standards.

---

## Materials-Based Modules

### Inventory Report → Inventory Management

Displays available material stock, calculated as *(Produced + Received [recycled materials] − Dispatched)*.

- **Trigger Condition**: All four inputs (Production, Received, Dispatched, Opening) must be recorded daily before the snapshot trigger runs.

### Daily Production → Production Tracking

Captures daily crusher production metrics. Production materials sourced from *Received & Pure (raw)* entries. Mandatory for inventory calculation.

### Daily Dispatched → Transactions Record

Logs material dispatch transactions (quantity and ownership only; excludes delivery operations or vehicle tracking). Mandatory for inventory calculation.

### CDW Vehicles → Recycling Tracking

Logs valid recycling materials received. Mandatory for inventory calculation.

---

## Attendance Tracking (Scope Limited)

### Equipment Performance → Utilization

Daily logs [Number of Equipment Units + Hours Utilized / Shift].

### Manpower → Attendance

Daily logs [Number of Personnel (by Role Category) + Hours Worked / Shift].

*Scope limited to daily headcount and utilization tracking; excludes payroll or HR records.*

---

## Dashboard (Master)

A production-ready operational dashboard showcasing real-time business metrics through an elegant, data-first Flat UI System with subtle elevation, dark/light themes, and purposeful animations.

### Sidebar (App Navigation Panel)

- **Functionality**: Vertical navigation menu with icons and labels for all modules (Dashboard, Production, Dispatch, Received, Equipment, Manpower, Inventory, Reports, Settings).
- **Purpose**: Provides structured, role-based access to all system pages and maintains context while switching views.
- **Trigger**: Dashboard load or authenticated session render.
- **Progression**: Sidebar mounts → highlights current route → loads user role permissions → allows expand/collapse toggle (240 px → 64 px).
- **Success Criteria**: Active route highlighted correctly, smooth collapse animation, instant navigation without reload, responsive layout.
- **Data**: `users`, `routes`, `FeatureFlags`, `SidebarTokens`.

### Header (Global Navigation Bar)

- **Functionality**: Persistent top bar with site selector, date range filter, theme toggle, user profile, and notifications.
- **Purpose**: Provides global control and context across all dashboard pages.
- **Trigger**: User login → dashboard load.
- **Progression**: Auth session mounts → site & date filters initialize → theme and user context render → data refresh triggers for active site/date.
- **Success Criteria**: Header loads within 1s, theme toggle persists, site/date change updates all modules instantly, user menu responsive.
- **Data**: `sites`, `users`, `dashboard_metrics`, `ThemeContext`, `.env` feature flags.

### KPI Metric Cards (Row 1)

- **Functionality**: Display 4 primary business metrics with animated counters, trend indicators, and sparkline charts (25% width each).
- **Purpose**: Provides at-a-glance view of critical business health metrics.
- **Trigger**: Page load.
- **Progression**: Mount → stagger cascade animation (50 ms delay) → number counter animates from 0 to target → sparkline draws → hover reveals additional details.
- **Success Criteria**: All animations complete smoothly, percentage changes color-coded correctly, hover effects responsive.
- **Data**: Payload data via API call fetching `inventory ⇆ production ⇆ received ⇆ dispatched` Totals.

 1. **Total Production Today** — Sum of all production entries (TON)
 2. **Received Materials Today** — Sum of all received materials (TON)
 3. **Total Dispatched Today** — Sum of all dispatch quantities (TON)
 4. **Current Inventory Status** — Latest closing inventory (TON)

---

## Interactive Data Charts (Rows 2–5)

- **Functionality**: Five chart types (Line, Area, Bar, Donut, Scatter) displaying different business metrics with tooltips and legends.
- **Purpose**: Enables deep dive into trends, patterns, and distribution of business data.
- **Trigger**: Automatic render on mount, interactive on hover/click.
- **Progression**: Load → Skeleton shimmer → Chart fade-in → Hover shows detailed tooltip → Legend toggles series visibility.
- **Success Criteria**: Charts render data accurately, tooltips provide context, responsive to window resize, smooth transitions.

### Chart Components Required (Full)

#### Shared Defaults

- `ResponsiveContainer` with 100% width.
- `CartesianGrid` (dashed strokes).
- `XAxis`: date axis; `YAxis`: tons/hours abbreviations.
- `Legend`: togglable; `Tooltip`: formatted with unit suffix.
- `Brush`: enabled for zoom; colors from `ChartTokens.colors`.

#### Row 2

- **Received vs Dispatched** — `ComposedChart` with grouped Bars and Line (net = received − dispatched).
- **Production vs Target** — `ComposedChart` with Bars (production) + Line (target).

#### Row 3

- **Inventory Chart** — `AreaChart` with thresholds, smooth cumulative lines.
- **Material Levels** — Horizontal `BarChart`, sorted Top N.

#### Row 4

- **Equipment Utilization** — 100% stacked `BarChart` (operating vs idle).
- **Manpower Attendance** — Stacked `BarChart` by shift/role.

#### Row 5 – Detail Tabs

- Movements, Equipment, Manpower: Paginated tables with filters, pinning, virtualization, and export options.

**Accessibility Rules**: Minimum 44×44 px touch targets, keyboard-friendly tooltips, empty-state placeholders.

---

## Export Capability

### Overview

Generate Excel, PDF, and CSV/Power BI exports for all modules and dashboard summaries.

- **Purpose**: Share data with operations and analytics teams.
- **Scope**: Read-only exports; multi-site aware; time-bounded.

### UX Specification

- **Trigger**: Export button (header/module toolbar).
- **Dialog Fields**: Format, Module, Filters, Granularity, Columns, Grouping, Layout.
- **Progression**: Submit → Validate → Queue job → Toast + Progress → Download link.
- **Success Criteria**: Validation <150 ms; file ready <10 s; accessible keyboard navigation.

### Edge Cases

- Large results switch to async job.
- Empty results: file with headers + message.
- Sensitive fields stripped by role.
- Dual time zone columns (site + UTC).
- Expired links regenerate via audit.

### Roles & Permissions

| Role | Access |
|------|---------|
| Operator | Own site, ≤90 days |
| Moderator | Assigned sites, ≤12 months |
| Admin | All sites, full history + scheduling |

### File Formats

**Excel (.xlsx)**: Multi-sheet, filters, frozen header, conditional formatting.
**PDF (.pdf)**: A4, margins 16 mm, header/footer, optional charts.
**CSV (.csv)**: RFC 4180, UTF‑8 with BOM, ISO 8601.
**Power BI CSV**: kebab_case, denormalized joins.

### Implementation

- **API**: `POST /api/reports/export` → `{ jobId }`.
- **Queue**: BullMQ on Redis.
- **Writers**: ExcelJS, pdf-lib, Node streams.
- **Storage**: `/exports/{site}/{YYYY}/{MM}/{jobId}.{ext}` (signed URL TTL 24h).
- **Notifications**: SSE updates + header bell tracker.

### Security & Audit

- **Auth**: Clerk roles enforced.
- **Audit Table**: `export_audit` (user, site, filters, hash).
- **Checksum**: SHA‑256 per file.

### Limits

- Max range: Operators 30 d, Moderators 90 d, Admin 365 d.
- Row cap: 1,000,000 per file (split auto).
- Rate limit: 5 active jobs/user.

### Recurring Exports (Admin)

- Cron-based scheduler, emailed signed links, audit of past runs.

---

## Flat UI System

- **Functionality**: Clean elevation‑1 design, spacing‑driven hierarchy, sharp contrast.
- **Purpose**: Data clarity and speed.
- **Trigger**: App init or theme switch.
- **Progression**: Render → mount header/sidebar → paint → hover elevation → seamless theme.
- **Success Criteria**: WCAG 2.1 AA, 8 px grid, ≤2 s load, 60 FPS.

---

## Interaction System

- **Loading**: Shimmer placeholders.
- **No Data**: Empty-state messaging.
- **Responsive**: 4‑col → 1‑col grid.
- **Overflow**: Aspect‑ratio fix.
- **Large Numbers**: Compact (2.4M, 1.2B).
- **Keyboard Focus**: Visible glow.

### Animation Hierarchy

1. KPI counters (1.2 s)
2. Card stagger (200–300 ms)
3. Hover scale (200 ms)
4. Sparkline ambient (3–8 s)

---

## Design Direction

- **Style**: Flat + Subtle Elevation; minimal shadows.
- **Color**: Deep Navy base, Emerald–Cyan accents.
- **Typography**: Inter (tabular nums).
- **Hierarchy**: H1–H3, body, labels, chart labels per 8 px baseline grid.

---

## Accessibility & Performance

- Contrast ≥ 4.5:1 for text & charts.
- Logical tab order.
- Reduced motion mode.
- Lighthouse Accessibility ≥95.
- Load ≤2 s, 60 FPS, ≤100 KB/route.

---

## Technology Stack

| Layer | Technology | Purpose |
|--------|-------------|----------|
| **Frontend** | Next.js 15, React 19, Tailwind CSS, Shadcn/UI, Recharts | UI & visualization |
| **Backend** | Next.js API Routes, Server Actions, Prisma ORM | Data & logic |
| **Database** | PostgreSQL 16 | Structured data |
| **Auth** | Clerk | Role-based access |
| **Validation** | Zod + React Hook Form | Input validation |
| **Runtime** | Bun + Nx | Build orchestration |
| **Exports** | ExcelJS, pdf-lib, CSV/Power BI | Report generation |
| **Testing** | Jest + Playwright | Test coverage |
| **Deployment** | Vercel | Hosting & CI/CD |

---

### Final Result

A unified, GZANSP‑compliant DeskOps Interface System ensuring complete traceability, type safety, and visual integrity across UI, charting, export, and operational modules.
