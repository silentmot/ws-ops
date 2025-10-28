# DeskOps Remaining Implementation Tasks

<!--markdownlint-disable MD024 MD025 MD036-->

**Document Version:** 1.0
**Date:** October 26, 2025
**Status:** Pending Implementation
**Phases Covered:** 9-13 (Remaining Tasks)

---

## Overview

This document consolidates all remaining implementation tasks for the DeskOps Construction & Demolition Recycling Management System. These tasks follow the GZANSP × AOC protocol and build upon the completed foundation (Equipment & Manpower tracking, Dashboard KPI cards, and Interactive Charts).

### Completed Foundation

- ✅ Equipment Tracking Page with Form and Chart
- ✅ Manpower Attendance Page with Form and Chart
- ✅ Dashboard KPI Metric Cards with Animated Counters
- ✅ Dashboard Interactive Chart Components (5 charts)

### Remaining Work

**13 tasks across 5 phases**

---

## Phase 9: Inventory Management (1 Task)

### Task 9.3: Build Inventory Snapshot Page with Data Table and Movement Chart

**Ticket ID:** `6bc8cdf1-11b3-4ac9-920b-e358ba41220e`
**Size:** Story
**Priority:** High

#### Objective

Create a comprehensive inventory snapshot page displaying material stock levels with calculated closing balances and trend visualization.

#### Implementation Details

**Files to Create:**

- `apps/web/src/app/dashboard/inventory/page.tsx` - Main inventory page
- `apps/web/src/components/inventory/inventory-table.tsx` - Data table component
- `apps/web/src/components/inventory/inventory-movement-chart.tsx` - Trend chart

**Data Model:**

```typescript
interface InventorySnapshot {
  id: string;
  date: Date;
  materialId: string;
  material: {
    code: string;
    name: string;
    category: string;
    uom: string;
  };
  openingTon: number;
  producedTon: number;
  receivedTon: number;
  dispatchedTon: number;
  adjustmentTon: number;
  closingTon: number; // Calculated: Opening + Produced + Received - Dispatched + Adjustment
}
```

#### Key Features

**Data Table Columns:**

- Date (sortable)
- Material (code + name)
- Opening Balance
- Produced
- Received
- Dispatched
- Adjustment
- Closing Balance (calculated, color-coded)

**Color Coding:**

- 🔴 Red: Stock below threshold (< 100 TON)
- 🟡 Yellow: Stock warning (100-500 TON)
- 🟢 Green: Stock healthy (> 500 TON)

**Filtering & Sorting:**

- Filter by material category (AGGREGATES, PROCESSED_BASE, FINE, SPECIALTY, RAW_FEED)
- Filter by date range
- Sort by any column
- Pagination (50 rows per page)

**Summary Row:**

- Totals by material category
- Grand total across all materials

**Movement Chart:**

- Line chart showing closing balance trends over time
- Multiple series for different materials
- Brush control for date range selection
- Tooltip with detailed breakdown

#### Validation Checklist

- [ ] Table displays all columns with correct data types
- [ ] Closing balance calculation is accurate
- [ ] Color coding applies correctly based on thresholds
- [ ] Filters work independently and in combination
- [ ] Summary row calculates totals correctly
- [ ] Chart renders trends accurately
- [ ] Tabular number formatting aligns precisely
- [ ] Responsive layout works on mobile/tablet/desktop

#### Documentation References

- `DeskOps-ImplementationPlan.md` (lines 317-497)
- `DeskOps-Interface-Overview.md` (lines 11-28)
- `DeskOps-DB-Prisma.md` (lines 193-245)

---

---

## Phase 10: State Management (3 Tasks)

### Task 10.1: Setup React Query Client with Caching Strategy and Provider

**Ticket ID:** `2e994d46-f4a5-49a5-8402-55a8877febf2`
**Size:** Issue
**Priority:** Critical (Dependency for other tasks)

#### Objective

Configure React Query infrastructure with optimized caching strategy and development tools.

#### Implementation Details

**Files to Create/Update:**

- `apps/web/src/lib/query-client.ts` - QueryClient configuration
- `apps/web/src/lib/query-keys.ts` - Query key factory
- `apps/web/src/components/providers/query-provider.tsx` - Update with devtools
- `apps/web/src/app/layout.tsx` - Verify QueryProvider integration

**QueryClient Configuration:**

```typescript
// apps/web/src/lib/query-client.ts
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
      retry: 3,
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
    },
    mutations: {
      retry: 1,
      retryDelay: 1000,
    },
  },
});
```

**Query Key Factory Pattern:**

```typescript
// apps/web/src/lib/query-keys.ts
export const queryKeys = {
  production: {
    all: ['production'] as const,
    lists: () => [...queryKeys.production.all, 'list'] as const,
    list: (filters: { siteId: string; dateFrom?: string; dateTo?: string }) =>
      [...queryKeys.production.lists(), filters] as const,
    details: () => [...queryKeys.production.all, 'detail'] as const,
    detail: (id: string) => [...queryKeys.production.details(), id] as const,
  },
  dashboard: {
    all: ['dashboard'] as const,
    metrics: (siteId: string) =>
      [...queryKeys.dashboard.all, 'metrics', siteId] as const,
  },
  // ... similar patterns for dispatch, received, equipment, manpower, inventory
};
```

#### Validation Checklist

- [ ] QueryClient configured with correct default options
- [ ] Query key factory provides consistent cache keys
- [ ] React Query Devtools loads in development only
- [ ] Error boundary catches query errors
- [ ] QueryProvider wraps app in root layout

#### Documentation References

- `DeskOps-Hooks.md` (lines 1098-1160)
- `DeskOps-ImplementationPlan.md` (lines 498-682)

---

---

### Task 10.2: Create Custom React Query Hooks for All Data Modules

**Ticket ID:** `e6c077f2-53fc-4ba0-8531-2b092fb89874`
**Size:** Story
**Priority:** High

#### Objective

Implement type-safe data fetching hooks for all modules with proper error handling and cache invalidation.

#### Implementation Details

**Files to Create:**

- `apps/web/src/hooks/use-api.ts` - Base API hook with Clerk auth
- `apps/web/src/hooks/use-production.ts` - Production data hooks
- `apps/web/src/hooks/use-dispatch.ts` - Dispatch data hooks
- `apps/web/src/hooks/use-received.ts` - Received materials hooks
- `apps/web/src/hooks/use-equipment.ts` - Equipment logs hooks
- `apps/web/src/hooks/use-manpower.ts` - Manpower logs hooks
- `apps/web/src/hooks/use-dashboard-metrics.ts` - Dashboard metrics hook

**Base API Hook Pattern:**

```typescript
// apps/web/src/hooks/use-api.ts
import { useAuth } from '@clerk/nextjs';

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  details?: unknown;
}

export function useApi() {
  const { getToken } = useAuth();

  const makeRequest = async <T>(
    url: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> => {
    const token = await getToken();
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        Authorization: token ? `Bearer ${token}` : '',
        ...options.headers,
      },
    });

    const responseData = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: responseData.error || 'Request failed',
        details: responseData.details,
      };
    }

    return { success: true, data: responseData };
  };

  return {
    get: <T>(url: string) => makeRequest<T>(url),
    post: <T>(url: string, data: unknown) =>
      makeRequest<T>(url, { method: 'POST', body: JSON.stringify(data) }),
    put: <T>(url: string, data: unknown) =>
      makeRequest<T>(url, { method: 'PUT', body: JSON.stringify(data) }),
    delete: <T>(url: string) => makeRequest<T>(url, { method: 'DELETE' }),
  };
}
```

**Module Hook Pattern (Example: Production):**

```typescript
// apps/web/src/hooks/use-production.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useApi } from './use-api';
import { queryKeys } from '@/lib/query-keys';
import type { ProductionInput } from '@deskops/database';

interface Production {
  id: string;
  siteId: string;
  date: string;
  shift?: string;
  materialId: string;
  qtyTon: number;
  operation: string;
  notes?: string;
  material: { code: string; name: string; uom: string };
  site: { code: string; name: string };
}

export function useProduction(params: {
  siteId: string;
  dateFrom?: string;
  dateTo?: string;
  enabled?: boolean;
}) {
  const api = useApi();

  return useQuery({
    queryKey: queryKeys.production.list(params),
    queryFn: async (): Promise<Production[]> => {
      const searchParams = new URLSearchParams({ siteId: params.siteId });
      if (params.dateFrom) searchParams.append('dateFrom', params.dateFrom);
      if (params.dateTo) searchParams.append('dateTo', params.dateTo);

      const response = await api.get<{ productions: Production[] }>(
        `/api/production?${searchParams}`
      );

      if (!response.success) {
        throw new Error(response.error || 'Failed to fetch production data');
      }

      return response.data?.productions || [];
    },
    enabled: params.enabled !== false && !!params.siteId,
    staleTime: 5 * 60 * 1000,
  });
}

export function useCreateProduction() {
  const queryClient = useQueryClient();
  const api = useApi();

  return useMutation({
    mutationFn: async (data: ProductionInput) => {
      const response = await api.post('/api/production', data);
      if (!response.success) {
        throw new Error(response.error || 'Failed to create production record');
      }
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.production.all });
      queryClient.invalidateQueries({ queryKey: queryKeys.dashboard.all });
    },
  });
}
```

**Hooks to Implement:**

- `use-production.ts`: useProduction, useCreateProduction, useUpdateProduction, useDeleteProduction
- `use-dispatch.ts`: useDispatch, useCreateDispatch, useUpdateDispatch, useDeleteDispatch
- `use-received.ts`: useReceived, useCreateReceived, useUpdateReceived, useDeleteReceived
- `use-equipment.ts`: useEquipment, useCreateEquipmentLog, useUpdateEquipmentLog, useDeleteEquipmentLog
- `use-manpower.ts`: useManpower, useCreateManpowerLog, useUpdateManpowerLog, useDeleteManpowerLog
- `use-dashboard-metrics.ts`: useDashboardMetrics (with 5-minute refetch interval)

#### Validation Checklist

- [ ] All hooks use proper TypeScript interfaces (NO any types)
- [ ] Error handling implemented for all requests
- [ ] Loading states exposed via isLoading
- [ ] Mutation hooks invalidate related queries
- [ ] Query keys use factory pattern
- [ ] Stale times configured appropriately per module
- [ ] Clerk authentication integrated in base API hook

#### Documentation References

- `DeskOps-Hooks.md` (lines 22-295)
- `DeskOps-ImplementationPlan.md` (lines 498-682)

---

---

### Task 10.3: Implement Zustand State Stores for App and Export Management

**Ticket ID:** `08a11a83-4faa-4360-96bf-a90f3f856f38`
**Size:** Story
**Priority:** High

#### Objective

Create client-side state management stores with localStorage persistence for app preferences and export job tracking.

#### Implementation Details

**Files to Create:**

- `apps/web/src/stores/app-store.ts` - App-wide state (site, date, theme, sidebar)
- `apps/web/src/stores/export-store.ts` - Export job state

**Files to Update:**

- `apps/web/src/components/layout/header.tsx` - Use app store
- `apps/web/src/components/layout/sidebar.tsx` - Use app store

**App Store Implementation:**

```typescript
// apps/web/src/stores/app-store.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { DEFAULT_SITE_ID } from '@deskops/constants';

interface DateRange {
  from: Date;
  to: Date;
}

interface AppState {
  // Site selection
  selectedSiteId: string;
  setSelectedSiteId: (siteId: string) => void;

  // Date range
  dateRange: DateRange;
  setDateRange: (range: DateRange) => void;

  // Sidebar
  sidebarCollapsed: boolean;
  setSidebarCollapsed: (collapsed: boolean) => void;

  // Theme
  theme: 'light' | 'dark' | 'system';
  setTheme: (theme: 'light' | 'dark' | 'system') => void;

  // Dashboard settings
  dashboardRefreshInterval: number;
  setDashboardRefreshInterval: (interval: number) => void;

  // Export settings
  exportFormat: 'xlsx' | 'csv' | 'pdf';
  setExportFormat: (format: 'xlsx' | 'csv' | 'pdf') => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      selectedSiteId: DEFAULT_SITE_ID,
      dateRange: {
        from: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
        to: new Date(),
      },
      sidebarCollapsed: false,
      theme: 'system',
      dashboardRefreshInterval: 5 * 60 * 1000,
      exportFormat: 'xlsx',

      setSelectedSiteId: (siteId) => set({ selectedSiteId: siteId }),
      setDateRange: (range) => set({ dateRange: range }),
      setSidebarCollapsed: (collapsed) => set({ sidebarCollapsed: collapsed }),
      setTheme: (theme) => set({ theme }),
      setDashboardRefreshInterval: (interval) =>
        set({ dashboardRefreshInterval: interval }),
      setExportFormat: (format) => set({ exportFormat: format }),
    }),
    {
      name: 'deskops-app-state',
      partialize: (state) => ({
        selectedSiteId: state.selectedSiteId,
        sidebarCollapsed: state.sidebarCollapsed,
        theme: state.theme,
        dashboardRefreshInterval: state.dashboardRefreshInterval,
        exportFormat: state.exportFormat,
      }),
    }
  )
);
```

**Export Store Implementation:**

```typescript
// apps/web/src/stores/export-store.ts
import { create } from 'zustand';

interface ExportJob {
  id: string;
  module: string;
  format: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  progress: number;
  downloadUrl?: string;
  errorMessage?: string;
  createdAt: string;
}

interface ExportState {
  activeJobs: ExportJob[];
  completedJobs: ExportJob[];
  exportDialogOpen: boolean;
  selectedModule: string;

  addJob: (job: ExportJob) => void;
  updateJob: (id: string, updates: Partial<ExportJob>) => void;
  removeJob: (id: string) => void;
  clearCompletedJobs: () => void;
  setExportDialogOpen: (open: boolean) => void;
  setSelectedModule: (module: string) => void;
}

export const useExportStore = create<ExportState>((set) => ({
  activeJobs: [],
  completedJobs: [],
  exportDialogOpen: false,
  selectedModule: 'production',

  addJob: (job) => set((state) => ({ activeJobs: [...state.activeJobs, job] })),

  updateJob: (id, updates) =>
    set((state) => {
      const job = state.activeJobs.find((j) => j.id === id);
      if (!job) return state;

      const updatedJob = { ...job, ...updates };

      if (updates.status === 'completed' || updates.status === 'failed') {
        return {
          activeJobs: state.activeJobs.filter((j) => j.id !== id),
          completedJobs: [...state.completedJobs, updatedJob],
        };
      }

      return {
        activeJobs: state.activeJobs.map((j) => (j.id === id ? updatedJob : j)),
      };
    }),

  removeJob: (id) =>
    set((state) => ({
      activeJobs: state.activeJobs.filter((j) => j.id !== id),
      completedJobs: state.completedJobs.filter((j) => j.id !== id),
    })),

  clearCompletedJobs: () => set({ completedJobs: [] }),
  setExportDialogOpen: (open) => set({ exportDialogOpen: open }),
  setSelectedModule: (module) => set({ selectedModule: module }),
}));
```

**Component Updates:**

Update Header component to use useAppStore:

```typescript
// Replace useState with useAppStore
const {
  selectedSiteId,
  setSelectedSiteId,
  dateRange,
  setDateRange,
  theme,
  setTheme,
} = useAppStore();
```

Update Sidebar component to use useAppStore:

```typescript
// Replace useState with useAppStore
const { sidebarCollapsed, setSidebarCollapsed } = useAppStore();
```

#### Validation Checklist

- [ ] App store persists to localStorage correctly
- [ ] Export store manages job lifecycle (pending → processing → completed/failed)
- [ ] Header component uses app store for site, date, theme
- [ ] Sidebar component uses app store for collapse state
- [ ] All state updates trigger re-renders
- [ ] TypeScript interfaces are properly typed (NO any)
- [ ] Persist middleware only saves selected fields

#### Documentation References

- `DeskOps-Hooks.md` (lines 413-583)
- `DeskOps-ImplementationPlan.md` (lines 498-682)

---

---

## Phase 11: Export System (3 Tasks)

### Task 11.1: Create Export API Routes with Job Management and Rate Limiting

**Ticket ID:** `b689605b-0b44-4ed3-8ebb-c7076f0bf52f`
**Size:** Story
**Priority:** High

#### Objective

Implement backend API routes for export job creation, status tracking, download, and retry with authentication and rate limiting.

#### Implementation Details

**Files to Create:**

- `apps/web/src/app/api/exports/route.ts` - POST (create), GET (list)
- `apps/web/src/app/api/exports/[jobId]/route.ts` - GET (status)
- `apps/web/src/app/api/exports/[jobId]/download/route.ts` - GET (download)
- `apps/web/src/app/api/exports/[jobId]/retry/route.ts` - POST (retry)

**Zod Validation Schema:**

```typescript
import { z } from 'zod';

const ExportJobSchema = z.object({
  siteId: z.string().cuid(),
  module: z.enum([
    'production',
    'dispatch',
    'received',
    'equipment',
    'manpower',
    'inventory',
  ]),
  dateFrom: z.string().datetime(),
  dateTo: z.string().datetime(),
  granularity: z.enum(['daily', 'weekly', 'monthly']).default('daily'),
  format: z.enum(['xlsx', 'csv', 'pdf']),
});
```

**Main Export Route:**

```typescript
// apps/web/src/app/api/exports/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { prisma } from '@/lib/db';
import { handleApiError } from '@/lib/error-handler';

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const validatedData = ExportJobSchema.parse(body);

    // Rate limiting: max 5 active jobs per user
    const activeJobs = await prisma.exportJob.count({
      where: {
        userId,
        status: { in: ['pending', 'processing'] },
      },
    });

    if (activeJobs >= 5) {
      return NextResponse.json(
        { message: 'Rate limit exceeded: maximum 5 active jobs per user' },
        { status: 429 }
      );
    }

    const exportJob = await prisma.exportJob.create({
      data: {
        ...validatedData,
        userId,
        status: 'pending',
        progress: 0,
        dateFrom: new Date(validatedData.dateFrom),
        dateTo: new Date(validatedData.dateTo),
      },
    });

    // TODO: Trigger background job processing
    // await scheduleExportJob(exportJob.id);

    return NextResponse.json({ exportJob }, { status: 201 });
  } catch (error) {
    return handleApiError(error);
  }
}

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const jobs = await prisma.exportJob.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: 20,
    });

    return NextResponse.json({ jobs });
  } catch (error) {
    return handleApiError(error);
  }
}
```

**Job Status Route:**

```typescript
// apps/web/src/app/api/exports/[jobId]/route.ts
export async function GET(
  request: NextRequest,
  { params }: { params: { jobId: string } }
): Promise<NextResponse> {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const job = await prisma.exportJob.findUnique({
      where: { id: params.jobId, userId },
    });

    if (!job) {
      return NextResponse.json({ message: 'Job not found' }, { status: 404 });
    }

    return NextResponse.json({ job });
  } catch (error) {
    return handleApiError(error);
  }
}
```

**Download Route:**

```typescript
// apps/web/src/app/api/exports/[jobId]/download/route.ts
export async function GET(
  request: NextRequest,
  { params }: { params: { jobId: string } }
): Promise<NextResponse> {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const job = await prisma.exportJob.findUnique({
      where: { id: params.jobId, userId },
    });

    if (!job || job.status !== 'completed' || !job.filePath) {
      return NextResponse.json(
        { message: 'File not available' },
        { status: 404 }
      );
    }

    // Check expiry
    if (job.expiresAt && job.expiresAt < new Date()) {
      return NextResponse.json(
        { message: 'Download link expired' },
        { status: 410 }
      );
    }

    // Generate signed URL (implementation depends on storage solution)
    const signedUrl = await generateSignedUrl(job.filePath);

    return NextResponse.json({ downloadUrl: signedUrl });
  } catch (error) {
    return handleApiError(error);
  }
}
```

**Retry Route:**

```typescript
// apps/web/src/app/api/exports/[jobId]/retry/route.ts
export async function POST(
  request: NextRequest,
  { params }: { params: { jobId: string } }
): Promise<NextResponse> {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const job = await prisma.exportJob.findUnique({
      where: { id: params.jobId, userId },
    });

    if (!job || job.status !== 'failed') {
      return NextResponse.json(
        { message: 'Job cannot be retried' },
        { status: 400 }
      );
    }

    await prisma.exportJob.update({
      where: { id: params.jobId },
      data: {
        status: 'pending',
        progress: 0,
        errorMessage: null,
      },
    });

    // TODO: Trigger background job processing
    // await scheduleExportJob(params.jobId);

    return NextResponse.json({ message: 'Job retry initiated' });
  } catch (error) {
    return handleApiError(error);
  }
}
```

**Audit Trail:**

After successful export completion, create audit record:

```typescript
await prisma.exportAudit.create({
  data: {
    jobId: job.id,
    siteId: job.siteId,
    userId: job.userId,
    module: job.module,
    filtersJson: JSON.stringify({ dateFrom: job.dateFrom, dateTo: job.dateTo }),
    recordCount: recordCount,
    fileSize: fileSize,
    fileHash: fileHash,
  },
});
```

#### Validation Checklist

- [ ] All routes follow /api/exports/[resource] pattern (NO versioning)
- [ ] Clerk authentication enforced on all routes
- [ ] Rate limiting prevents abuse (max 5 active jobs)
- [ ] Zod validation applied to request bodies
- [ ] Audit trail created for completed exports
- [ ] Signed URLs generated with 24-hour expiry
- [ ] Error handling uses handleApiError utility
- [ ] TypeScript types are strict (NO any)

#### Documentation References

- `DeskOps-Backend.md` (lines 704-798)
- `DeskOps-Interface-Overview.md` (lines 124-186)
- `DeskOps-ImplementationPlan.md` (lines 498-682)

---

### Task 11.2: Implement Export File Processors for Excel, PDF, and CSV Formats

**Ticket ID:** `48e11ab4-ef93-42ea-a114-ffa52b69e373`
**Size:** Epic
**Priority:** High

#### Objective

Create file generation processors for Excel, PDF, and CSV formats with progress tracking and integrity verification.

#### Implementation Details

**Files to Create:**

- `apps/web/src/lib/exporters/types.ts` - Shared interfaces
- `apps/web/src/lib/exporters/excel.ts` - Excel processor (ExcelJS)
- `apps/web/src/lib/exporters/pdf.ts` - PDF processor (pdf-lib)
- `apps/web/src/lib/exporters/csv.ts` - CSV processor (Node streams)
- `apps/web/src/lib/exporters/powerbi-csv.ts` - Power BI CSV processor
- `apps/web/src/lib/exporters/export-processor.ts` - Job orchestrator

**Shared Types:**

````typescript
// apps/web/src/lib/exporters/types.ts
```typescript
// apps/web/src/lib/exporters/types.ts
export interface ExportJobData {
  id: string;
  siteId: string;
  module: string;
  dateFrom: Date;
  dateTo: Date;
  granularity: string;
  format: string;
}

export interface ExportResult {
  filePath: string;
  fileSize: number;
  fileHash: string;
  recordCount: number;
}

export interface ProgressCallback {
  (progress: number): Promise<void>;
}

export interface ExporterOptions {
  jobData: ExportJobData;
  onProgress: ProgressCallback;
}
````

**Excel Processor:**

```typescript
// apps/web/src/lib/exporters/excel.ts
import ExcelJS from 'exceljs';
import { createHash } from 'crypto';
import { prisma } from '@/lib/db';
import { MATERIALS, EXPORT_HEADERS } from '@deskops/constants';
import type { ExportJobData, ExportResult, ProgressCallback } from './types';

export async function generateExcelReport(
  jobData: ExportJobData,
  onProgress: ProgressCallback
): Promise<ExportResult> {
  const workbook = new ExcelJS.Workbook();

  // Set workbook properties
  workbook.creator = 'DeskOps';
  workbook.created = new Date();
  workbook.modified = new Date();

  await onProgress(10);

  // Fetch data based on module
  const data = await fetchModuleData(jobData);
  await onProgress(30);

  // Create worksheet
  const worksheet = workbook.addWorksheet(jobData.module.toUpperCase());

  // Add headers
  const headers = EXPORT_HEADERS[jobData.module as keyof typeof EXPORT_HEADERS];
  worksheet.addRow(headers);

  // Style header row
  const headerRow = worksheet.getRow(1);
  headerRow.font = { bold: true, color: { argb: 'FFFFFFFF' } };
  headerRow.fill = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: 'FF1F2937' },
  };
  headerRow.alignment = { vertical: 'middle', horizontal: 'center' };

  // Freeze header row
  worksheet.views = [{ state: 'frozen', ySplit: 1 }];

  await onProgress(50);

  // Add data rows
  data.forEach((row, index) => {
    worksheet.addRow(row);
    if (index % 100 === 0) {
      onProgress(50 + (index / data.length) * 40);
    }
  });

  // Auto-fit columns
  worksheet.columns.forEach((column) => {
    let maxLength = 0;
    column.eachCell({ includeEmpty: true }, (cell) => {
      const length = cell.value ? cell.value.toString().length : 10;
      if (length > maxLength) maxLength = length;
    });
    column.width = Math.min(maxLength + 2, 50);
  });

  // Add filters
  worksheet.autoFilter = {
    from: { row: 1, column: 1 },
    to: { row: 1, column: headers.length },
  };

  await onProgress(90);

  // Write to file
  const filePath = `/exports/${jobData.siteId}/${new Date().getFullYear()}/${new Date().getMonth() + 1}/${jobData.id}.xlsx`;
  await workbook.xlsx.writeFile(filePath);

  // Calculate file hash
  const buffer = await workbook.xlsx.writeBuffer();
  const fileHash = createHash('sha256').update(buffer).digest('hex');
  const fileSize = buffer.length;

  await onProgress(100);

  return {
    filePath,
    fileSize,
    fileHash,
    recordCount: data.length,
  };
}

async function fetchModuleData(jobData: ExportJobData): Promise<unknown[]> {
  // Implementation depends on module
  switch (jobData.module) {
    case 'production':
      return await prisma.production.findMany({
        where: {
          siteId: jobData.siteId,
          date: { gte: jobData.dateFrom, lte: jobData.dateTo },
        },
        include: { material: true, site: true },
      });
    // ... similar for other modules
    default:
      throw new Error(`Unsupported module: ${jobData.module}`);
  }
}
```

**PDF Processor:**

```typescript
// apps/web/src/lib/exporters/pdf.ts
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { createHash } from 'crypto';
import type { ExportJobData, ExportResult, ProgressCallback } from './types';

export async function generatePDFReport(
  jobData: ExportJobData,
  onProgress: ProgressCallback
): Promise<ExportResult> {
  const pdfDoc = await PDFDocument.create();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  await onProgress(10);

  // Fetch data
  const data = await fetchModuleData(jobData);
  await onProgress(30);

  // A4 dimensions: 595 x 842 points
  const pageWidth = 595;
  const pageHeight = 842;
  const margin = 50;

  let page = pdfDoc.addPage([pageWidth, pageHeight]);
  let yPosition = pageHeight - margin;

  // Add header
  page.drawText('DeskOps Export Report', {
    x: margin,
    y: yPosition,
    size: 18,
    font: boldFont,
    color: rgb(0.12, 0.16, 0.22),
  });

  yPosition -= 30;

  // Add metadata
  page.drawText(`Module: ${jobData.module.toUpperCase()}`, {
    x: margin,
    y: yPosition,
    size: 12,
    font,
  });

  yPosition -= 20;

  page.drawText(
    `Date Range: ${jobData.dateFrom.toLocaleDateString()} - ${jobData.dateTo.toLocaleDateString()}`,
    {
      x: margin,
      y: yPosition,
      size: 12,
      font,
    }
  );

  yPosition -= 40;

  await onProgress(50);

  // Add table (simplified - full implementation would include proper table rendering)
  // ... table rendering logic ...

  await onProgress(90);

  // Save PDF
  const pdfBytes = await pdfDoc.save();
  const filePath = `/exports/${jobData.siteId}/${new Date().getFullYear()}/${new Date().getMonth() + 1}/${jobData.id}.pdf`;

  // Write to file system
  await fs.writeFile(filePath, pdfBytes);

  // Calculate hash
  const fileHash = createHash('sha256').update(pdfBytes).digest('hex');

  await onProgress(100);

  return {
    filePath,
    fileSize: pdfBytes.length,
    fileHash,
    recordCount: data.length,
  };
}
```

**CSV Processor:**

```typescript
// apps/web/src/lib/exporters/csv.ts
import { createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { Readable } from 'stream';
import { createHash } from 'crypto';
import type { ExportJobData, ExportResult, ProgressCallback } from './types';

export async function generateCSVReport(
  jobData: ExportJobData,
  onProgress: ProgressCallback
): Promise<ExportResult> {
  await onProgress(10);

  const data = await fetchModuleData(jobData);
  await onProgress(30);

  const filePath = `/exports/${jobData.siteId}/${new Date().getFullYear()}/${new Date().getMonth() + 1}/${jobData.id}.csv`;
  const writeStream = createWriteStream(filePath);

  // Write UTF-8 BOM
  writeStream.write('\uFEFF');

  // Write headers
  const headers = EXPORT_HEADERS[jobData.module as keyof typeof EXPORT_HEADERS];
  writeStream.write(headers.join(',') + '\n');

  await onProgress(50);

  // Write data rows
  let processedRows = 0;
  for (const row of data) {
    const csvRow = Object.values(row)
      .map((value) => {
        if (value === null || value === undefined) return '';
        const str = String(value);
        // Escape quotes and wrap in quotes if contains comma, quote, or newline
        if (str.includes(',') || str.includes('"') || str.includes('\n')) {
          return `"${str.replace(/"/g, '""')}"`;
        }
        return str;
      })
      .join(',');

    writeStream.write(csvRow + '\n');

    processedRows++;
    if (processedRows % 100 === 0) {
      await onProgress(50 + (processedRows / data.length) * 40);
    }
  }

  writeStream.end();

  await new Promise((resolve) => writeStream.on('finish', resolve));

  await onProgress(90);

  // Calculate file hash
  const fileBuffer = await fs.readFile(filePath);
  const fileHash = createHash('sha256').update(fileBuffer).digest('hex');

  await onProgress(100);

  return {
    filePath,
    fileSize: fileBuffer.length,
    fileHash,
    recordCount: data.length,
  };
}
```

**Export Processor Orchestrator:**

```typescript
// apps/web/src/lib/exporters/export-processor.ts
import { prisma } from '@/lib/db';
import { generateExcelReport } from './excel';
import { generatePDFReport } from './pdf';
import { generateCSVReport } from './csv';
import type { ExportJobData, ExportResult } from './types';

export class ExportJobProcessor {
  async processJob(jobId: string): Promise<void> {
    try {
      const job = await prisma.exportJob.findUnique({
        where: { id: jobId },
      });

      if (!job) {
        throw new Error(`Job ${jobId} not found`);
      }

      await this.updateProgress(jobId, 10);

      let result: ExportResult;

      switch (job.format) {
        case 'xlsx':
          result = await generateExcelReport(job, (progress) =>
            this.updateProgress(jobId, progress)
          );
          break;
        case 'pdf':
          result = await generatePDFReport(job, (progress) =>
            this.updateProgress(jobId, progress)
          );
          break;
        case 'csv':
          result = await generateCSVReport(job, (progress) =>
            this.updateProgress(jobId, progress)
          );
          break;
        default:
          throw new Error(`Unsupported format: ${job.format}`);
      }

      await this.completeJob(jobId, result);
    } catch (error) {
      console.error(`Export job ${jobId} failed:`, error);
      await this.failJob(
        jobId,
        error instanceof Error ? error.message : 'Unknown error'
      );
    }
  }

  async updateProgress(jobId: string, progress: number): Promise<void> {
    await prisma.exportJob.update({
      where: { id: jobId },
      data: {
        progress,
        status: 'processing',
        updatedAt: new Date(),
      },
    });
  }

  async completeJob(jobId: string, result: ExportResult): Promise<void> {
    const downloadUrl = `/api/exports/${jobId}/download`;
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + 24);

    await prisma.exportJob.update({
      where: { id: jobId },
      data: {
        status: 'completed',
        progress: 100,
        filePath: result.filePath,
        fileSize: result.fileSize,
        fileHash: result.fileHash,
        downloadUrl,
        expiresAt,
        updatedAt: new Date(),
      },
    });

    // Create audit record
    const job = await prisma.exportJob.findUnique({ where: { id: jobId } });
    if (job) {
      await prisma.exportAudit.create({
        data: {
          jobId,
          siteId: job.siteId,
          userId: job.userId,
          module: job.module,
          filtersJson: JSON.stringify({
            dateFrom: job.dateFrom,
            dateTo: job.dateTo,
          }),
          recordCount: result.recordCount,
          fileSize: result.fileSize,
          fileHash: result.fileHash,
        },
      });
    }
  }

  async failJob(jobId: string, error: string): Promise<void> {
    await prisma.exportJob.update({
      where: { id: jobId },
      data: {
        status: 'failed',
        errorMessage: error,
        updatedAt: new Date(),
      },
    });
  }
}
```

**Cleanup Job for Expired Exports:**

```typescript
// apps/web/src/lib/exporters/cleanup.ts
import { prisma } from '@/lib/db';
import { unlink } from 'fs/promises';

export async function cleanupExpiredExports(): Promise<void> {
  const expiredJobs = await prisma.exportJob.findMany({
    where: {
      status: 'completed',
      expiresAt: { lt: new Date() },
      filePath: { not: null },
    },
  });

  for (const job of expiredJobs) {
    try {
      if (job.filePath) {
        await unlink(job.filePath);
      }
      await prisma.exportJob.update({
        where: { id: job.id },
        data: { filePath: null, downloadUrl: null },
      });
    } catch (error) {
      console.error(`Failed to cleanup job ${job.id}:`, error);
    }
  }
}

// Run cleanup daily
setInterval(cleanupExpiredExports, 24 * 60 * 60 * 1000);
```

#### Validation Checklist

- [ ] Excel exports include frozen headers, filters, conditional formatting
- [ ] PDF exports follow A4 format with proper margins
- [ ] CSV exports are RFC 4180 compliant with UTF-8 BOM
- [ ] Power BI CSV uses kebab_case columns
- [ ] Progress tracking updates database correctly
- [ ] File hash (SHA-256) generated for integrity verification
- [ ] Cleanup job removes expired exports
- [ ] All processors handle errors gracefully
- [ ] TypeScript types are strict (NO any)

#### Documentation References

- `DeskOps-Backend.md` (lines 929-1044)
- `DeskOps-Interface-Overview.md` (lines 156-162)
- `DeskOps-ImplementationPlan.md` (lines 498-682)

---

### Task 11.3: Build Export Dialog and Progress Tracking UI Components

**Ticket ID:** `7551e02b-04c0-4991-ab6a-895399e7e8ae`
**Size:** Story
**Priority:** High

#### Objective

Create user-facing export UI with dialog form, real-time progress tracking, and export history.

#### Implementation Details

**Files to Create:**

- `apps/web/src/components/export/export-dialog.tsx` - Export form dialog
- `apps/web/src/components/export/export-progress.tsx` - Progress bar with SSE
- `apps/web/src/components/export/export-history.tsx` - Completed exports list
- `apps/web/src/hooks/use-export-progress.ts` - SSE hook for real-time updates

**Files to Update:**

- `apps/web/src/components/layout/header.tsx` - Add export button

**Export Dialog Component:**

```typescript
// apps/web/src/components/export/export-dialog.tsx
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Button,
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@deskops/ui';
import { Download } from 'lucide-react';
import { toast } from 'sonner';
import { useExportStore } from '@/stores/export-store';
import { useAppStore } from '@/stores/app-store';

const exportFormSchema = z.object({
  module: z.enum(['production', 'dispatch', 'received', 'equipment', 'manpower', 'inventory']),
  format: z.enum(['xlsx', 'csv', 'pdf']),
  granularity: z.enum(['daily', 'weekly', 'monthly']),
  dateFrom: z.date(),
  dateTo: z.date(),
}).refine((data) => data.dateFrom <= data.dateTo, {
  message: 'Start date must be before end date',
  path: ['dateTo'],
});

type ExportFormData = z.infer<typeof exportFormSchema>;

export function ExportDialog(): React.JSX.Element {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { exportDialogOpen, setExportDialogOpen, addJob } = useExportStore();
  const { selectedSiteId, dateRange } = useAppStore();

  const form = useForm<ExportFormData>({
    resolver: zodResolver(exportFormSchema),
    defaultValues: {
      module: 'production',
      format: 'xlsx',
      granularity: 'daily',
      dateFrom: dateRange.from,
      dateTo: dateRange.to,
    },
  });

  const onSubmit = async (data: ExportFormData): Promise<void> => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/exports', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          siteId: selectedSiteId,
          module: data.module,
          format: data.format,
          granularity: data.granularity,
          dateFrom: data.dateFrom.toISOString(),
          dateTo: data.dateTo.toISOString(),
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to create export job');
      }

      const { exportJob } = await response.json();
      addJob(exportJob);
      toast.success('Export job created successfully');
      setExportDialogOpen(false);
      form.reset();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Export failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={exportDialogOpen} onOpenChange={setExportDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <Download className="mr-2 h-4 w-4" />
          Export
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Export Data</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="module"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Module</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select module" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="production">Production</SelectItem>
                      <SelectItem value="dispatch">Dispatch</SelectItem>
                      <SelectItem value="received">Received</SelectItem>
                      <SelectItem value="equipment">Equipment</SelectItem>
                      <SelectItem value="manpower">Manpower</SelectItem>
                      <SelectItem value="inventory">Inventory</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="format"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Format</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select format" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="xlsx">Excel (.xlsx)</SelectItem>
                      <SelectItem value="csv">CSV (.csv)</SelectItem>
                      <SelectItem value="pdf">PDF (.pdf)</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="granularity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Granularity</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select granularity" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Date range fields would go here */}

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Creating Export...' : 'Create Export'}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
```

**Export Progress Component:**

```typescript
// apps/web/src/components/export/export-progress.tsx
'use client';

import { useExportStore } from '@/stores/export-store';
import { Progress, Card, CardContent, CardHeader, CardTitle } from '@deskops/ui';
import { CheckCircle, XCircle, Loader2 } from 'lucide-react';

export function ExportProgress(): React.JSX.Element {
  const { activeJobs } = useExportStore();

  if (activeJobs.length === 0) return <></>;

  return (
    <div className="space-y-4">
      {activeJobs.map((job) => (
        <Card key={job.id}>
          <CardHeader>
            <CardTitle className="flex items-center justify-between text-sm">
              <span>
                {job.module.toUpperCase()} Export ({job.format.toUpperCase()})
              </span>
              {job.status === 'processing' && (
                <Loader2 className="h-4 w-4 animate-spin" />
              )}
              {job.status === 'completed' && (
                <CheckCircle className="h-4 w-4 text-green-500" />
              )}
              {job.status === 'failed' && (
                <XCircle className="h-4 w-4 text-red-500" />
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={job.progress} className="h-2" />
            <p className="mt-2 text-xs text-muted-foreground">
              {job.progress}% complete
            </p>
            {job.errorMessage && (
              <p className="mt-2 text-xs text-red-500">{job.errorMessage}</p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
```

**Export History Component:**

```typescript
// apps/web/src/components/export/export-history.tsx
'use client';

import { useExportStore } from '@/stores/export-store';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Button,
  Badge,
} from '@deskops/ui';
import { Download, RotateCw, Trash2 } from 'lucide-react';
import { format } from 'date-fns';
import { toast } from 'sonner';

export function ExportHistory(): React.JSX.Element {
  const { completedJobs, removeJob, clearCompletedJobs } = useExportStore();

  const handleDownload = async (job: ExportJob): Promise<void> => {
    if (!job.downloadUrl) {
      toast.error('Download URL not available');
      return;
    }

    try {
      const response = await fetch(job.downloadUrl);
      if (!response.ok) throw new Error('Download failed');

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `DeskOps_${job.module}_${job.id}.${job.format}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      toast.success('Download started');
    } catch (error) {
      toast.error('Download failed');
    }
  };

  const handleRetry = async (jobId: string): Promise<void> => {
    try {
      const response = await fetch(`/api/exports/${jobId}/retry`, {
        method: 'POST',
      });

      if (!response.ok) throw new Error('Retry failed');

      toast.success('Export job retry initiated');
      removeJob(jobId);
    } catch (error) {
      toast.error('Retry failed');
    }
  };

  if (completedJobs.length === 0) {
    return (
      <Card>
        <CardContent className="py-8 text-center text-muted-foreground">
          No completed exports
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Export History</CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={clearCompletedJobs}
          >
            Clear All
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {completedJobs.map((job) => (
            <div
              key={job.id}
              className="flex items-center justify-between rounded-lg border p-4"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium">
                    {job.module.toUpperCase()}
                  </span>
                  <Badge variant={job.status === 'completed' ? 'default' : 'destructive'}>
                    {job.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  {format(new Date(job.createdAt), 'MMM dd, yyyy HH:mm')}
                </p>
              </div>
              <div className="flex gap-2">
                {job.status === 'completed' && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDownload(job)}
                  >
                    <Download className="h-4 w-4" />
                  </Button>
                )}
                {job.status === 'failed' && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleRetry(job.id)}
                  >
                    <RotateCw className="h-4 w-4" />
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeJob(job.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
```

**SSE Hook for Real-time Updates:**

```typescript
// apps/web/src/hooks/use-export-progress.ts
import { useEffect } from 'react';
import { useAuth } from '@clerk/nextjs';
import { useExportStore } from '@/stores/export-store';

export function useExportProgress(): void {
  const { getToken } = useAuth();
  const { updateJob } = useExportStore();

  useEffect(() => {
    let eventSource: EventSource | null = null;

    const connect = async (): Promise<void> => {
      const token = await getToken();
      eventSource = new EventSource(`/api/exports/progress?token=${token}`);

      eventSource.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          updateJob(data.jobId, {
            progress: data.progress,
            status: data.status,
            downloadUrl: data.downloadUrl,
            errorMessage: data.errorMessage,
          });
        } catch (error) {
          console.error('Failed to parse SSE data:', error);
        }
      };

      eventSource.onerror = () => {
        eventSource?.close();
        // Attempt reconnection after 5 seconds
        setTimeout(connect, 5000);
      };
    };

    connect();

    return () => {
      eventSource?.close();
    };
  }, [getToken, updateJob]);
}
```

**Update Header Component:**

```typescript
// Add to apps/web/src/components/layout/header.tsx
import { ExportDialog } from '@/components/export/export-dialog';

// In the header JSX, add:
<ExportDialog />
```

#### Validation Checklist

- [ ] Export dialog validates form inputs with Zod
- [ ] Progress component shows real-time updates via SSE
- [ ] History component lists completed exports with download/retry
- [ ] Export button added to Header component
- [ ] SSE hook connects and reconnects automatically
- [ ] Download triggers file download correctly
- [ ] Retry re-queues failed jobs
- [ ] All components use Zustand export store
- [ ] TypeScript types are strict (NO any)

#### Documentation References

- `DeskOps-Hooks.md` (lines 586-735)
- `DeskOps-Interface-Overview.md` (lines 124-147)
- `DeskOps-ImplementationPlan.md` (lines 498-682)

---

---

## Phase 12: Authentication (2 Tasks)

### Task 12.1: Configure Clerk Authentication Middleware with Route Protection

**Ticket ID:** `42597a1b-d91b-4a9a-966b-3c86241e4b25`
**Size:** Issue
**Priority:** Critical

#### Objective

Implement Next.js middleware for route protection and role-based access control using Clerk.

#### Implementation Details

**Files to Create:**

- `apps/web/src/middleware.ts` - Clerk authentication middleware

**Files to Update:**

- `.env.local` - Add Clerk environment variables
- `.env.example` - Document Clerk variables

**Middleware Implementation:**

```typescript
// apps/web/src/middleware.ts
import { authMiddleware, redirectToSignIn } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export default authMiddleware({
  publicRoutes: ['/'],
  ignoredRoutes: ['/api/health'],

  beforeAuth: (req) => {
    // Add any pre-auth logic here
    console.log('Before auth:', req.url);
  },

  afterAuth: (auth, req) => {
    // Handle users who aren't authenticated
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }

    // Role-based access control
    if (auth.userId && req.nextUrl.pathname.startsWith('/admin')) {
      const userRole = auth.sessionClaims?.metadata?.role;

      if (userRole !== 'ADMIN') {
        return NextResponse.redirect(new URL('/dashboard', req.url));
      }
    }

    return NextResponse.next();
  },
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
```

**Environment Variables:**

```bash
# .env.local
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# .env.example
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY={your_publishable_key}
CLERK_SECRET_KEY={your_secret_key}
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
```

#### Validation Checklist

- [ ] Middleware protects all routes except public/ignored
- [ ] Unauthenticated users redirected to sign-in
- [ ] Role-based access control checks user metadata
- [ ] Admin routes restricted to ADMIN role
- [ ] ClerkProvider verified in root layout
- [ ] Environment variables documented in .env.example

#### Documentation References

- `DeskOps-Backend.md` (lines 1048-1082)
- `DeskOps-ImplementationPlan.md` (lines 683-804)

---

[ ] ClerkProvider verified in root layout

[ ] Environment variables documented in .env.example

Documentation References:

- `DeskOps-Backend.md` (lines 1048-1082)
- `DeskOps-ImplementationPlan.md` (lines 683-804)

---

### Task 12.2: Create Clerk Authentication Pages and Custom useAuth Hook

**Ticket ID:** `df3ce88e-fe40-4c06-84b6-5358a024fdd5`
**Size:** Story
**Priority:** High

#### Objective

Implement authentication pages and custom hook for role-based UI rendering.

#### Implementation Details

**Files to Create:**

- `apps/web/src/app/sign-in/[[...sign-in]]/page.tsx` - Sign-in page
- `apps/web/src/app/sign-up/[[...sign-up]]/page.tsx` - Sign-up page
- `apps/web/src/hooks/use-auth.ts` - Custom auth hook

**Files to Update:**

- `apps/web/src/components/layout/header.tsx` - Use custom useAuth hook

**Sign-In Page:**

```typescript
// apps/web/src/app/sign-in/[[...sign-in]]/page.tsx
import { SignIn } from '@clerk/nextjs';

export default function SignInPage(): React.JSX.Element {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">DeskOps</h1>
          <p className="text-muted-foreground mt-2">
            Construction & Demolition Recycling Management
          </p>
        </div>
        <SignIn
          appearance={{
            elements: {
              rootBox: 'mx-auto',
              card: 'shadow-lg',
            },
          }}
        />
      </div>
    </div>
  );
}
```

**Sign-Up Page:**

```typescript
// apps/web/src/app/sign-up/[[...sign-up]]/page.tsx
import { SignUp } from '@clerk/nextjs';

export default function SignUpPage(): React.JSX.Element {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">DeskOps</h1>
          <p className="text-muted-foreground mt-2">
            Construction & Demolition Recycling Management
          </p>
        </div>
        <SignUp
          appearance={{
            elements: {
              rootBox: 'mx-auto',
              card: 'shadow-lg',
            },
          }}
        />
      </div>
    </div>
  );
}
```

**Custom useAuth Hook:**

```typescript
// apps/web/src/hooks/use-auth.ts
import { useUser, useAuth as useClerkAuth } from '@clerk/nextjs';
import { UserRole } from '@deskops/constants';

interface AuthUser {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
}

export function useAuth(): {
  user: AuthUser | null;
  isLoading: boolean;
  isSignedIn: boolean;
  hasRole: (role: UserRole) => boolean;
  signOut: () => Promise<void>;
} {
  const { user, isLoaded } = useUser();
  const { isSignedIn, signOut } = useClerkAuth();

  const authUser: AuthUser | null = user
    ? {
        id: user.id,
        email: user.emailAddresses[0]?.emailAddress || '',
        name: user.fullName || '',
        role: (user.publicMetadata.role as UserRole) || UserRole.MODERATOR,
        avatar: user.imageUrl,
      }
    : null;

  const hasRole = (role: UserRole): boolean => {
    if (!authUser) return false;

    // Admin has access to everything
    if (authUser.role === UserRole.ADMIN) return true;

    // Check specific role
    return authUser.role === role;
  };

  return {
    user: authUser,
    isLoading: !isLoaded,
    isSignedIn: !!isSignedIn,
    hasRole,
    signOut,
  };
}
```

**Update Header Component:**

```typescript
// apps/web/src/components/layout/header.tsx
import { useAuth } from '@/hooks/use-auth';

export function Header(): React.JSX.Element {
  const { user, hasRole } = useAuth();

  return (
    <header className="...">
      {/* ... existing header content ... */}

      {/* Show admin-only features */}
      {hasRole(UserRole.ADMIN) && (
        <Button variant="ghost" size="sm">
          Admin Panel
        </Button>
      )}

      {/* User info */}
      {user && (
        <div className="flex items-center gap-2">
          <span className="text-sm">{user.name}</span>
          <Badge>{user.role}</Badge>
        </div>
      )}
    </header>
  );
}
```

#### Validation Checklist

- [ ] Sign-in page renders Clerk SignIn component
- [ ] Sign-up page renders Clerk SignUp component
- [ ] Custom useAuth hook wraps Clerk hooks
- [ ] hasRole function checks user metadata correctly
- [ ] AuthUser interface uses UserRole enum from constants
- [ ] Header component uses custom useAuth hook
- [ ] Role-based UI rendering works correctly
- [ ] TypeScript types are strict (NO any)

#### Documentation References

- `DeskOps-Hooks.md` (lines 916-967)
- `DeskOps-ImplementationPlan.md` (lines 683-804)

---

## Phase 13: Testing Infrastructure (3 Tasks)

### Task 13.1: Configure Vitest Testing Framework with Mocks and Utilities

**Ticket ID:** `3c1d5d89-2517-4a22-9407-d19ff91365b1`
**Size:** Story
**Priority:** High

#### Objective

Setup Vitest testing infrastructure with mocks for Next.js and Clerk, plus test utilities.

#### Implementation Details

**Files to Create:**

- `apps/web/vitest.config.ts` - Vitest configuration
- `apps/web/src/test/setup.ts` - Global test setup with mocks
- `apps/web/src/test/utils.tsx` - Test utilities (renderWithProviders)
- `apps/web/src/test/mocks/` - Mock files directory

**Files to Update:**

- `apps/web/package.json` - Add test scripts

**Vitest Configuration:**

```typescript
// apps/web/vitest.config.ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    globals: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: ['node_modules/', 'src/test/', '**/*.config.*', '**/*.d.ts'],
      thresholds: {
        statements: 80,
        branches: 80,
        functions: 80,
        lines: 80,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@deskops/ui': path.resolve(__dirname, '../../packages/ui/src'),
      '@deskops/constants': path.resolve(
        __dirname,
        '../../packages/constants/src'
      ),
      '@deskops/database': path.resolve(
        __dirname,
        '../../packages/database/src'
      ),
    },
  },
});
```

**Test Setup with Mocks:**

```typescript
// apps/web/src/test/setup.ts
import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock Next.js router
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
    pathname: '/dashboard',
    query: {},
  }),
  usePathname: () => '/dashboard',
  useSearchParams: () => new URLSearchParams(),
  useParams: () => ({}),
}));

// Mock Clerk auth
vi.mock('@clerk/nextjs', () => ({
  useAuth: () => ({
    userId: 'user_test123',
    isSignedIn: true,
    isLoaded: true,
    getToken: vi.fn().mockResolvedValue('mock_token'),
    signOut: vi.fn(),
  }),
  useUser: () => ({
    user: {
      id: 'user_test123',
      emailAddresses: [{ emailAddress: 'test@example.com' }],
      fullName: 'Test User',
      imageUrl: 'https://example.com/avatar.jpg',
      publicMetadata: { role: 'MODERATOR' },
    },
    isLoaded: true,
  }),
  ClerkProvider: ({ children }: { children: React.ReactNode }) => children,
  SignIn: () => <div>SignIn Mock</div>,
  SignUp: () => <div>SignUp Mock</div>,
  UserButton: () => <div>UserButton Mock</div>,
}));

// Suppress console warnings in tests
global.console = {
  ...console,
  warn: vi.fn(),
  error: vi.fn(),
};
```

**Test Utilities:**

```typescript
// apps/web/src/test/utils.tsx
import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@/components/providers/theme-provider';

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        gcTime: 0,
      },
      mutations: {
        retry: false,
      },
    },
  });

interface AllTheProvidersProps {
  children: React.ReactNode;
}

function AllTheProviders({ children }: AllTheProvidersProps) {
  const testQueryClient = createTestQueryClient();

  return (
    <QueryClientProvider client={testQueryClient}>
      <ThemeProvider attribute="class" defaultTheme="light">
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export function renderWithProviders(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) {
  return render(ui, { wrapper: AllTheProviders, ...options });
}

export * from '@testing-library/react';
export { renderWithProviders as render };
```

**Mock Files:**

```typescript
// apps/web/src/test/mocks/handlers.ts
export const handlers = [
  rest.get('/api/production', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        productions: [
          {
            id: 'prod_1',
            date: '2025-10-26',
            materialId: 'MAT001',
            qtyTon: 100.5,
            operation: 'CRU-PRO',
            material: { code: 'AGG-G1', name: 'G1', uom: 'TON' },
            site: { code: 'ALASLA-29', name: 'Al Asla' },
          },
        ],
      })
    );
  }),
];
```

**Update package.json:**

```json
{
  "scripts": {
    "test": "vitest",
    "test:watch": "vitest --watch",
    "test:coverage": "vitest --coverage",
    "test:ui": "vitest --ui"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^5.1.0",
    "vitest": "^4.0.3",
    "jsdom": "^27.0.1",
    "@testing-library/react": "^16.3.0",
    "@testing-library/jest-dom": "^6.1.0",
    "@testing-library/user-event": "^14.5.0",
    "@vitest/ui": "^4.0.3",
    "msw": "^2.0.0"
  }
}
```

#### Validation Checklist

- [ ] Vitest configured with React plugin and jsdom
- [ ] Path aliases match tsconfig
- [ ] Coverage thresholds set to 80%
- [ ] Next.js router mocked correctly
- [ ] Clerk auth mocked correctly
- [ ] renderWithProviders wraps QueryClient and Theme providers
- [ ] Test scripts added to package.json
- [ ] Mock handlers created for API routes

#### Documentation References

- `DeskOps-Configuration.md` (lines 867-985)
- `DeskOps-ImplementationPlan.md` (lines 805-990)

---

### Task 13.2: Write Sample Unit and Integration Tests for Key Components

**Ticket ID:** `3cde6329-deed-46b9-bea6-88930c0684eb`
**Size:** Story
**Priority:** Medium

#### Objective

Create sample tests demonstrating testing patterns for forms, hooks, components, utilities, and stores.

#### Implementation Details

**Files to Create:**

- `apps/web/src/components/forms/__tests__/production-form.test.tsx`
- `apps/web/src/hooks/__tests__/use-production.test.ts`
- `apps/web/src/components/dashboard/__tests__/kpi-card.test.tsx`
- `apps/web/src/lib/exporters/__tests__/excel.test.ts`
- `apps/web/src/stores/__tests__/app-store.test.ts`

**Production Form Test:**

```typescript
// apps/web/src/components/forms/__tests__/production-form.test.tsx
import { describe, it, expect, vi } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from '@/test/utils';
import { ProductionForm } from '../production-form';

describe('ProductionForm', () => {
  it('renders form fields correctly', () => {
    render(<ProductionForm siteId="test_site" />);

    expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/material/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/quantity/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/operation/i)).toBeInTheDocument();
  });

  it('validates required fields', async () => {
    const user = userEvent.setup();
    render(<ProductionForm siteId="test_site" />);

    const submitButton = screen.getByRole('button', { name: /create/i });
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/material is required/i)).toBeInTheDocument();
      expect(screen.getByText(/quantity must be positive/i)).toBeInTheDocument();
    });
  });

  it('submits form with valid data', async () => {
    const user = userEvent.setup();
    const onSuccess = vi.fn();

    render(<ProductionForm siteId="test_site" onSuccess={onSuccess} />);

    // Fill form
    await user.type(screen.getByLabelText(/quantity/i), '100.5');
    await user.selectOptions(screen.getByLabelText(/material/i), 'MAT001');
    await user.selectOptions(screen.getByLabelText(/operation/i), 'CRU-PRO');

    // Submit
    await user.click(screen.getByRole('button', { name: /create/i }));

    await waitFor(() => {
      expect(onSuccess).toHaveBeenCalled();
    });
  });

  it('displays error message on submission failure', async () => {
    const user = userEvent.setup();

    // Mock API failure
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      json: async () => ({ error: 'Server error' }),
    });

    render(<ProductionForm siteId="test_site" />);

    // Fill and submit form
    await user.type(screen.getByLabelText(/quantity/i), '100.5');
    await user.click(screen.getByRole('button', { name: /create/i }));

    await waitFor(() => {
      expect(screen.getByText(/server error/i)).toBeInTheDocument();
    });
  });
});
```

**Use Production Hook Test:**

```typescript
// apps/web/src/hooks/__tests__/use-production.test.ts
import { describe, it, expect, vi } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useProduction } from '../use-production';

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe('useProduction', () => {
  it('fetches production data successfully', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        productions: [
          { id: '1', materialId: 'MAT001', qtyTon: 100 },
        ],
      }),
    });

    const { result } = renderHook(
      () => useProduction({ siteId: 'test_site' }),
      { wrapper: createWrapper() }
    );

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.data).toHaveLength(1);
    expect(result.current.data[0].qtyTon).toBe(100);
  });

  it('handles fetch error correctly', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      json: async () => ({ error: 'Failed to fetch' }),
    });

    const { result } = renderHook(
      () => useProduction({ siteId: 'test_site' }),
      { wrapper: createWrapper() }
    );

    await waitFor(() => {
      expect(result.current.error).toBeTruthy();
    });
  });

  it('does not fetch when disabled', () => {
    const { result } = renderHook(
      () => useProduction({ siteId: 'test_site', enabled: false }),
      { wrapper: createWrapper() }
    );

    expect(result.current.data).toEqual([]);
  });
});
```

**KPI Card Test:**

```typescript
// apps/web/src/components/dashboard/__tests__/kpi-card.test.tsx
import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { render } from '@/test/utils';
import { KPICard } from '../kpi-card';

describe('KPICard', () => {
  it('renders metric value and label', () => {
    render(
      <KPICard
        title="Total Production"
        value={1250.5}
        unit="TON"
        change={12.5}
        trend="up"
      />
    );

    expect(screen.getByText(/total production/i)).toBeInTheDocument();
    expect(screen.getByText(/1,250.5/)).toBeInTheDocument();
    expect(screen.getByText(/TON/)).toBeInTheDocument();
  });

  it('displays positive trend indicator', () => {
    render(
      <KPICard
        title="Production"
        value={100}
        unit="TON"
        change={15}
        trend="up"
      />
    );

    expect(screen.getByText(/\+15%/)).toBeInTheDocument();
    expect(screen.getByTestId('trend-up-icon')).toBeInTheDocument();
  });

  it('displays negative trend indicator', () => {
    render(
      <KPICard
        title="Production"
        value={100}
        unit="TON"
        change={-8}
        trend="down"
      />
    );

    expect(screen.getByText(/-8%/)).toBeInTheDocument();
    expect(screen.getByTestId('trend-down-icon')).toBeInTheDocument();
  });

  it('shows loading skeleton when loading', () => {
    render(
      <KPICard
        title="Production"
        value={0}
        unit="TON"
        change={0}
        trend="up"
        isLoading
      />
    );

    expect(screen.getByTestId('skeleton')).toBeInTheDocument();
  });
});
```

**Excel Exporter Test:**

```typescript
// apps/web/src/lib/exporters/__tests__/excel.test.ts
import { describe, it, expect, vi } from 'vitest';
import { generateExcelReport } from '../excel';
import type { ExportJobData } from '../types';

describe('generateExcelReport', () => {
  it('generates Excel file with correct structure', async () => {
    const jobData: ExportJobData = {
      id: 'job_1',
      siteId: 'site_1',
      module: 'production',
      dateFrom: new Date('2025-10-01'),
      dateTo: new Date('2025-10-31'),
      granularity: 'daily',
      format: 'xlsx',
    };

    const onProgress = vi.fn();

    const result = await generateExcelReport(jobData, onProgress);

    expect(result.filePath).toContain('.xlsx');
    expect(result.fileSize).toBeGreaterThan(0);
    expect(result.fileHash).toHaveLength(64); // SHA-256 hash
    expect(result.recordCount).toBeGreaterThan(0);
    expect(onProgress).toHaveBeenCalledWith(100);
  });

  it('calls progress callback at intervals', async () => {
    const jobData: ExportJobData = {
      id: 'job_1',
      siteId: 'site_1',
      module: 'production',
      dateFrom: new Date('2025-10-01'),
      dateTo: new Date('2025-10-31'),
      granularity: 'daily',
      format: 'xlsx',
    };

    const onProgress = vi.fn();

    await generateExcelReport(jobData, onProgress);

    expect(onProgress).toHaveBeenCalledWith(10);
    expect(onProgress).toHaveBeenCalledWith(30);
    expect(onProgress).toHaveBeenCalledWith(50);
    expect(onProgress).toHaveBeenCalledWith(90);
    expect(onProgress).toHaveBeenCalledWith(100);
  });
});
```

**App Store Test:**

```typescript
// apps/web/src/stores/__tests__/app-store.test.ts
import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useAppStore } from '../app-store';

describe('useAppStore', () => {
  beforeEach(() => {
    // Reset store before each test
    useAppStore.setState({
      selectedSiteId: 'default_site',
      sidebarCollapsed: false,
      theme: 'system',
    });
  });

  it('initializes with default values', () => {
    const { result } = renderHook(() => useAppStore());

    expect(result.current.selectedSiteId).toBe('default_site');
    expect(result.current.sidebarCollapsed).toBe(false);
    expect(result.current.theme).toBe('system');
  });

  it('updates selected site', () => {
    const { result } = renderHook(() => useAppStore());

    act(() => {
      result.current.setSelectedSiteId('new_site');
    });

    expect(result.current.selectedSiteId).toBe('new_site');
  });

  it('toggles sidebar collapsed state', () => {
    const { result } = renderHook(() => useAppStore());

    act(() => {
      result.current.setSidebarCollapsed(true);
    });

    expect(result.current.sidebarCollapsed).toBe(true);

    act(() => {
      result.current.setSidebarCollapsed(false);
    });

    expect(result.current.sidebarCollapsed).toBe(false);
  });

  it('updates theme', () => {
    const { result } = renderHook(() => useAppStore());

    act(() => {
      result.current.setTheme('dark');
    });

    expect(result.current.theme).toBe('dark');
  });

  it('persists state to localStorage', () => {
    const { result } = renderHook(() => useAppStore());

    act(() => {
      result.current.setSelectedSiteId('persisted_site');
    });

    // Check localStorage
    const stored = localStorage.getItem('deskops-app-state');
    expect(stored).toContain('persisted_site');
  });
});
```

#### Validation Checklist

- [ ] All tests follow AAA pattern (Arrange, Act, Assert)
- [ ] Tests use renderWithProviders from test utilities
- [ ] Form tests cover rendering, validation, submission success/error
- [ ] Hook tests cover data fetching, loading, error states
- [ ] Component tests cover rendering, interactions, loading states
- [ ] Utility tests cover core functionality
- [ ] Store tests cover state updates and persistence
- [ ] Coverage meets 80% threshold
- [ ] All tests use proper TypeScript types (NO any)

#### Documentation References

- `DeskOps-Configuration.md` (lines 867-985)
- `DeskOps-ImplementationPlan.md` (lines 805-990)

---

#### Documentation References

- `DeskOps-Configuration.md` (lines 867-985)
- `DeskOps-ImplementationPlan.md` (lines 805-990)

---

### Task 13.3: Configure Playwright E2E Tests for Critical User Flows

Ticket ID: d0b439aa-d8db-4a9a-87cd-47ea2c0cc1ba
Size: Story
Priority: Medium

Objective

**Ticket ID:** `6b8c5821-df64-4c2a-9b5f-c4b92e7f8a3d`
**Size:** Task
**Priority:** Medium

**Objective:**

Setup Playwright E2E testing for critical user flows including authentication, production, dashboard, and export.

#### Implementation Details

**Files to Verify:**

- `apps/web-e2e/playwright.config.ts` - Playwright configuration

**Files to Create:**

- `apps/web-e2e/src/auth.spec.ts` - Authentication flow tests
- `apps/web-e2e/src/production.spec.ts` - Production form tests
- `apps/web-e2e/src/dashboard.spec.ts` - Dashboard tests
- `apps/web-e2e/src/export.spec.ts` - Export flow tests

**Playwright Configuration (Verify):**

```typescript
// apps/web-e2e/playwright.config.ts
import { defineConfig, devices } from '@playwright/test';
import { nxE2EPreset } from '@nx/playwright/preset';
import { workspaceRoot } from '@nx/devkit';

const baseURL = process.env['BASE_URL'] || 'http://localhost:3000';

export default defineConfig({
  ...nxE2EPreset(__filename, { testDir: './src' }),
  use: {
    baseURL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  webServer: {
    command: 'npx nx run @ws-ops/web:start',
    url: 'http://localhost:3000',
    reuseExistingServer: true,
    cwd: workspaceRoot,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html'], ['junit', { outputFile: 'test-results/junit.xml' }]],
});
```

**Authentication Flow Test:**

```typescript
// apps/web-e2e/src/auth.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Authentication Flow', () => {
  test('should display sign-in page', async ({ page }) => {
    await page.goto('/sign-in');

    await expect(page.locator('h1')).toContainText('DeskOps');
    await expect(page.locator('input[name="identifier"]')).toBeVisible();
    await expect(page.locator('input[name="password"]')).toBeVisible();
  });

  test('should sign in successfully', async ({ page }) => {
    await page.goto('/sign-in');

    await page.fill('input[name="identifier"]', 'test@example.com');
    await page.fill('input[name="password"]', 'TestPassword123!');
    await page.click('button[type="submit"]');

    await expect(page).toHaveURL('/dashboard');
    await expect(page.locator('h1')).toContainText('Dashboard');
  });

  test('should display error for invalid credentials', async ({ page }) => {
    await page.goto('/sign-in');

    await page.fill('input[name="identifier"]', 'invalid@example.com');
    await page.fill('input[name="password"]', 'WrongPassword');
    await page.click('button[type="submit"]');

    await expect(page.locator('.error-message')).toBeVisible();
  });

  test('should sign out successfully', async ({ page }) => {
    // Assume user is signed in
    await page.goto('/dashboard');

    await page.click('[data-testid="user-button"]');
    await page.click('text=Sign out');

    await expect(page).toHaveURL('/');
  });
});
```

**Production Form Test:**

```typescript
// apps/web-e2e/src/production.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Production Form', () => {
  test.beforeEach(async ({ page }) => {
    // Sign in before each test
    await page.goto('/sign-in');
    await page.fill('input[name="identifier"]', 'test@example.com');
    await page.fill('input[name="password"]', 'TestPassword123!');
    await page.click('button[type="submit"]');
    await page.waitForURL('/dashboard');
  });

  test('should navigate to production page', async ({ page }) => {
    await page.click('text=Production');

    await expect(page).toHaveURL('/dashboard/production');
    await expect(page.locator('h1')).toContainText('Production');
  });

  test('should open production form dialog', async ({ page }) => {
    await page.goto('/dashboard/production');

    await page.click('button:has-text("Add Production")');

    await expect(page.locator('[role="dialog"]')).toBeVisible();
    await expect(page.locator('text=Create Production Record')).toBeVisible();
  });

  test('should submit production form successfully', async ({ page }) => {
    await page.goto('/dashboard/production');
    await page.click('button:has-text("Add Production")');

    // Fill form
    await page.selectOption('select[name="materialId"]', 'MAT001');
    await page.fill('input[name="qtyTon"]', '100.5');
    await page.selectOption('select[name="operation"]', 'CRU-PRO');

    // Submit
    await page.click('button[type="submit"]');

    // Verify success
    await expect(page.locator('.toast')).toContainText(
      'Production record created'
    );
    await expect(page.locator('[role="dialog"]')).not.toBeVisible();
  });

  test('should display validation errors', async ({ page }) => {
    await page.goto('/dashboard/production');
    await page.click('button:has-text("Add Production")');

    // Submit without filling required fields
    await page.click('button[type="submit"]');

    await expect(page.locator('text=Material is required')).toBeVisible();
    await expect(page.locator('text=Quantity must be positive')).toBeVisible();
  });
});
```

**Dashboard Test:**

```typescript
// apps/web-e2e/src/dashboard.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Dashboard', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/sign-in');
    await page.fill('input[name="identifier"]', 'test@example.com');
    await page.fill('input[name="password"]', 'TestPassword123!');
    await page.click('button[type="submit"]');
    await page.waitForURL('/dashboard');
  });

  test('should display KPI metric cards', async ({ page }) => {
    await expect(page.locator('text=Total Production Today')).toBeVisible();
    await expect(page.locator('text=Received Materials Today')).toBeVisible();
    await expect(page.locator('text=Total Dispatched Today')).toBeVisible();
    await expect(page.locator('text=Current Inventory Status')).toBeVisible();
  });

  test('should display metric values', async ({ page }) => {
    const productionCard = page.locator('[data-testid="kpi-production"]');

    await expect(productionCard).toBeVisible();
    await expect(productionCard.locator('.metric-value')).not.toBeEmpty();
    await expect(productionCard.locator('.metric-unit')).toContainText('TON');
  });

  test('should display trend indicators', async ({ page }) => {
    const trendIndicator = page
      .locator('[data-testid="trend-indicator"]')
      .first();

    await expect(trendIndicator).toBeVisible();
    await expect(trendIndicator).toHaveAttribute('data-trend', /up|down/);
  });

  test('should render charts', async ({ page }) => {
    await expect(
      page.locator('[data-testid="production-chart"]')
    ).toBeVisible();
    await expect(page.locator('[data-testid="inventory-chart"]')).toBeVisible();
  });

  test('should interact with chart tooltips', async ({ page }) => {
    const chart = page.locator('[data-testid="production-chart"]');

    await chart.hover();
    await expect(page.locator('.recharts-tooltip')).toBeVisible();
  });
});
```

**Export Flow Test:**

```typescript
// apps/web-e2e/src/export.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Export Flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/sign-in');
    await page.fill('input[name="identifier"]', 'test@example.com');
    await page.fill('input[name="password"]', 'TestPassword123!');
    await page.click('button[type="submit"]');
    await page.waitForURL('/dashboard');
  });

  test('should open export dialog', async ({ page }) => {
    await page.click('button:has-text("Export")');

    await expect(page.locator('[role="dialog"]')).toBeVisible();
    await expect(page.locator('text=Export Data')).toBeVisible();
  });

  test('should create export job', async ({ page }) => {
    await page.click('button:has-text("Export")');

    // Fill export form
    await page.selectOption('select[name="module"]', 'production');
    await page.selectOption('select[name="format"]', 'xlsx');
    await page.selectOption('select[name="granularity"]', 'daily');

    // Submit
    await page.click('button[type="submit"]');

    // Verify job created
    await expect(page.locator('.toast')).toContainText('Export job created');
  });

  test('should display export progress', async ({ page }) => {
    await page.click('button:has-text("Export")');
    await page.selectOption('select[name="module"]', 'production');
    await page.click('button[type="submit"]');

    // Wait for progress indicator
    await expect(page.locator('[data-testid="export-progress"]')).toBeVisible();
    await expect(page.locator('.progress-bar')).toBeVisible();
  });

  test('should download completed export', async ({ page }) => {
    // Assume export is completed
    await page.goto('/dashboard');

    const downloadPromise = page.waitForEvent('download');
    await page.click('[data-testid="download-export"]');

    const download = await downloadPromise;
    expect(download.suggestedFilename()).toMatch(/DeskOps_.*\.(xlsx|csv|pdf)/);
  });
});
```

#### Validation Checklist

- [ ] Playwright config verified with correct test projects
- [ ] WebServer configured to start dev server before tests
- [ ] Auth tests cover sign-in, sign-up, sign-out flows
- [ ] Production tests cover form submission end-to-end
- [ ] Dashboard tests cover metrics display and chart interactions
- [ ] Export tests cover job creation and download
- [ ] Test retries configured (2 retries in CI)
- [ ] Screenshots captured on failure
- [ ] Test reports generated (HTML + JUnit)
- [ ] Tests run in parallel efficiently

#### Documentation References

- `DeskOps-Configuration.md` (lines 986-1039)
- `DeskOps-ImplementationPlan.md` (lines 805-990)

---

## Phase 14: Final Review (1 Task)

- `DeskOps-Configuration.md` (lines 986-1039)
- `DeskOps-ImplementationPlan.md` (lines 805-990)

---

## Phase 14: Final Review (1 Task)

### Task 14.1: Review Completed Implementation of Phases 8-13

**Ticket ID:** `574628ea-438f-4725-909d-3bebc2b99e80`
**Size:** Story
**Priority:** High

**Objective:**

Comprehensive review of all implemented features to ensure quality, compliance, and functionality.

#### Review Checklist

**1. Pages & UI Components**

- [ ] All pages render without errors
- [ ] Responsive layouts work on mobile/tablet/desktop
- [ ] Design matches specifications from `DeskOps-Interface-Overview.md`
- [ ] Loading states display correctly
- [ ] Empty states show appropriate messages
- [ ] Error states provide clear feedback

**2. Forms & Validation**

- [ ] All forms validate with Zod schemas
- [ ] Required fields marked correctly
- [ ] Error messages display inline
- [ ] Success feedback via toast notifications
- [ ] Form resets after successful submission
- [ ] Disabled states prevent double submission

**3. API Routes**

- [ ] All routes follow `/api/[module]/[resource]` pattern
- [ ] NO versioned paths (`/api/v1/...`)
- [ ] Clerk authentication enforced
- [ ] Zod validation applied to request bodies
- [ ] Error handling uses `handleApiError` utility
- [ ] Rate limiting implemented where needed

**4. Type Safety**

- [ ] NO `any` types anywhere in codebase
- [ ] All interfaces properly typed
- [ ] Function parameters and return types explicit
- [ ] Generic types used correctly
- [ ] Type guards implemented where needed

**5. Constants & SSOT**

- [ ] All constants imported from `@deskops/constants`
- [ ] NO duplicate constant definitions
- [ ] Material, equipment, role definitions centralized
- [ ] Operation types referenced from SSOT
- [ ] UOM types consistent across codebase

**6. State Management**

- [ ] React Query hooks invalidate caches correctly
- [ ] Query keys use factory pattern
- [ ] Zustand stores persist to localStorage
- [ ] App store manages site, date, theme correctly
- [ ] Export store tracks job lifecycle

**7. Export System**

- [ ] Excel exports include frozen headers and filters
- [ ] PDF exports follow A4 format
- [ ] CSV exports are RFC 4180 compliant
- [ ] Progress tracking updates in real-time
- [ ] File hash generated for integrity
- [ ] Cleanup job removes expired exports

**8. Authentication**

- [ ] Clerk middleware protects routes
- [ ] Role-based access control works
- [ ] Sign-in/sign-up pages render correctly
- [ ] Custom `useAuth` hook provides role checking
- [ ] User metadata includes role information

**9. Testing**

- [ ] Unit tests achieve 80% coverage
- [ ] Integration tests cover key flows
- [ ] E2E tests cover critical user journeys
- [ ] All tests pass consistently
- [ ] Test utilities work correctly
- [ ] Mocks configured properly

**10. GZANSP Compliance**

- [ ] Zero assumptions made in implementation
- [ ] All decisions source-backed from documentation
- [ ] Single source of truth maintained
- [ ] Method-first architecture followed
- [ ] No banned terminology used
- [ ] Endpoint standardization enforced

#### Documentation References

- `DeskOps-ImplementationPlan.md` (lines 991-1026)
- `DeskOps-Interface-Overview.md` (entire document)
- `DeskOps-Backend.md` (entire document)
- `DeskOps-Frontend.md` (entire document)
- `DeskOps-DB-Prisma.md` (entire document)
- `DeskOps-Configuration.md` (entire document)
- `DeskOps-constants.md` (entire document)
- `DeskOps-Hooks.md` (entire document)
- `AGENTS.md` (entire document)

---

## ---

## Success Criteria

**Technical Requirements:**

- ✅ All TypeScript code strictly typed (NO `any`)
- ✅ All constants imported from centralized location
- ✅ All API routes follow `/api/[module]/[resource]` pattern
- ✅ All forms validate with Zod schemas
- ✅ Test coverage ≥ 80%

**Functional Requirements:**

- ✅ Inventory page displays calculated closing balances
- ✅ React Query hooks manage server state
- ✅ Zustand stores manage client state
- ✅ Export system generates valid files
- ✅ Authentication protects routes
- ✅ E2E tests cover critical flows

**Quality Requirements:**

- ✅ GZANSP compliance verified
- ✅ No banned terminology used
- ✅ Source-backed decisions documented
- ✅ Single source of truth maintained
- ✅ Method-first architecture followed

---

## Notes

- This document consolidates 13 remaining tasks from the original implementation plan
- All tasks follow GZANSP × AOC protocol strictly
- Implementation should proceed in phase order to maintain dependencies
- Each task includes validation checklists and documentation references
- Final review ensures all requirements met before deployment

---

**End of Document**
