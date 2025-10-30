# DeskOps Remaining Implementation Tasks

<!--markdownlint-disable MD024 MD025 MD036-->

**Document Version:** 1.0
**Date:** October 26, 2025
**Status:** Pending Implementation
**Phases Covered:** 9-13 (Remaining Tasks)
**Part:** 1 of 2 (Phases 9-11)

---

## Overview

This document consolidates all remaining implementation tasks for the DeskOps Construction & Demolition Recycling Management System. These tasks follow the GZANSP × AOC protocol and build upon the completed foundation (Equipment & Manpower tracking, Dashboard KPI cards, and Interactive Charts).

### Completed Foundation

- ✅ Equipment Tracking Page with Form and Chart
- ✅ Manpower Attendance Page with Form and Chart
- ✅ Dashboard KPI Metric Cards with Animated Counters
- ✅ Dashboard Interactive Chart Components (5 charts)

### Remaining Work

**8 tasks across 3 phases**

---

## Phase 9: Inventory Management (1 Task)

### Task 9.3: Build Inventory Snapshot Page with Data Table and Movement Chart

**Task ID:** `PH-9-TK-001-INV-SNAPSHOT`

![Size-Medium](https://img.shields.io/badge/Size-Medium-yellow?style=flat-square)
![Priority-Critical](https://img.shields.io/badge/Priority-Critical-red?style=flat-square)
![Completed](https://img.shields.io/badge/Status-Completed-brightgreen?style=flat-square)

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

```CSS
- oklch(0.63, 0.2, 18.13) #Red: Stock below threshold (< 100 TON)
- oklch(0.92, 0.15, 98.96) #Yellow: Stock warning (100-500 TON)
- oklch(0.8, 0.15, 155.88) #Green: Stock healthy (> 500 TON)
```

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

- [x] Table displays all columns with correct data types
- [x] Closing balance calculation is accurate
- [x] Color coding applies correctly based on thresholds
- [x] Filters work independently and in combination
- [x] Summary row calculates totals correctly
- [x] Chart renders trends accurately
- [x] Tabular number formatting aligns precisely
- [x] Responsive layout works on mobile/tablet/desktop

#### Documentation References

- `DeskOps-Interface-Overview.md` (lines 11-28)
- `DeskOps-DB-Prisma.md` (lines 193-245)

---

---

## Phase 10: State Management (3 Tasks)

### Task 10.1: Setup React Query Client with Caching Strategy and Provider

**Task ID:** `2e994d46-f4a5-49a5-8402-55a8877febf2`
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

- [x] QueryClient configured with correct default options
- [x] Query key factory provides consistent cache keys
- [x] React Query Devtools loads in development only
- [x] Error boundary catches query errors
- [x] QueryProvider wraps app in root layout

#### Documentation References

- `DeskOps-Hooks.md` (lines 1098-1160)
- `DeskOps-ImplementationPlan.md` (lines 498-682)

---

---

### Task 10.2: Create Custom React Query Hooks for All Data Modules

**Task ID:** `e6c077f2-53fc-4ba0-8531-2b092fb89874`
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

- [x] All hooks use proper TypeScript interfaces (NO any types)
- [x] Error handling implemented for all requests
- [x] Loading states exposed via isLoading
- [x] Mutation hooks invalidate related queries
- [x] Query keys use factory pattern
- [x] Stale times configured appropriately per module
- [x] Clerk authentication integrated in base API hook

#### Documentation References

- `DeskOps-Hooks.md` (lines 22-295)
- `DeskOps-ImplementationPlan.md` (lines 498-682)

---

---

### Task 10.3: Implement Zustand State Stores for App and Export Management

**Task ID:** `08a11a83-4faa-4360-96bf-a90f3f856f38`
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

- [x] App store persists to localStorage correctly
- [x] Export store manages job lifecycle (pending → processing → completed/failed)
- [x] Header component uses app store for site, date, theme
- [x] Sidebar component uses app store for collapse state
- [x] All state updates trigger re-renders
- [x] TypeScript interfaces are properly typed (NO any)
- [x] Persist middleware only saves selected fields

#### Documentation References

- `DeskOps-Hooks.md` (lines 413-583)
- `DeskOps-ImplementationPlan.md` (lines 498-682)

---

---

## Phase 11: Export System (3 Tasks)

### Task 11.1: Create Export API Routes with Job Management and Rate Limiting

**Task ID:** `b689605b-0b44-4ed3-8ebb-c7076f0bf52f`
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

- [x] All routes follow /api/exports/[resource] pattern (NO versioning)
- [x] Clerk authentication enforced on all routes
- [x] Rate limiting prevents abuse (max 5 active jobs)
- [x] Zod validation applied to request bodies
- [x] Audit trail created for completed exports
- [x] Signed URLs generated with 24-hour expiry
- [x] Error handling uses handleApiError utility
- [x] TypeScript types are strict (NO any)

#### Documentation References

- `DeskOps-Backend.md` (lines 704-798)
- `DeskOps-Interface-Overview.md` (lines 124-186)
- `DeskOps-ImplementationPlan.md` (lines 498-682)

---

### Task 11.2: Implement Export File Processors for Excel, PDF, and CSV Formats

**Task ID:** `48e11ab4-ef93-42ea-a114-ffa52b69e373`
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

- [x] Excel exports include frozen headers, filters, conditional formatting
- [x] PDF exports follow A4 format with proper margins
- [x] CSV exports are RFC 4180 compliant with UTF-8 BOM
- [x] Power BI CSV uses kebab_case columns
- [x] Progress tracking updates database correctly
- [x] File hash (SHA-256) generated for integrity verification
- [x] Cleanup job removes expired exports
- [x] All processors handle errors gracefully
- [x] TypeScript types are strict (NO any)

#### Documentation References

- `DeskOps-Backend.md` (lines 929-1044)
- `DeskOps-Interface-Overview.md` (lines 156-162)
- `DeskOps-ImplementationPlan.md` (lines 498-682)

---

### Task 11.3: Build Export Dialog and Progress Tracking UI Components

**Task ID:** `7551e02b-04c0-4991-ab6a-895399e7e8ae`
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

- [x] Export dialog validates form inputs with Zod
- [x] Progress component shows real-time updates via SSE
- [x] History component lists completed exports with download/retry
- [x] Export button added to Header component
- [x] SSE hook connects and reconnects automatically
- [x] Download triggers file download correctly
- [x] Retry re-queues failed jobs
- [x] All components use Zustand export store
- [x] TypeScript types are strict (NO any)

#### Documentation References

- `DeskOps-Hooks.md` (lines 586-735)
- `DeskOps-Interface-Overview.md` (lines 124-147)
- `DeskOps-ImplementationPlan.md` (lines 498-682)

---

**End of Document**
