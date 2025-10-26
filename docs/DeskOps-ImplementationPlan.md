# DeskOps Implementation Plan - Remaining Phases

## Overview

This comprehensive implementation plan covers the 6 remaining phases of the DeskOps project. Each phase is broken down into actionable tasks with clear ownership, validation criteria, and documentation references following GZANSP × AOC principles.

---

## Phase 8: Build Equipment and Manpower Tracking Pages

### Task 8.1: Create Equipment Tracking Page

**Description:** Implement the equipment tracking page with data table, form dialog, and utilization visualizations.

**Task Owner:** GitHub Copilot / Claude Code

**Instructions:** Upon completion of this task, update the Validation Checklist and the CHANGELOG.md file as per the instructions provided.

#### Implementation Steps

- Create `apps/web/src/app/dashboard/equipment/page.tsx`
- Implement equipment log data table with columns: Date, Equipment, Hours, Count, Shift, Status
- Add sorting, filtering by equipment type, date range, and status
- Create EquipmentLogForm component in `apps/web/src/components/forms/equipment-form.tsx`
- Implement form fields: Date picker, Equipment selector (from constants), Hours input (0-24), Count input, Shift selector, Status selector, Notes textarea
- Add Zod validation using EquipmentLogSchema from @deskops/database
- Integrate with `/api/equipment` POST endpoint via Server Action
- Create equipment utilization chart component showing operational vs idle hours
- Add success/error toast notifications using Sonner
- Implement loading states and error boundaries

#### Validation Checklist

- [ ] Equipment page renders without errors
- [ ] Data table displays equipment logs correctly
- [ ] Sorting and filtering work as expected
- [ ] Form dialog opens and closes properly
- [ ] Form validation prevents invalid submissions
- [ ] Equipment log creation succeeds with valid data
- [ ] Utilization chart displays accurate data
- [ ] Toast notifications appear on success/error
- [ ] Loading states display during async operations
- [ ] NO any types used anywhere in the code

#### Documentation Links

- DeskOps Frontend Guide - Lines 630-970 (Chart Components)
- DeskOps Interface Overview - Lines 33-42 (Equipment Performance)
- DeskOps Database Schema - Lines 180-200 (EquipmentLog Model)

#### Targeted Files

- CREATE: `apps/web/src/app/dashboard/equipment/page.tsx`
- CREATE: `apps/web/src/components/forms/equipment-form.tsx`
- CREATE: `apps/web/src/components/charts/equipment-utilization-chart.tsx`
- MODIFY: `apps/web/src/app/actions/equipment.ts` (if not exists, create)

#### CHANGELOG Update Instructions

```markdown
## 2025-01-XX - Equipment Tracking Page - Completed by [Task Owner]

### Added
- Equipment tracking page with data table and filtering
- Equipment log form with validation
- Equipment utilization visualization chart
- Integration with equipment API endpoints
- Toast notifications for user feedback
```

### Task 8.2: Create Manpower Attendance Page

**Description:** Implement the manpower attendance page with headcount tracking, shift management, and attendance visualizations.

**Task Owner:** GitHub Copilot / Claude Code

**Instructions:** Upon completion of this task, update the Validation Checklist and the CHANGELOG.md file as per the instructions provided.

#### Implementation Steps

- Create `apps/web/src/app/dashboard/manpower/page.tsx`
- Implement manpower log data table with columns: Date, Role, Headcount, Hours, Shift
- Add sorting, filtering by role, date range, and shift
- Create ManpowerLogForm component in `apps/web/src/components/forms/manpower-form.tsx`
- Implement form fields: Date picker, Role selector (from constants), Headcount input, Hours input, Shift selector, Notes textarea
- Add Zod validation using ManpowerLogSchema from @deskops/database
- Integrate with `/api/manpower` POST endpoint via Server Action
- Create manpower attendance chart component showing headcount by role and shift
- Add success/error toast notifications using Sonner
- Implement loading states and error boundaries

#### Validation Checklist

- [ ] Manpower page renders without errors
- [ ] Data table displays manpower logs correctly
- [ ] Sorting and filtering work as expected
- [ ] Form dialog opens and closes properly
- [ ] Form validation prevents invalid submissions
- [ ] Manpower log creation succeeds with valid data
- [ ] Attendance chart displays accurate data
- [ ] Toast notifications appear on success/error
- [ ] Loading states display during async operations
- [ ] NO any types used anywhere in the code

#### Documentation Links

- DeskOps Frontend Guide - Lines 630-970 (Chart Components)
- DeskOps Interface Overview - Lines 37-42 (Manpower Attendance)
- DeskOps Database Schema - Lines 202-221 (ManpowerLog Model)

#### Targeted Files

- CREATE: `apps/web/src/app/dashboard/manpower/page.tsx`
- CREATE: `apps/web/src/components/forms/manpower-form.tsx`
- CREATE: `apps/web/src/components/charts/manpower-attendance-chart.tsx`
- MODIFY: `apps/web/src/app/actions/manpower.ts` (if not exists, create)

#### CHANGELOG Update Instructions

```markdown
## 2025-01-XX - Manpower Attendance Page - Completed by [Task Owner]

### Added
- Manpower attendance page with data table and filtering
- Manpower log form with validation
- Attendance visualization chart by role and shift
- Integration with manpower API endpoints
- Toast notifications for user feedback
```

---

## Phase 9: Build Inventory and Dashboard Pages with Charts

### Task 9.1: Create Dashboard KPI Metric Cards

**Description:** Implement the main dashboard page with 4 animated KPI metric cards showing key business metrics.

**Task Owner:** GitHub Copilot / Claude Code

**Instructions:** Upon completion of this task, update the Validation Checklist and the CHANGELOG.md file as per the instructions provided.

#### Implementation Steps

- Create `apps/web/src/app/dashboard/page.tsx`
- Implement 4 KPI metric card components in `apps/web/src/components/dashboard/kpi-card.tsx`
- Add animated counter using react-spring or CSS animations
- Implement trend indicators (up/down arrows with percentage change)
- Add sparkline mini-charts using Recharts LineChart
- Fetch data from `/api/dashboard/metrics` endpoint
- Display metrics: Total Production Today, Received Materials Today, Total Dispatched Today, Current Inventory Status
- Implement stagger cascade animation (50ms delay between cards)
- Add hover effects revealing additional details
- Ensure responsive layout (4-col → 2-col → 1-col)

#### Validation Checklist

- [ ] Dashboard page renders without errors
- [ ] All 4 KPI cards display correctly
- [ ] Counter animations work smoothly
- [ ] Trend indicators show correct percentage changes
- [ ] Sparklines render with accurate data
- [ ] Stagger animation creates visual hierarchy
- [ ] Hover effects reveal additional context
- [ ] Responsive layout adapts to screen sizes
- [ ] Loading states display during data fetch
- [ ] NO any types used anywhere in the code

#### Documentation Links

- DeskOps Frontend Guide - Lines 630-970 (Dashboard Components)
- DeskOps Interface Overview - Lines 67-80 (KPI Metric Cards)
- DeskOps Backend Guide - Lines 572-702 (Dashboard Metrics Route)

#### Targeted Files

- CREATE: `apps/web/src/app/dashboard/page.tsx`
- CREATE: `apps/web/src/components/dashboard/kpi-card.tsx`
- CREATE: `apps/web/src/components/dashboard/sparkline.tsx`

#### CHANGELOG Update Instructions

```markdown
## 2025-01-XX - Dashboard KPI Metrics - Completed by [Task Owner]

### Added
- Main dashboard page with 4 KPI metric cards
- Animated counter components with trend indicators
- Sparkline mini-charts for visual context
- Stagger cascade animation for card mounting
- Responsive layout for all screen sizes
```

### Task 9.2: Implement Dashboard Chart Components

**Description:** Create 5 interactive chart components for the dashboard displaying production, inventory, and operational metrics.

**Task Owner:** GitHub Copilot / Claude Code

**Instructions:** Upon completion of this task, update the Validation Checklist and the CHANGELOG.md file as per the instructions provided.

#### Implementation Steps

- Create `apps/web/src/components/charts/production-vs-target-chart.tsx` (ComposedChart with Bars + Line)
- Create `apps/web/src/components/charts/received-vs-dispatched-chart.tsx` (ComposedChart with grouped Bars + Line for net)
- Create `apps/web/src/components/charts/inventory-chart.tsx` (AreaChart with threshold bands and brush)
- Create `apps/web/src/components/charts/material-levels-chart.tsx` (Horizontal BarChart sorted by Top N)
- Create `apps/web/src/components/charts/equipment-utilization-chart.tsx` (100% stacked BarChart)
- Implement shared chart defaults: ResponsiveContainer, CartesianGrid, XAxis, YAxis, Legend, Tooltip, Brush
- Add custom tooltips with formatted values and unit suffixes
- Implement legend toggling for series visibility
- Add loading skeleton states
- Ensure charts are responsive and accessible

#### Validation Checklist

- [ ] All 5 chart components render without errors
- [ ] Charts display accurate data from API
- [ ] Tooltips show formatted values with units
- [ ] Legend toggles work correctly
- [ ] Brush component enables zoom functionality
- [ ] Charts resize responsively
- [ ] Loading skeletons display during data fetch
- [ ] Charts meet WCAG 2.1 AA contrast requirements
- [ ] Keyboard navigation works for tooltips
- [ ] NO any types used anywhere in the code

#### Documentation Links

- DeskOps Frontend Guide - Lines 630-970 (Chart Components)
- DeskOps Interface Overview - Lines 85-120 (Interactive Data Charts)

#### Targeted Files

- CREATE: `apps/web/src/components/charts/production-vs-target-chart.tsx`
- CREATE: `apps/web/src/components/charts/received-vs-dispatched-chart.tsx`
- CREATE: `apps/web/src/components/charts/inventory-chart.tsx`
- CREATE: `apps/web/src/components/charts/material-levels-chart.tsx`
- CREATE: `apps/web/src/components/charts/equipment-utilization-chart.tsx`
- CREATE: `apps/web/src/components/charts/chart-skeleton.tsx`

#### CHANGELOG Update Instructions

```markdown
## 2025-01-XX - Dashboard Chart Components - Completed by [Task Owner]

### Added
- Production vs Target composed chart
- Received vs Dispatched composed chart with net calculation
- Inventory area chart with threshold bands
- Material levels horizontal bar chart
- Equipment utilization stacked bar chart
- Custom tooltips with formatted values
- Loading skeleton states for all charts
```

### Task 9.3: Create Inventory Snapshot Page

**Description:** Implement the inventory snapshot page displaying material stock levels and movements.

**Task Owner:** GitHub Copilot / Claude Code

**Instructions:** Upon completion of this task, update the Validation Checklist and the CHANGELOG.md file as per the instructions provided.

#### Implementation Steps

- Create `apps/web/src/app/dashboard/inventory/page.tsx`
- Implement inventory snapshot data table with columns: Date, Material, Opening, Produced, Received, Dispatched, Adjustment, Closing
- Add sorting, filtering by material category and date range
- Implement calculated closing balance formula: Opening + Produced + Received - Dispatched + Adjustment
- Add color coding for low stock levels (threshold-based)
- Create inventory movement chart showing trends over time
- Add export functionality for inventory reports
- Implement pagination for large datasets
- Add summary row showing totals by material category
- Ensure tabular number formatting for precise alignment

#### Validation Checklist

- [ ] Inventory page renders without errors
- [ ] Data table displays inventory snapshots correctly
- [ ] Sorting and filtering work as expected
- [ ] Closing balance calculations are accurate
- [ ] Color coding highlights low stock levels
- [ ] Inventory movement chart displays trends
- [ ] Export functionality generates correct files
- [ ] Pagination handles large datasets efficiently
- [ ] Summary row shows accurate totals
- [ ] NO any types used anywhere in the code

#### Documentation Links

- DeskOps Frontend Guide - Lines 1264-1465 (Data Table Component)
- DeskOps Interface Overview - Lines 11-16 (Inventory Management)
- DeskOps Database Schema - Lines 223-245 (InventorySnapshot Model)

#### Targeted Files

- CREATE: `apps/web/src/app/dashboard/inventory/page.tsx`
- CREATE: `apps/web/src/components/inventory/inventory-table.tsx`
- CREATE: `apps/web/src/components/inventory/inventory-movement-chart.tsx`

#### CHANGELOG Update Instructions

```markdown
## 2025-01-XX - Inventory Snapshot Page - Completed by [Task Owner]

### Added
- Inventory snapshot page with comprehensive data table
- Calculated closing balance with formula validation
- Color-coded low stock level indicators
- Inventory movement trend chart
- Export functionality for inventory reports
- Pagination and summary totals
```

---

## Phase 10: Implement React Query and Zustand State Management

### Task 10.1: Setup React Query Client and Provider

**Description:** Configure React Query client with caching strategy and create provider component.

**Task Owner:** GitHub Copilot / Claude Code

**Instructions:** Upon completion of this task, update the Validation Checklist and the CHANGELOG.md file as per the instructions provided.

#### Implementation Steps

- Create `apps/web/src/lib/query-client.ts`
- Configure QueryClient with default options: staleTime (5 min), gcTime (10 min), retry (3), retryDelay (exponential backoff)
- Set refetchOnWindowFocus to false, refetchOnReconnect to true
- Create `apps/web/src/components/providers/query-provider.tsx`
- Wrap QueryClientProvider with React Query Devtools (dev only)
- Update root layout to include QueryProvider
- Add error boundary for query errors
- Implement query key factory pattern for consistent cache keys
- Add query invalidation helpers
- Document caching strategy in code comments

#### Validation Checklist

- [ ] Query client configured with correct defaults
- [ ] Query provider wraps application correctly
- [ ] React Query Devtools available in development
- [ ] Error boundary catches query errors
- [ ] Query key factory ensures consistency
- [ ] Cache invalidation works as expected
- [ ] Stale time and gc time configured appropriately
- [ ] Retry logic handles transient failures
- [ ] Documentation comments are clear
- [ ] NO any types used anywhere in the code

#### Documentation Links

- DeskOps Hooks Guide - Lines 1097-1160 (Query Client Configuration)
- DeskOps Frontend Guide - Lines 298-350 (Root Layout Component)

#### Targeted Files

- CREATE: `apps/web/src/lib/query-client.ts`
- MODIFY: `apps/web/src/components/providers/query-provider.tsx` (if exists, update)
- MODIFY: `apps/web/src/app/layout.tsx`

#### CHANGELOG Update Instructions

```markdown
## 2025-01-XX - React Query Setup - Completed by [Task Owner]

### Added
- React Query client with optimized caching configuration
- Query provider component with devtools integration
- Error boundary for query error handling
- Query key factory for cache consistency
- Query invalidation helper utilities
```

### Task 10.2: Create Data Fetching Hooks

**Description:** Implement custom React Query hooks for all data fetching operations.

**Task Owner:** GitHub Copilot / Claude Code

**Instructions:** Upon completion of this task, update the Validation Checklist and the CHANGELOG.md file as per the instructions provided.

#### Implementation Steps

- Create `apps/web/src/hooks/use-api.ts` (base API hook with auth)
- Create `apps/web/src/hooks/use-production.ts` (useProduction, useCreateProduction)
- Create `apps/web/src/hooks/use-dispatch.ts` (useDispatch, useCreateDispatch)
- Create `apps/web/src/hooks/use-received.ts` (useReceived, useCreateReceived)
- Create `apps/web/src/hooks/use-equipment.ts` (useEquipment, useCreateEquipmentLog)
- Create `apps/web/src/hooks/use-manpower.ts` (useManpower, useCreateManpowerLog)
- Create `apps/web/src/hooks/use-dashboard-metrics.ts` (useDashboardMetrics)
- Implement proper TypeScript interfaces for all responses
- Add error handling and loading states
- Configure appropriate stale times and refetch intervals per hook

#### Validation Checklist

- [ ] All data fetching hooks created
- [ ] Hooks use proper TypeScript types
- [ ] Error handling implemented consistently
- [ ] Loading states managed correctly
- [ ] Query keys follow factory pattern
- [ ] Stale times configured appropriately per data type
- [ ] Mutation hooks invalidate related queries
- [ ] Hooks integrate with Clerk authentication
- [ ] Documentation comments explain usage
- [ ] NO any types used anywhere in the code

#### Documentation Links

- DeskOps Hooks Guide - Lines 22-295 (Data Fetching Hooks)

#### Targeted Files

- CREATE: `apps/web/src/hooks/use-api.ts`
- CREATE: `apps/web/src/hooks/use-production.ts`
- CREATE: `apps/web/src/hooks/use-dispatch.ts`
- CREATE: `apps/web/src/hooks/use-received.ts`
- CREATE: `apps/web/src/hooks/use-equipment.ts`
- CREATE: `apps/web/src/hooks/use-manpower.ts`
- CREATE: `apps/web/src/hooks/use-dashboard-metrics.ts`

#### CHANGELOG Update Instructions

```markdown
## 2025-01-XX - Data Fetching Hooks - Completed by [Task Owner]

### Added
- Base API hook with Clerk authentication
- Production data fetching and mutation hooks
- Dispatch data fetching and mutation hooks
- Received materials data fetching hooks
- Equipment tracking data fetching hooks
- Manpower attendance data fetching hooks
- Dashboard metrics data fetching hook
- Comprehensive error handling and loading states
```

### Task 10.3: Implement Zustand State Stores

**Description:** Create Zustand stores for client-side state management (app settings, export jobs).

**Task Owner:** GitHub Copilot / Claude Code

**Instructions:** Upon completion of this task, update the Validation Checklist and the CHANGELOG.md file as per the instructions provided.

#### Implementation Steps

- Create `apps/web/src/stores/app-store.ts`
- Implement app state: selectedSiteId, dateRange, sidebarCollapsed, theme, dashboardRefreshInterval, exportFormat
- Add persist middleware for localStorage persistence
- Create `apps/web/src/stores/export-store.ts`
- Implement export state: activeJobs, completedJobs, exportDialogOpen, selectedModule
- Add actions for job management: addJob, updateJob, removeJob, clearCompletedJobs
- Implement proper TypeScript interfaces for all state
- Add selectors for derived state
- Configure partialize for selective persistence
- Document store usage patterns

#### Validation Checklist

- [ ] App store created with all required state
- [ ] Export store created with job management
- [ ] Persist middleware configured correctly
- [ ] State updates trigger re-renders appropriately
- [ ] Selectors provide derived state efficiently
- [ ] TypeScript types are strict and accurate
- [ ] localStorage persistence works correctly
- [ ] Store actions are pure and predictable
- [ ] Documentation explains usage patterns
- [ ] NO any types used anywhere in the code

#### Documentation Links

- DeskOps Hooks Guide - Lines 412-583 (Client State Management)

#### Targeted Files

- CREATE: `apps/web/src/stores/app-store.ts`
- CREATE: `apps/web/src/stores/export-store.ts`

#### CHANGELOG Update Instructions

```markdown
## 2025-01-XX - Zustand State Stores - Completed by [Task Owner]

### Added
- App store for global UI state management
- Export store for export job tracking
- LocalStorage persistence with selective partialize
- Type-safe state actions and selectors
- Documentation for store usage patterns
```

---

## Phase 11: Implement Export System with Job Processing

### Task 11.1: Create Export API Routes

**Description:** Implement API routes for export job creation, listing, and file download.

**Task Owner:** GitHub Copilot / Claude Code

**Instructions:** Upon completion of this task, update the Validation Checklist and the CHANGELOG.md file as per the instructions provided.

#### Implementation Steps

- Create `apps/web/src/app/api/exports/route.ts` (POST for job creation, GET for listing)
- Implement Zod schema for export job validation: siteId, module, dateFrom, dateTo, granularity, format
- Add rate limiting: max 5 active jobs per user
- Create `apps/web/src/app/api/exports/[jobId]/route.ts` (GET for job status)
- Create `apps/web/src/app/api/exports/[jobId]/download/route.ts` (GET for file download)
- Create `apps/web/src/app/api/exports/[jobId]/retry/route.ts` (POST for retry failed jobs)
- Implement Clerk authentication for all routes
- Add error handling with structured responses
- Create audit trail in ExportAudit table
- Implement signed URL generation with 24-hour expiry

#### Validation Checklist

- [ ] Export job creation route works correctly
- [ ] Export job listing route returns user's jobs
- [ ] Job status route provides real-time updates
- [ ] Download route serves files securely
- [ ] Retry route reprocesses failed jobs
- [ ] Rate limiting prevents abuse
- [ ] Authentication enforced on all routes
- [ ] Audit trail records all export operations
- [ ] Signed URLs expire after 24 hours
- [ ] NO any types used anywhere in the code

#### Documentation Links

- DeskOps Backend Guide - Lines 704-798 (Export Job Routes)
- DeskOps Interface Overview - Lines 124-186 (Export Capability)

#### Targeted Files

- CREATE: `apps/web/src/app/api/exports/route.ts`
- CREATE: `apps/web/src/app/api/exports/[jobId]/route.ts`
- CREATE: `apps/web/src/app/api/exports/[jobId]/download/route.ts`
- CREATE: `apps/web/src/app/api/exports/[jobId]/retry/route.ts`

#### CHANGELOG Update Instructions

```markdown
## 2025-01-XX - Export API Routes - Completed by [Task Owner]

### Added
- Export job creation and listing API routes
- Job status and download endpoints
- Retry mechanism for failed exports
- Rate limiting (5 active jobs per user)
- Audit trail for all export operations
- Signed URL generation with expiry
```

### Task 11.2: Implement Export Processors

**Description:** Create export processors for Excel, PDF, and CSV file generation.

**Task Owner:** GitHub Copilot / Claude Code

**Instructions:** Upon completion of this task, update the Validation Checklist and the CHANGELOG.md file as per the instructions provided.

#### Implementation Steps

- Create `apps/web/src/lib/exporters/excel.ts` using ExcelJS
- Implement multi-sheet Excel generation with frozen headers, filters, conditional formatting
- Create `apps/web/src/lib/exporters/pdf.ts` using pdf-lib
- Implement A4 PDF generation with headers, footers, optional charts
- Create `apps/web/src/lib/exporters/csv.ts` using Node streams
- Implement RFC 4180 compliant CSV with UTF-8 BOM
- Create `apps/web/src/lib/exporters/powerbi-csv.ts` with kebab_case columns and denormalized joins
- Implement progress tracking callbacks for all exporters
- Add file hash generation (SHA-256) for integrity verification
- Implement cleanup job for expired exports

#### Validation Checklist

- [ ] Excel exporter generates multi-sheet workbooks
- [ ] Excel files include frozen headers and filters
- [ ] PDF exporter generates A4 formatted documents
- [ ] PDF files include headers and footers
- [ ] CSV exporter follows RFC 4180 standard
- [ ] CSV files include UTF-8 BOM
- [ ] Power BI CSV uses kebab_case columns
- [ ] Progress tracking updates job status
- [ ] File hashes generated for integrity
- [ ] NO any types used anywhere in the code

#### Documentation Links

- DeskOps Interface Overview - Lines 156-169 (File Formats & Implementation)
- DeskOps Backend Guide - Lines 929-1044 (Background Job Processing)

#### Targeted Files

- CREATE: `apps/web/src/lib/exporters/excel.ts`
- CREATE: `apps/web/src/lib/exporters/pdf.ts`
- CREATE: `apps/web/src/lib/exporters/csv.ts`
- CREATE: `apps/web/src/lib/exporters/powerbi-csv.ts`
- CREATE: `apps/web/src/lib/exporters/types.ts`

#### CHANGELOG Update Instructions

```markdown
## 2025-01-XX - Export Processors - Completed by [Task Owner]

### Added
- Excel exporter with multi-sheet support
- PDF exporter with A4 formatting
- CSV exporter following RFC 4180 standard
- Power BI CSV exporter with denormalized data
- Progress tracking for all export operations
- File hash generation for integrity verification
```

### Task 11.3: Create Export Dialog and Progress UI

**Description:** Implement export dialog component with format selection and progress tracking UI.

**Task Owner:** GitHub Copilot / Claude Code

**Instructions:** Upon completion of this task, update the Validation Checklist and the CHANGELOG.md file as per the instructions provided.

#### Implementation Steps

- Create `apps/web/src/components/export/export-dialog.tsx`
- Implement form fields: Format selector (Excel/PDF/CSV), Module selector, Date range picker, Granularity selector
- Add Zod validation for export request
- Create `apps/web/src/components/export/export-progress.tsx`
- Implement progress bar with percentage display
- Add SSE connection for real-time progress updates
- Create `apps/web/src/components/export/export-history.tsx`
- Display list of completed exports with download buttons
- Implement retry button for failed exports
- Add export button to header and module toolbars

#### Validation Checklist

- [ ] Export dialog opens and closes correctly
- [ ] Form validation prevents invalid submissions
- [ ] Progress bar updates in real-time
- [ ] SSE connection handles reconnection
- [ ] Export history displays completed jobs
- [ ] Download buttons trigger file downloads
- [ ] Retry button reprocesses failed jobs
- [ ] Export buttons accessible from all modules
- [ ] UI follows design system tokens
- [ ] NO any types used anywhere in the code

#### Documentation Links

- DeskOps Interface Overview - Lines 133-147 (UX Specification & Edge Cases)
- DeskOps Hooks Guide - Lines 692-735 (Export Progress Hook)

#### Targeted Files

- CREATE: `apps/web/src/components/export/export-dialog.tsx`
- CREATE: `apps/web/src/components/export/export-progress.tsx`
- CREATE: `apps/web/src/components/export/export-history.tsx`
- MODIFY: `apps/web/src/components/layout/header.tsx` (add export button)

#### CHANGELOG Update Instructions

```markdown
## 2025-01-XX - Export Dialog and Progress UI - Completed by [Task Owner]

### Added
- Export dialog with format and module selection
- Real-time progress tracking with SSE
- Export history with download and retry functionality
- Export buttons in header and module toolbars
- Form validation for export requests
```

---

## Phase 12: Setup Clerk Authentication and Middleware

### Task 12.1: Configure Clerk Provider and Middleware

**Description:** Integrate Clerk authentication with Next.js middleware for route protection.

**Task Owner:** GitHub Copilot / Claude Code

**Instructions:** Upon completion of this task, update the Validation Checklist and the CHANGELOG.md file as per the instructions provided.

#### Implementation Steps

- Install Clerk SDK: `bun add @clerk/nextjs`
- Add Clerk environment variables to .env.local: NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY, CLERK_SECRET_KEY
- Update root layout to wrap with ClerkProvider (already done, verify)
- Create `apps/web/src/middleware.ts`
- Configure authMiddleware with public routes: ['/'], ignored routes: ['/api/health']
- Implement beforeAuth and afterAuth hooks
- Add role-based access control logic in afterAuth
- Configure matcher to protect all routes except public/ignored
- Add redirect to sign-in for unauthenticated users
- Test authentication flow end-to-end

#### Validation Checklist

- [ ] Clerk SDK installed and configured
- [ ] Environment variables set correctly
- [ ] ClerkProvider wraps application
- [ ] Middleware protects authenticated routes
- [ ] Public routes accessible without auth
- [ ] Unauthenticated users redirected to sign-in
- [ ] Role-based access control enforced
- [ ] Matcher configuration covers all routes
- [ ] Authentication flow works end-to-end
- [ ] NO any types used anywhere in the code

#### Documentation Links

- DeskOps Backend Guide - Lines 1048-1082 (Middleware for Authentication)
- DeskOps Hooks Guide - Lines 914-967 (Authentication Hooks)

#### Targeted Files

- CREATE: `apps/web/src/middleware.ts`
- MODIFY: `.env.local` (add Clerk keys)
- MODIFY: `.env.example` (document Clerk keys)

#### CHANGELOG Update Instructions

```markdown
## 2025-01-XX - Clerk Authentication Middleware - Completed by [Task Owner]

### Added
- Clerk authentication middleware for route protection
- Role-based access control in afterAuth hook
- Public and ignored route configuration
- Redirect logic for unauthenticated users
- Environment variable configuration
```

### Task 12.2: Create Authentication Pages and Custom Hook

**Description:** Implement sign-in/sign-up pages and custom useAuth hook with role checking.

**Task Owner:** GitHub Copilot / Claude Code

**Instructions:** Upon completion of this task, update the Validation Checklist and the CHANGELOG.md file as per the instructions provided.

#### Implementation Steps

- Create `apps/web/src/app/sign-in/[[...sign-in]]/page.tsx`
- Implement Clerk `<SignIn />` component with custom styling
- Create `apps/web/src/app/sign-up/[[...sign-up]]/page.tsx`
- Implement Clerk `<SignUp />` component with custom styling
- Create `apps/web/src/hooks/use-auth.ts`
- Implement custom hook wrapping Clerk's useUser and useAuth
- Add hasRole function checking user metadata for Admin/Moderator roles
- Add signOut function wrapper
- Export typed AuthUser interface
- Update header component to use custom useAuth hook

#### Validation Checklist

- [ ] Sign-in page renders Clerk component
- [ ] Sign-up page renders Clerk component
- [ ] Custom styling matches design system
- [ ] useAuth hook provides user data
- [ ] hasRole function checks roles correctly
- [ ] signOut function works as expected
- [ ] AuthUser interface is type-safe
- [ ] Header component uses custom hook
- [ ] Role metadata stored in Clerk
- [ ] NO any types used anywhere in the code

#### Documentation Links

- DeskOps Backend Guide - Lines 22-57 (Authentication Routes)
- DeskOps Hooks Guide - Lines 914-967 (Enhanced Clerk Hook)
- DeskOps Constants - Lines 79-86 (UserRole Enum)

#### Targeted Files

- CREATE: `apps/web/src/app/sign-in/[[...sign-in]]/page.tsx`
- CREATE: `apps/web/src/app/sign-up/[[...sign-up]]/page.tsx`
- CREATE: `apps/web/src/hooks/use-auth.ts`
- MODIFY: `apps/web/src/components/layout/header.tsx`

#### CHANGELOG Update Instructions

```markdown
## 2025-01-XX - Authentication Pages and Custom Hook - Completed by [Task Owner]

### Added
- Sign-in page with Clerk integration
- Sign-up page with Clerk integration
- Custom useAuth hook with role checking
- hasRole function for role-based access control
- Type-safe AuthUser interface
- Updated header to use custom auth hook
```

---

## Phase 13: Setup Testing Infrastructure - Vitest and Playwright

### Task 13.1: Configure Vitest for Unit and Integration Tests

**Description:** Setup Vitest testing framework with utilities and mocks for Next.js and Clerk.

**Task Owner:** GitHub Copilot / Claude Code

**Instructions:** Upon completion of this task, update the Validation Checklist and the CHANGELOG.md file as per the instructions provided.

#### Implementation Steps

- Create `apps/web/vitest.config.ts`
- Configure Vitest with React plugin, jsdom environment
- Setup path aliases matching tsconfig
- Configure coverage thresholds: 80% statements, branches, functions, lines
- Create `apps/web/src/test/setup.ts`
- Mock Next.js router: useRouter, usePathname, useSearchParams
- Mock Clerk auth: useAuth, useUser, ClerkProvider
- Create test utilities in `apps/web/src/test/utils.tsx`
- Implement renderWithProviders helper wrapping QueryClient, Theme, Clerk
- Add test scripts to `apps/web/package.json`

#### Validation Checklist

- [ ] Vitest configured with correct settings
- [ ] React plugin and jsdom environment work
- [ ] Path aliases resolve correctly
- [ ] Coverage thresholds configured
- [ ] Next.js router mocked successfully
- [ ] Clerk auth mocked successfully
- [ ] Test utilities provide clean setup
- [ ] renderWithProviders wraps all providers
- [ ] Test scripts run without errors
- [ ] NO any types used anywhere in the code

#### Documentation Links

- DeskOps Configuration - Lines 886-985 (Testing Setup)

#### Targeted Files

- CREATE: `apps/web/vitest.config.ts`
- CREATE: `apps/web/src/test/setup.ts`
- CREATE: `apps/web/src/test/utils.tsx`
- CREATE: `apps/web/src/test/mocks/next-router.ts`
- CREATE: `apps/web/src/test/mocks/clerk.ts`
- MODIFY: `apps/web/package.json` (add test scripts)

#### CHANGELOG Update Instructions

```markdown
## 2025-01-XX - Vitest Testing Setup - Completed by [Task Owner]

### Added
- Vitest configuration with React plugin
- Test setup file with global mocks
- Next.js router mocks
- Clerk authentication mocks
- Test utilities with renderWithProviders helper
- Coverage thresholds configuration
```

### Task 13.2: Write Sample Unit and Integration Tests

**Description:** Create sample tests covering key functionality to establish testing patterns.

**Task Owner:** GitHub Copilot / Claude Code

**Instructions:** Upon completion of this task, update the Validation Checklist and the CHANGELOG.md file as per the instructions provided.

#### Implementation Steps

- Create `apps/web/src/components/forms/__tests__/production-form.test.tsx`
- Test form rendering, validation, submission success/error
- Create `apps/web/src/hooks/__tests__/use-production.test.ts`
- Test data fetching, loading states, error handling
- Create `apps/web/src/components/dashboard/__tests__/kpi-card.test.tsx`
- Test metric display, animation, trend indicators
- Create `apps/web/src/lib/exporters/__tests__/excel.test.ts`
- Test Excel generation with sample data
- Create `apps/web/src/stores/__tests__/app-store.test.ts`
- Test state updates, persistence, selectors

#### Validation Checklist

- [ ] Production form tests pass
- [ ] Form validation tests cover edge cases
- [ ] Hook tests verify data fetching
- [ ] KPI card tests check rendering
- [ ] Excel exporter tests verify output
- [ ] Store tests verify state management
- [ ] All tests use proper TypeScript types
- [ ] Tests follow AAA pattern (Arrange, Act, Assert)
- [ ] Coverage meets 80% threshold
- [ ] NO any types used anywhere in the code

#### Documentation Links

- DeskOps Configuration - Lines 886-985 (Testing Setup)

#### Targeted Files

- CREATE: `apps/web/src/components/forms/__tests__/production-form.test.tsx`
- CREATE: `apps/web/src/hooks/__tests__/use-production.test.ts`
- CREATE: `apps/web/src/components/dashboard/__tests__/kpi-card.test.tsx`
- CREATE: `apps/web/src/lib/exporters/__tests__/excel.test.ts`
- CREATE: `apps/web/src/stores/__tests__/app-store.test.ts`

#### CHANGELOG Update Instructions

```markdown
## 2025-01-XX - Unit and Integration Tests - Completed by [Task Owner]

### Added
- Production form component tests
- Data fetching hook tests
- KPI card component tests
- Excel exporter unit tests
- Zustand store tests
- Test coverage exceeding 80% threshold
```

### Task 13.3: Configure Playwright for E2E Tests

**Description:** Setup Playwright E2E testing framework and write critical user flow tests.

**Task Owner:** GitHub Copilot / Claude Code

**Instructions:** Upon completion of this task, update the Validation Checklist and the CHANGELOG.md file as per the instructions provided.

#### Implementation Steps

- Verify `apps/web-e2e/playwright.config.ts` configuration
- Configure test projects for Chromium, Firefox, WebKit
- Setup webServer to start dev server before tests
- Create `apps/web-e2e/src/auth.spec.ts`
- Test authentication flow: sign-in, sign-up, sign-out
- Create `apps/web-e2e/src/production.spec.ts`
- Test production form submission end-to-end
- Create `apps/web-e2e/src/dashboard.spec.ts`
- Test dashboard metrics display and chart interactions
- Create `apps/web-e2e/src/export.spec.ts` testing export job creation and download

#### Validation Checklist

- [ ] Playwright configured for all browsers
- [ ] Web server starts before tests
- [ ] Authentication flow tests pass
- [ ] Production form submission tests pass
- [ ] Dashboard metrics tests pass
- [ ] Export job tests pass
- [ ] Tests run in parallel efficiently
- [ ] Screenshots captured on failure
- [ ] Test reports generated correctly
- [ ] NO any types used anywhere in the code

#### Documentation Links

- DeskOps Configuration - Lines 986-1039 (E2E Testing Config)
- Playwright Config

#### Targeted Files

- VERIFY: `apps/web-e2e/playwright.config.ts`
- CREATE: `apps/web-e2e/src/auth.spec.ts`
- CREATE: `apps/web-e2e/src/production.spec.ts`
- CREATE: `apps/web-e2e/src/dashboard.spec.ts`
- CREATE: `apps/web-e2e/src/export.spec.ts`

#### CHANGELOG Update Instructions

```markdown
## 2025-01-XX - Playwright E2E Tests - Completed by [Task Owner]

### Added
- Playwright E2E testing configuration
- Authentication flow E2E tests
- Production form submission E2E tests
- Dashboard metrics display E2E tests
- Export job creation and download E2E tests
- Multi-browser test coverage (Chromium, Firefox, WebKit)
```

---

## Summary

This comprehensive implementation plan covers all 6 remaining phases with 18 detailed tasks. Each task includes:

✅ **Clear Description** - Brief overview of what needs to be built
✅ **Task Owner** - Designated responsible party
✅ **Step-by-Step Instructions** - Actionable implementation steps
✅ **Validation Checklist** - 10 items to verify completion
✅ **Documentation Links** - References to relevant docs with line numbers
✅ **Targeted Files** - Specific files to create/modify
✅ **CHANGELOG Instructions** - Template for documenting changes

### Key Principles Enforced

- **GZANSP Compliance**: Zero assumptions, source-backed decisions
- **Type Safety**: NO any types anywhere in the codebase
- **Single Source of Truth**: All constants imported from centralized location
- **Method-First**: Single method per operation using adapter pattern
- **No Versioning**: `/api/[module]/[resource]` pattern only

### Estimated Timeline

- **Phase 8**: 2-3 days (Equipment & Manpower pages)
- **Phase 9**: 3-4 days (Dashboard & Inventory with charts)
- **Phase 10**: 2-3 days (State management setup)
- **Phase 11**: 3-4 days (Export system implementation)
- **Phase 12**: 1-2 days (Authentication setup)
- **Phase 13**: 2-3 days (Testing infrastructure)

**Total**: 13-19 days for complete implementation

All tasks follow the established patterns from completed phases and maintain consistency with the DeskOps architecture.
