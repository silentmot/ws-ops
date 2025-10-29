# Hooks & State Management

## DeskOps React Hooks and State Management System

### Overview

Comprehensive state management system using custom React hooks, React Query for server state, and Zustand for client state. Implements type-safe patterns with strict TypeScript and NO `any` types throughout the hook system.

---

## State Management Architecture

- **Server State**: React Query (TanStack Query) for API data fetching and caching
- **Client State**: Zustand for UI state and user preferences
- **Form State**: React Hook Form with Zod validation
- **Authentication State**: Clerk with custom wrapper hooks
- **Real-time Updates**: Server-Sent Events (SSE) with custom hooks
- **Type Safety**: Strict TypeScript with NO `any` types permitted

---

## Data Fetching Hooks

### Base API Hook

```typescript
// src/hooks/use-api.ts
import { useAuth } from '@clerk/nextjs';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  details?: unknown;
}

interface UseApiOptions {
  baseUrl?: string;
  headers?: Record<string, string>;
}

export function useApi(options: UseApiOptions = {}): {
  get: <T>(url: string) => Promise<ApiResponse<T>>;
  post: <T>(url: string, data: unknown) => Promise<ApiResponse<T>>;
  put: <T>(url: string, data: unknown) => Promise<ApiResponse<T>>;
  delete: <T>(url: string) => Promise<ApiResponse<T>>;
} {
  const { getToken } = useAuth();
  const { baseUrl = '', headers: customHeaders = {} } = options;

  const makeRequest = async <T>(
    url: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> => {
    try {
      const token = await getToken();
      const response = await fetch(`${baseUrl}${url}`, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          Authorization: token ? `Bearer ${token}` : '',
          ...customHeaders,
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

      return {
        success: true,
        data: responseData,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  };

  return {
    get: <T>(url: string) => makeRequest<T>(url),
    post: <T>(url: string, data: unknown) =>
      makeRequest<T>(url, {
        method: 'POST',
        body: JSON.stringify(data),
      }),
    put: <T>(url: string, data: unknown) =>
      makeRequest<T>(url, {
        method: 'PUT',
        body: JSON.stringify(data),
      }),
    delete: <T>(url: string) => makeRequest<T>(url, { method: 'DELETE' }),
  };
}
```

### Production Data Hooks

```typescript
// src/hooks/use-production.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useApi } from './use-api';
import { ProductionInput } from '@/lib/schemas/database';
import { createProduction } from '@/app/actions/production';

interface Production {
  id: string;
  siteId: string;
  date: string;
  shift?: string;
  materialId: string;
  qtyTon: number;
  operation: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
  material: {
    code: string;
    name: string;
    uom: string;
  };
  site: {
    code: string;
    name: string;
  };
}

interface UseProductionParams {
  siteId: string;
  dateFrom?: string;
  dateTo?: string;
  enabled?: boolean;
}

export function useProduction({
  siteId,
  dateFrom,
  dateTo,
  enabled = true,
}: UseProductionParams): {
  data: Production[];
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
} {
  const api = useApi();

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['production', siteId, dateFrom, dateTo],
    queryFn: async (): Promise<Production[]> => {
      const params = new URLSearchParams({ siteId });
      if (dateFrom) params.append('dateFrom', dateFrom);
      if (dateTo) params.append('dateTo', dateTo);

      const response = await api.get<{ productions: Production[] }>(
        `/api/production?${params}`
      );

      if (!response.success) {
        throw new Error(response.error || 'Failed to fetch production data');
      }

      return response.data?.productions || [];
    },
    enabled: enabled && !!siteId,
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: false,
  });

  return {
    data: data || [],
    isLoading,
    error,
    refetch,
  };
}

export function useCreateProduction(): {
  mutate: (data: ProductionInput) => Promise<void>;
  isLoading: boolean;
  error: Error | null;
} {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (data: ProductionInput): Promise<void> => {
      const result = await createProduction(data);
      if (!result.success) {
        throw new Error(result.error || 'Failed to create production record');
      }
    },
    onSuccess: () => {
      // Invalidate and refetch production queries
      queryClient.invalidateQueries({ queryKey: ['production'] });
      queryClient.invalidateQueries({ queryKey: ['dashboard-metrics'] });
    },
  });

  return {
    mutate: mutation.mutateAsync,
    isLoading: mutation.isPending,
    error: mutation.error,
  };
}
```

### Dashboard Metrics Hook

```typescript
// src/hooks/use-dashboard-metrics.ts
import { useQuery } from '@tanstack/react-query';
import { useApi } from './use-api';

interface DashboardMetrics {
  totalProduction: {
    current: number;
    previous: number;
    percentageChange: number; // Calculated as ((current - previous) / previous) * 100
  };
  totalDispatched: {
    current: number;
    previous: number;
    percentageChange: number; // Calculated as ((current - previous) / previous) * 100
  };
  totalReceived: {
    current: number;
    previous: number;
    percentageChange: number; // Calculated as ((current - previous) / previous) * 100
  };
  equipmentUtilization: {
    current: number;
    previous: number;
    percentageChange: number; // Calculated as ((current - previous) / previous) * 100
  };
  currentInventoryStatus: {
    current: number;
    previous: number;
    percentageChange: number; // Calculated as ((current - previous) / previous) * 100
    // Note: If previous === 0, returns 100 if current > 0, else 0
  };
}

interface UseDashboardMetricsParams {
  siteId: string;
  enabled?: boolean;
}

export function useDashboardMetrics({
  siteId,
  enabled = true,
}: UseDashboardMetricsParams): {
  data: DashboardMetrics | undefined;
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
} {
  const api = useApi();

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['dashboard-metrics', siteId],
    queryFn: async (): Promise<DashboardMetrics> => {
      const response = await api.get<{ metrics: DashboardMetrics }>(
        `/api/dashboard/metrics?siteId=${siteId}`
      );

      if (!response.success) {
        throw new Error(response.error || 'Failed to fetch dashboard metrics');
      }

      return (
        response.data?.metrics || {
          totalProduction: { current: 0, previous: 0, percentageChange: 0 },
          totalDispatched: { current: 0, previous: 0, percentageChange: 0 },
          totalReceived: { current: 0, previous: 0, percentageChange: 0 },
          equipmentUtilization: {
            current: 0,
            previous: 0,
            percentageChange: 0,
          },
          currentInventoryStatus: {
            current: 0,
            previous: 0,
            percentageChange: 0,
          },
        }
      );
    },
    enabled: enabled && !!siteId,
    refetchInterval: 5 * 60 * 1000, // Refetch every 5 minutes
    staleTime: 2 * 60 * 1000, // 2 minutes
  });

  return {
    data,
    isLoading,
    error,
    refetch,
  };
}
```

### Equipment Tracking Hooks

```typescript
// src/hooks/use-equipment.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useApi } from './use-api';
import { EquipmentLogInput } from '@/lib/schemas/database';

interface EquipmentLog {
  id: string;
  siteId: string;
  date: string;
  equipmentId: string;
  hours: number;
  count: number;
  shift?: string;
  status?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
  equipment: {
    code: string;
    name: string;
    type: string;
  };
  site: {
    code: string;
    name: string;
  };
}

interface UseEquipmentParams {
  siteId: string;
  dateFrom?: string;
  dateTo?: string;
  enabled?: boolean;
}

export function useEquipment({
  siteId,
  dateFrom,
  dateTo,
  enabled = true,
}: UseEquipmentParams): {
  data: EquipmentLog[];
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
} {
  const api = useApi();

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['equipment', siteId, dateFrom, dateTo],
    queryFn: async (): Promise<EquipmentLog[]> => {
      const params = new URLSearchParams({ siteId });
      if (dateFrom) params.append('dateFrom', dateFrom);
      if (dateTo) params.append('dateTo', dateTo);

      const response = await api.get<{ equipmentLogs: EquipmentLog[] }>(
        `/api/equipment?${params}`
      );

      if (!response.success) {
        throw new Error(response.error || 'Failed to fetch equipment data');
      }

      return response.data?.equipmentLogs || [];
    },
    enabled: enabled && !!siteId,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  return {
    data: data || [],
    isLoading,
    error,
    refetch,
  };
}

export function useCreateEquipmentLog(): {
  mutate: (data: EquipmentLogInput) => Promise<void>;
  isLoading: boolean;
  error: Error | null;
} {
  const queryClient = useQueryClient();
  const api = useApi();

  const mutation = useMutation({
    mutationFn: async (data: EquipmentLogInput): Promise<void> => {
      const response = await api.post('/api/equipment', data);
      if (!response.success) {
        throw new Error(response.error || 'Failed to create equipment log');
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['equipment'] });
      queryClient.invalidateQueries({ queryKey: ['dashboard-metrics'] });
    },
  });

  return {
    mutate: mutation.mutateAsync,
    isLoading: mutation.isPending,
    error: mutation.error,
  };
}
```

### Dispatch Management Hooks

```typescript
// src/hooks/use-dispatch.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useApi } from './use-api';
import { queryKeys } from '@/lib/query-keys';
import type { Dispatch, DispatchInput } from '@deskops/database';

interface DispatchWithRelations extends Dispatch {
  material: { code: string; name: string; uom: string };
  site: { code: string; name: string };
}

interface DispatchListResponse {
  dispatches: DispatchWithRelations[];
}

interface DispatchParams {
  siteId: string;
  dateFrom?: string;
  dateTo?: string;
  enabled?: boolean;
}

// Query hook for fetching dispatch list
export function useDispatch(params: DispatchParams) {
  const api = useApi();

  return useQuery({
    queryKey: queryKeys.dispatch.list(params),
    queryFn: async (): Promise<DispatchWithRelations[]> => {
      const searchParams = new URLSearchParams({ siteId: params.siteId });
      if (params.dateFrom) searchParams.append('dateFrom', params.dateFrom);
      if (params.dateTo) searchParams.append('dateTo', params.dateTo);

      const response = await api.get<DispatchListResponse>(
        `/api/dispatch?${searchParams}`
      );

      if (!response.success) {
        throw new Error(response.error || 'Failed to fetch dispatch data');
      }

      return response.data?.dispatches || [];
    },
    enabled: params.enabled !== false && !!params.siteId,
    staleTime: 5 * 60 * 1000,
  });
}

// Query hook for fetching single dispatch by ID
export function useDispatchById(id: string, enabled = true) {
  const api = useApi();

  return useQuery({
    queryKey: queryKeys.dispatch.detail(id),
    queryFn: async (): Promise<DispatchWithRelations> => {
      const response = await api.get<{ dispatch: DispatchWithRelations }>(
        `/api/dispatch/${id}`
      );

      if (!response.success) {
        throw new Error(response.error || 'Failed to fetch dispatch record');
      }

      if (!response.data?.dispatch) {
        throw new Error('Dispatch record not found');
      }

      return response.data.dispatch;
    },
    enabled: enabled && !!id,
    staleTime: 5 * 60 * 1000,
  });
}

// Mutation hook for creating dispatch
export function useCreateDispatch() {
  const queryClient = useQueryClient();
  const api = useApi();

  return useMutation({
    mutationFn: async (data: DispatchInput) => {
      const response = await api.post<{ dispatch: Dispatch }>(
        '/api/dispatch',
        data
      );

      if (!response.success) {
        throw new Error(response.error || 'Failed to create dispatch record');
      }

      return response.data?.dispatch;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.dispatch.all });
      queryClient.invalidateQueries({ queryKey: queryKeys.dashboard.all });
      queryClient.invalidateQueries({ queryKey: queryKeys.inventory.all });
    },
  });
}

// Mutation hook for updating dispatch
export function useUpdateDispatch() {
  const queryClient = useQueryClient();
  const api = useApi();

  return useMutation({
    mutationFn: async ({
      id,
      data,
    }: {
      id: string;
      data: Partial<DispatchInput>;
    }) => {
      const response = await api.put<{ dispatch: Dispatch }>(
        `/api/dispatch/${id}`,
        data
      );

      if (!response.success) {
        throw new Error(response.error || 'Failed to update dispatch record');
      }

      return response.data?.dispatch;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.dispatch.all });
      queryClient.invalidateQueries({
        queryKey: queryKeys.dispatch.detail(variables.id),
      });
      queryClient.invalidateQueries({ queryKey: queryKeys.dashboard.all });
      queryClient.invalidateQueries({ queryKey: queryKeys.inventory.all });
    },
  });
}

// Mutation hook for deleting dispatch
export function useDeleteDispatch() {
  const queryClient = useQueryClient();
  const api = useApi();

  return useMutation({
    mutationFn: async (id: string) => {
      const response = await api.delete<{ success: boolean }>(
        `/api/dispatch/${id}`
      );

      if (!response.success) {
        throw new Error(response.error || 'Failed to delete dispatch record');
      }

      return response.data;
    },
    onSuccess: (_, id) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.dispatch.all });
      queryClient.removeQueries({ queryKey: queryKeys.dispatch.detail(id) });
      queryClient.invalidateQueries({ queryKey: queryKeys.dashboard.all });
      queryClient.invalidateQueries({ queryKey: queryKeys.inventory.all });
    },
  });
}
```

**Purpose:** React Query hooks for managing dispatch transactions (material shipments to customers). Critical for inventory calculation and revenue tracking.

**Hook: `useDispatch`**
- **Parameters:**
  - `siteId` (required): Site filter
  - `dateFrom` (optional): Start date for range filter
  - `dateTo` (optional): End date for range filter
  - `enabled` (optional): Query enablement flag (default: true)
- **Returns:** Query result with dispatch array, loading state, error, and refetch function
- **Cache Configuration:** 5-minute stale time, invalidated on mutations
- **Related Queries:** Invalidates dashboard and inventory caches on mutations

**Hook: `useDispatchById`**
- **Parameters:**
  - `id` (required): Dispatch record ID
  - `enabled` (optional): Query enablement flag (default: true)
- **Returns:** Query result with single dispatch record
- **Use Case:** Detail views, edit forms

**Hook: `useCreateDispatch`**
- **Parameters:** Dispatch input data
- **Side Effects:** Invalidates dispatch, dashboard, and inventory query caches
- **Use Case:** Create new dispatch transaction

**Hook: `useUpdateDispatch`**
- **Parameters:** Dispatch ID and partial update data
- **Side Effects:** Invalidates dispatch (all + detail), dashboard, and inventory caches
- **Use Case:** Edit existing dispatch record

**Hook: `useDeleteDispatch`**
- **Parameters:** Dispatch ID
- **Side Effects:** Invalidates dispatch cache, removes detail query, invalidates dashboard and inventory
- **Use Case:** Delete dispatch transaction

**Business Impact:**
- Affects inventory calculations (`inventory = production + received - dispatched`)
- Invalidates dashboard metrics (total dispatched, inventory status)
- Critical for revenue and customer order tracking

### Received Materials Hooks

```typescript
// src/hooks/use-received.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useApi } from './use-api';
import { queryKeys } from '@/lib/query-keys';
import type {
  ReceivedMaterial,
  ReceivedMaterialInput,
} from '@deskops/database';

interface ReceivedWithRelations extends ReceivedMaterial {
  material: { code: string; name: string; uom: string };
  site: { code: string; name: string };
}

interface ReceivedListResponse {
  receivedMaterials: ReceivedWithRelations[];
}

interface ReceivedParams {
  siteId: string;
  dateFrom?: string;
  dateTo?: string;
  enabled?: boolean;
}

// Query hook for fetching received materials list
export function useReceived(params: ReceivedParams) {
  const api = useApi();

  return useQuery({
    queryKey: queryKeys.received.list(params),
    queryFn: async (): Promise<ReceivedWithRelations[]> => {
      const searchParams = new URLSearchParams({ siteId: params.siteId });
      if (params.dateFrom) searchParams.append('dateFrom', params.dateFrom);
      if (params.dateTo) searchParams.append('dateTo', params.dateTo);

      const response = await api.get<ReceivedListResponse>(
        `/api/received?${searchParams}`
      );

      if (!response.success) {
        throw new Error(
          response.error || 'Failed to fetch received materials data'
        );
      }

      return response.data?.receivedMaterials || [];
    },
    enabled: params.enabled !== false && !!params.siteId,
    staleTime: 5 * 60 * 1000,
  });
}

// Query hook for fetching single received material by ID
export function useReceivedById(id: string, enabled = true) {
  const api = useApi();

  return useQuery({
    queryKey: queryKeys.received.detail(id),
    queryFn: async (): Promise<ReceivedWithRelations> => {
      const response = await api.get<{ received: ReceivedWithRelations }>(
        `/api/received/${id}`
      );

      if (!response.success) {
        throw new Error(
          response.error || 'Failed to fetch received material record'
        );
      }

      if (!response.data?.received) {
        throw new Error('Received material record not found');
      }

      return response.data.received;
    },
    enabled: enabled && !!id,
    staleTime: 5 * 60 * 1000,
  });
}

// Mutation hook for creating received material
export function useCreateReceived() {
  const queryClient = useQueryClient();
  const api = useApi();

  return useMutation({
    mutationFn: async (data: ReceivedMaterialInput) => {
      const response = await api.post<{ received: ReceivedMaterial }>(
        '/api/received',
        data
      );

      if (!response.success) {
        throw new Error(
          response.error || 'Failed to create received material record'
        );
      }

      return response.data?.received;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.received.all });
      queryClient.invalidateQueries({ queryKey: queryKeys.dashboard.all });
      queryClient.invalidateQueries({ queryKey: queryKeys.inventory.all });
    },
  });
}

// Mutation hook for updating received material
export function useUpdateReceived() {
  const queryClient = useQueryClient();
  const api = useApi();

  return useMutation({
    mutationFn: async ({
      id,
      data,
    }: {
      id: string;
      data: Partial<ReceivedMaterialInput>;
    }) => {
      const response = await api.put<{ received: ReceivedMaterial }>(
        `/api/received/${id}`,
        data
      );

      if (!response.success) {
        throw new Error(
          response.error || 'Failed to update received material record'
        );
      }

      return response.data?.received;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.received.all });
      queryClient.invalidateQueries({
        queryKey: queryKeys.received.detail(variables.id),
      });
      queryClient.invalidateQueries({ queryKey: queryKeys.dashboard.all });
      queryClient.invalidateQueries({ queryKey: queryKeys.inventory.all });
    },
  });
}

// Mutation hook for deleting received material
export function useDeleteReceived() {
  const queryClient = useQueryClient();
  const api = useApi();

  return useMutation({
    mutationFn: async (id: string) => {
      const response = await api.delete<{ success: boolean }>(
        `/api/received/${id}`
      );

      if (!response.success) {
        throw new Error(
          response.error || 'Failed to delete received material record'
        );
      }

      return response.data;
    },
    onSuccess: (_, id) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.received.all });
      queryClient.removeQueries({ queryKey: queryKeys.received.detail(id) });
      queryClient.invalidateQueries({ queryKey: queryKeys.dashboard.all });
      queryClient.invalidateQueries({ queryKey: queryKeys.inventory.all });
    },
  });
}
```

**Purpose:** React Query hooks for managing received Construction & Demolition Waste (CDW) materials. Essential for inventory calculation and waste intake tracking.

**Hook: `useReceived`**
- **Parameters:**
  - `siteId` (required): Site filter
  - `dateFrom` (optional): Start date for range filter
  - `dateTo` (optional): End date for range filter
  - `enabled` (optional): Query enablement flag (default: true)
- **Returns:** Query result with received materials array, loading state, error, and refetch function
- **Cache Configuration:** 5-minute stale time, invalidated on mutations

**Hook: `useReceivedById`**
- **Parameters:**
  - `id` (required): Received material record ID
  - `enabled` (optional): Query enablement flag (default: true)
- **Returns:** Query result with single received material record
- **Use Case:** Detail views, edit forms

**Hook: `useCreateReceived`**
- **Parameters:** ReceivedMaterialInput data (siteId, date, materialId, qtyTon, source, vehicleRef, notes)
- **Side Effects:** Invalidates received, dashboard, and inventory query caches
- **Use Case:** Record new material intake

**Hook: `useUpdateReceived`**
- **Parameters:** Record ID and partial update data
- **Side Effects:** Invalidates received (all + detail), dashboard, and inventory caches
- **Use Case:** Correct received material records

**Hook: `useDeleteReceived`**
- **Parameters:** Record ID
- **Side Effects:** Invalidates received cache, removes detail query, invalidates dashboard and inventory
- **Use Case:** Remove erroneous received material entries

**Business Impact:**
- Critical for inventory formula (`inventory = production + received - dispatched`)
- Tracks CDW intake volumes for compliance reporting
- Affects dashboard metrics (total received, inventory trends)
- Used for material sourcing analytics

### Manpower Attendance Hooks

```typescript
// src/hooks/use-manpower.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useApi } from './use-api';
import { queryKeys } from '@/lib/query-keys';
import type { ManpowerLog } from '@deskops/database';

interface ManpowerLogInput {
  siteId: string;
  date: Date;
  roleId: string;
  headcount: number;
  hours: number;
  shift?: string;
  notes?: string;
}

interface ManpowerLogWithRelations extends ManpowerLog {
  role: { code: string; name: string };
  site: { code: string; name: string };
}

interface ManpowerLogListResponse {
  manpowerLogs: ManpowerLogWithRelations[];
}

interface ManpowerParams {
  siteId: string;
  dateFrom?: string;
  dateTo?: string;
  enabled?: boolean;
}

// Query hook for fetching manpower logs
export function useManpower(params: ManpowerParams) {
  const api = useApi();

  return useQuery({
    queryKey: queryKeys.manpower.list(params),
    queryFn: async (): Promise<ManpowerLogWithRelations[]> => {
      const searchParams = new URLSearchParams({ siteId: params.siteId });
      if (params.dateFrom) searchParams.append('dateFrom', params.dateFrom);
      if (params.dateTo) searchParams.append('dateTo', params.dateTo);

      const response = await api.get<ManpowerLogListResponse>(
        `/api/manpower?${searchParams}`
      );

      if (!response.success) {
        throw new Error(response.error || 'Failed to fetch manpower logs');
      }

      return response.data?.manpowerLogs || [];
    },
    enabled: params.enabled !== false && !!params.siteId,
    staleTime: 5 * 60 * 1000,
  });
}

// Mutation hook for creating manpower log
export function useCreateManpower() {
  const queryClient = useQueryClient();
  const api = useApi();

  return useMutation({
    mutationFn: async (data: ManpowerLogInput) => {
      const response = await api.post<{ log: ManpowerLog }>(
        '/api/manpower',
        data
      );

      if (!response.success) {
        throw new Error(response.error || 'Failed to create manpower log');
      }

      return response.data?.log;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.manpower.all });
      queryClient.invalidateQueries({ queryKey: queryKeys.dashboard.all });
    },
  });
}

// Mutation hook for updating manpower log
export function useUpdateManpower() {
  const queryClient = useQueryClient();
  const api = useApi();

  return useMutation({
    mutationFn: async ({
      id,
      data,
    }: {
      id: string;
      data: Partial<ManpowerLogInput>;
    }) => {
      const response = await api.put<{ log: ManpowerLog }>(
        `/api/manpower/${id}`,
        data
      );

      if (!response.success) {
        throw new Error(response.error || 'Failed to update manpower log');
      }

      return response.data?.log;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.manpower.all });
      queryClient.invalidateQueries({ queryKey: queryKeys.dashboard.all });
    },
  });
}

// Mutation hook for deleting manpower log
export function useDeleteManpower() {
  const queryClient = useQueryClient();
  const api = useApi();

  return useMutation({
    mutationFn: async (id: string) => {
      const response = await api.delete<{ success: boolean }>(
        `/api/manpower/${id}`
      );

      if (!response.success) {
        throw new Error(response.error || 'Failed to delete manpower log');
      }

      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.manpower.all });
      queryClient.invalidateQueries({ queryKey: queryKeys.dashboard.all });
    },
  });
}
```

**Purpose:** React Query hooks for managing manpower attendance logs and labor hour tracking. Used for labor cost analysis and operational planning.

**Hook: `useManpower`**
- **Parameters:**
  - `siteId` (required): Site filter
  - `dateFrom` (optional): Start date for range filter
  - `dateTo` (optional): End date for range filter
  - `enabled` (optional): Query enablement flag (default: true)
- **Returns:** Query result with manpower logs array, loading state, error, and refetch function
- **Cache Configuration:** 5-minute stale time, invalidated on mutations

**Hook: `useCreateManpower`**
- **Parameters:** ManpowerLogInput data (siteId, date, roleId, headcount, hours, shift, notes)
- **Side Effects:** Invalidates manpower and dashboard query caches
- **Use Case:** Record daily attendance and labor hours
- **Data Tracked:**
  - `roleId`: References ManpowerRole (Equipment Driver, Crusher Operator, etc.)
  - `headcount`: Number of workers
  - `hours`: Total labor hours (can be greater than headcount × 8 for overtime)
  - `shift`: Optional shift identifier (Morning, Evening, Night)

**Hook: `useUpdateManpower`**
- **Parameters:** Log ID and partial update data
- **Side Effects:** Invalidates manpower and dashboard caches
- **Use Case:** Correct attendance records

**Hook: `useDeleteManpower`**
- **Parameters:** Log ID
- **Side Effects:** Invalidates manpower and dashboard caches
- **Use Case:** Remove erroneous attendance entries

**Business Impact:**
- Tracks labor costs and efficiency metrics
- Used for manpower analytics (by role, shift, site)
- Affects dashboard metrics (equipment utilization correlates with manpower)
- Critical for operational planning and scheduling
- Supports compliance reporting for labor regulations

**Relationship to Other Modules:**
- **Equipment Logs:** Operator hours should correlate with equipment hours
- **Production:** Production efficiency can be analyzed against labor hours
- **Dashboard:** Contributes to overall operational KPIs

---

## Client State Management (Zustand)

### App State Store

```typescript
// src/stores/app-store.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { DEFAULT_SITE_CODE } from '@/lib/constants';

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
      // Initial state
      selectedSiteId: DEFAULT_SITE_CODE,
      dateRange: {
        from: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // 30 days ago
        to: new Date(),
      },
      sidebarCollapsed: false,
      theme: 'system',
      dashboardRefreshInterval: 5 * 60 * 1000, // 5 minutes
      exportFormat: 'xlsx',

      // Actions
      setSelectedSiteId: (siteId: string) => set({ selectedSiteId: siteId }),

      setDateRange: (range: DateRange) => set({ dateRange: range }),

      setSidebarCollapsed: (collapsed: boolean) =>
        set({ sidebarCollapsed: collapsed }),

      setTheme: (theme: 'light' | 'dark' | 'system') => set({ theme }),

      setDashboardRefreshInterval: (interval: number) =>
        set({ dashboardRefreshInterval: interval }),

      setExportFormat: (format: 'xlsx' | 'csv' | 'pdf') =>
        set({ exportFormat: format }),
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

### Export Job State Store

```typescript
// src/stores/export-store.ts
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
  // Export jobs
  activeJobs: ExportJob[];
  completedJobs: ExportJob[];

  // Actions
  addJob: (job: ExportJob) => void;
  updateJob: (id: string, updates: Partial<ExportJob>) => void;
  removeJob: (id: string) => void;
  clearCompletedJobs: () => void;

  // UI state
  exportDialogOpen: boolean;
  setExportDialogOpen: (open: boolean) => void;
  selectedModule: string;
  setSelectedModule: (module: string) => void;
}

export const useExportStore = create<ExportState>((set, get) => ({
  // Initial state
  activeJobs: [],
  completedJobs: [],
  exportDialogOpen: false,
  selectedModule: 'production',

  // Actions
  addJob: (job: ExportJob) =>
    set((state) => ({
      activeJobs: [...state.activeJobs, job],
    })),

  updateJob: (id: string, updates: Partial<ExportJob>) =>
    set((state) => {
      const updatedJob = {
        ...state.activeJobs.find((j) => j.id === id),
        ...updates,
      };

      // Move to completed if status is completed or failed
      if (updates.status === 'completed' || updates.status === 'failed') {
        return {
          activeJobs: state.activeJobs.filter((j) => j.id !== id),
          completedJobs: [...state.completedJobs, updatedJob],
        };
      }

      return {
        activeJobs: state.activeJobs.map((job) =>
          job.id === id ? { ...job, ...updates } : job
        ),
      };
    }),

  removeJob: (id: string) =>
    set((state) => ({
      activeJobs: state.activeJobs.filter((job) => job.id !== id),
      completedJobs: state.completedJobs.filter((job) => job.id !== id),
    })),

  clearCompletedJobs: () => set({ completedJobs: [] }),

  setExportDialogOpen: (open: boolean) => set({ exportDialogOpen: open }),

  setSelectedModule: (module: string) => set({ selectedModule: module }),
}));
```

---

## Real-time Data Hooks

### Server-Sent Events Hook

```typescript
// src/hooks/use-sse.ts
import { useEffect, useRef, useState } from 'react';
import { useAuth } from '@clerk/nextjs';

interface UseSSEOptions {
  enabled?: boolean;
  reconnectInterval?: number;
  maxReconnectAttempts?: number;
}

export function useSSE<T>(
  url: string,
  options: UseSSEOptions = {}
): {
  data: T | null;
  isConnected: boolean;
  error: string | null;
  reconnect: () => void;
} {
  const {
    enabled = true,
    reconnectInterval = 5000,
    maxReconnectAttempts = 5,
  } = options;

  const { getToken } = useAuth();
  const [data, setData] = useState<T | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const eventSourceRef = useRef<EventSource | null>(null);
  const reconnectAttemptsRef = useRef(0);

  const connect = async (): Promise<void> => {
    try {
      const token = await getToken();
      const eventSource = new EventSource(`${url}?token=${token}`);

      eventSource.onopen = () => {
        setIsConnected(true);
        setError(null);
        reconnectAttemptsRef.current = 0;
      };

      eventSource.onmessage = (event) => {
        try {
          const parsedData = JSON.parse(event.data) as T;
          setData(parsedData);
        } catch (err) {
          console.error('Failed to parse SSE data:', err);
        }
      };

      eventSource.onerror = () => {
        setIsConnected(false);
        setError('Connection lost');
        eventSource.close();

        // Attempt reconnection
        if (reconnectAttemptsRef.current < maxReconnectAttempts) {
          reconnectAttemptsRef.current++;
          setTimeout(connect, reconnectInterval);
        }
      };

      eventSourceRef.current = eventSource;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Connection failed');
    }
  };

  const disconnect = (): void => {
    if (eventSourceRef.current) {
      eventSourceRef.current.close();
      eventSourceRef.current = null;
    }
    setIsConnected(false);
  };

  const reconnect = (): void => {
    disconnect();
    reconnectAttemptsRef.current = 0;
    connect();
  };

  useEffect(() => {
    if (enabled) {
      connect();
    }

    return disconnect;
  }, [enabled, url]);

  return {
    data,
    isConnected,
    error,
    reconnect,
  };
}
```

### Export Progress Hook

```typescript
// src/hooks/use-export-progress.ts
import { useEffect } from 'react';
import { useSSE } from './use-sse';
import { useExportStore } from '@/stores/export-store';

interface ExportProgressData {
  jobId: string;
  progress: number;
  status: string;
  downloadUrl?: string;
  errorMessage?: string;
}

export function useExportProgress(): {
  isConnected: boolean;
  error: string | null;
} {
  const { updateJob } = useExportStore();

  const { data, isConnected, error } = useSSE<ExportProgressData>(
    '/api/exports/progress'
  );

  useEffect(() => {
    if (data) {
      updateJob(data.jobId, {
        progress: data.progress,
        status: data.status as
          | 'pending'
          | 'processing'
          | 'completed'
          | 'failed',
        downloadUrl: data.downloadUrl,
        errorMessage: data.errorMessage,
      });
    }
  }, [data, updateJob]);

  return {
    isConnected,
    error,
  };
}
```

---

## Form State Hooks

### Generic Form Hook

```typescript
// src/hooks/use-form-state.ts
import { useState, useCallback } from 'react';
import { ZodSchema, ZodError } from 'zod';

interface UseFormStateOptions<T> {
  initialValues: T;
  validationSchema?: ZodSchema<T>;
  onSubmit?: (values: T) => Promise<void> | void;
}

interface FormState<T> {
  values: T;
  errors: Partial<Record<keyof T, string>>;
  touched: Partial<Record<keyof T, boolean>>;
  isSubmitting: boolean;
  isValid: boolean;
}

export function useFormState<T extends Record<string, unknown>>({
  initialValues,
  validationSchema,
  onSubmit,
}: UseFormStateOptions<T>): {
  state: FormState<T>;
  setValue: (field: keyof T, value: unknown) => void;
  setValues: (values: Partial<T>) => void;
  setFieldTouched: (field: keyof T, touched?: boolean) => void;
  validateField: (field: keyof T) => boolean;
  validateForm: () => boolean;
  handleSubmit: () => Promise<void>;
  reset: () => void;
} {
  const [state, setState] = useState<FormState<T>>({
    values: initialValues,
    errors: {},
    touched: {},
    isSubmitting: false,
    isValid: false,
  });

  const setValue = useCallback((field: keyof T, value: unknown): void => {
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [field]: value,
      },
    }));
  }, []);

  const setValues = useCallback((values: Partial<T>): void => {
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        ...values,
      },
    }));
  }, []);

  const setFieldTouched = useCallback(
    (field: keyof T, touched = true): void => {
      setState((prev) => ({
        ...prev,
        touched: {
          ...prev.touched,
          [field]: touched,
        },
      }));
    },
    []
  );

  const validateField = useCallback(
    (field: keyof T): boolean => {
      if (!validationSchema) return true;

      try {
        validationSchema.parse(state.values);
        setState((prev) => ({
          ...prev,
          errors: {
            ...prev.errors,
            [field]: undefined,
          },
        }));
        return true;
      } catch (error) {
        if (error instanceof ZodError) {
          const fieldError = error.errors.find((err) =>
            err.path.includes(field as string)
          );
          if (fieldError) {
            setState((prev) => ({
              ...prev,
              errors: {
                ...prev.errors,
                [field]: fieldError.message,
              },
            }));
          }
        }
        return false;
      }
    },
    [state.values, validationSchema]
  );

  const validateForm = useCallback((): boolean => {
    if (!validationSchema) return true;

    try {
      validationSchema.parse(state.values);
      setState((prev) => ({
        ...prev,
        errors: {},
        isValid: true,
      }));
      return true;
    } catch (error) {
      if (error instanceof ZodError) {
        const errors: Partial<Record<keyof T, string>> = {};
        error.errors.forEach((err) => {
          const field = err.path[0] as keyof T;
          if (field) {
            errors[field] = err.message;
          }
        });
        setState((prev) => ({
          ...prev,
          errors,
          isValid: false,
        }));
      }
      return false;
    }
  }, [state.values, validationSchema]);

  const handleSubmit = useCallback(async (): Promise<void> => {
    if (!validateForm() || !onSubmit) return;

    setState((prev) => ({ ...prev, isSubmitting: true }));
    try {
      await onSubmit(state.values);
    } catch (error) {
      console.error('Form submission failed:', error);
    } finally {
      setState((prev) => ({ ...prev, isSubmitting: false }));
    }
  }, [state.values, validateForm, onSubmit]);

  const reset = useCallback((): void => {
    setState({
      values: initialValues,
      errors: {},
      touched: {},
      isSubmitting: false,
      isValid: false,
    });
  }, [initialValues]);

  return {
    state,
    setValue,
    setValues,
    setFieldTouched,
    validateField,
    validateForm,
    handleSubmit,
    reset,
  };
}
```

---

## Authentication Hooks

### Enhanced Clerk Hook

```typescript
// src/hooks/use-auth.ts
import { useUser, useAuth as useClerkAuth } from '@clerk/nextjs';
import { UserRole } from '@/lib/constants';

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

---

## Data Export Hooks

### Export Management Hook

```typescript
// src/hooks/use-export-manager.ts
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useApi } from './use-api';
import { useExportStore } from '@/stores/export-store';
import { toast } from 'sonner';

interface ExportJobRequest {
  siteId: string;
  module:
    | 'production'
    | 'dispatch'
    | 'received'
    | 'equipment'
    | 'manpower'
    | 'inventory';
  dateFrom: string;
  dateTo: string;
  granularity: 'daily' | 'weekly' | 'monthly';
  format: 'xlsx' | 'csv' | 'pdf';
}

interface ExportJob {
  id: string;
  siteId: string;
  module: string;
  format: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  progress: number;
  downloadUrl?: string;
  errorMessage?: string;
  createdAt: string;
}

export function useExportManager(): {
  createExportJob: (request: ExportJobRequest) => Promise<void>;
  downloadFile: (job: ExportJob) => void;
  retryJob: (jobId: string) => Promise<void>;
  isCreating: boolean;
  jobs: ExportJob[];
  isLoadingJobs: boolean;
} {
  const api = useApi();
  const queryClient = useQueryClient();
  const { addJob } = useExportStore();

  // Fetch user's export jobs
  const { data: jobs = [], isLoading: isLoadingJobs } = useQuery({
    queryKey: ['export-jobs'],
    queryFn: async (): Promise<ExportJob[]> => {
      const response = await api.get<{ jobs: ExportJob[] }>('/api/exports');
      if (!response.success) {
        throw new Error(response.error || 'Failed to fetch export jobs');
      }
      return response.data?.jobs || [];
    },
    refetchInterval: 10000, // Refetch every 10 seconds
  });

  // Create export job mutation
  const createJobMutation = useMutation({
    mutationFn: async (request: ExportJobRequest): Promise<ExportJob> => {
      const response = await api.post<{ exportJob: ExportJob }>(
        '/api/exports',
        request
      );
      if (!response.success) {
        throw new Error(response.error || 'Failed to create export job');
      }
      return response.data!.exportJob;
    },
    onSuccess: (job) => {
      addJob(job);
      queryClient.invalidateQueries({ queryKey: ['export-jobs'] });
      toast.success('Export job created successfully');
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to create export job');
    },
  });

  // Retry job mutation
  const retryJobMutation = useMutation({
    mutationFn: async (jobId: string): Promise<void> => {
      const response = await api.post(`/api/exports/${jobId}/retry`, {});
      if (!response.success) {
        throw new Error(response.error || 'Failed to retry export job');
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['export-jobs'] });
      toast.success('Export job retry initiated');
    },
    onError: (error) => {
      toast.error(error.message || 'Failed to retry export job');
    },
  });

  const downloadFile = (job: ExportJob): void => {
    if (!job.downloadUrl) {
      toast.error('Download URL not available');
      return;
    }

    // Create temporary link and trigger download
    const link = document.createElement('a');
    link.href = job.downloadUrl;
    link.download = `DeskOps_${job.module}_${job.id}.${job.format}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast.success('Download started');
  };

  return {
    createExportJob: createJobMutation.mutateAsync,
    downloadFile,
    retryJob: retryJobMutation.mutateAsync,
    isCreating: createJobMutation.isPending,
    jobs,
    isLoadingJobs,
  };
}
```

---

## Query Client Configuration

### React Query Setup

```typescript
// src/lib/query-client.ts
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

### Query Provider Component

```typescript
// src/components/providers/query-provider.tsx
'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/lib/query-client';

interface QueryProviderProps {
  children: React.ReactNode;
}

export function QueryProvider({ children }: QueryProviderProps): JSX.Element {
  // Lazy load ReactQueryDevtools only in development
  const ReactQueryDevtoolsProduction = process.env.NODE_ENV === 'development'
    ? require('@tanstack/react-query-devtools').ReactQueryDevtools
    : null;

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {ReactQueryDevtoolsProduction && (
        <ReactQueryDevtoolsProduction initialIsOpen={false} />
      )}
    </QueryClientProvider>
  );
}
```

**Note:** Ensure `@tanstack/react-query-devtools` is installed in `apps/web/package.json` devDependencies:

```json
"devDependencies": {
  "@tanstack/react-query-devtools": "^5.12.0"
}
```

---

## Summary

This hooks and state management system provides:

- **Complete data fetching layer** with React Query for server state
- **Client state management** with Zustand for UI preferences
- **Real-time updates** via Server-Sent Events
- **Form state management** with validation and error handling
- **Authentication integration** with enhanced Clerk hooks
- **Export job management** with progress tracking
- **Type safety** with NO `any` types throughout
- **Error handling** and loading states for all operations
- **Caching strategy** with appropriate stale times and refetch policies

**Next Steps**:

1. Add pagination hooks for large data sets
2. Implement offline state management with service workers
3. Add optimistic updates for better UX
4. Create custom hooks for chart data transformation
5. Add comprehensive hook testing with React Testing Library
6. Implement data synchronization hooks for multi-user scenarios
