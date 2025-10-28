export const queryKeys = {
  production: {
    all: ['production'] as const,
    lists: () => [...queryKeys.production.all, 'list'] as const,
    list: (filters: { siteId: string; dateFrom?: string; dateTo?: string }) =>
      [...queryKeys.production.lists(), filters] as const,
    details: () => [...queryKeys.production.all, 'detail'] as const,
    detail: (id: string) => [...queryKeys.production.details(), id] as const,
  },
  dispatch: {
    all: ['dispatch'] as const,
    lists: () => [...queryKeys.dispatch.all, 'list'] as const,
    list: (filters: { siteId: string; dateFrom?: string; dateTo?: string }) =>
      [...queryKeys.dispatch.lists(), filters] as const,
    details: () => [...queryKeys.dispatch.all, 'detail'] as const,
    detail: (id: string) => [...queryKeys.dispatch.details(), id] as const,
  },
  received: {
    all: ['received'] as const,
    lists: () => [...queryKeys.received.all, 'list'] as const,
    list: (filters: { siteId: string; dateFrom?: string; dateTo?: string }) =>
      [...queryKeys.received.lists(), filters] as const,
    details: () => [...queryKeys.received.all, 'detail'] as const,
    detail: (id: string) => [...queryKeys.received.details(), id] as const,
  },
  equipment: {
    all: ['equipment'] as const,
    lists: () => [...queryKeys.equipment.all, 'list'] as const,
    list: (filters: { siteId: string; dateFrom?: string; dateTo?: string }) =>
      [...queryKeys.equipment.lists(), filters] as const,
    logs: () => [...queryKeys.equipment.all, 'logs'] as const,
    utilization: (siteId: string) =>
      [...queryKeys.equipment.all, 'utilization', siteId] as const,
  },
  manpower: {
    all: ['manpower'] as const,
    lists: () => [...queryKeys.manpower.all, 'list'] as const,
    list: (filters: { siteId: string; dateFrom?: string; dateTo?: string }) =>
      [...queryKeys.manpower.lists(), filters] as const,
    logs: () => [...queryKeys.manpower.all, 'logs'] as const,
  },
  inventory: {
    all: ['inventory'] as const,
    lists: () => [...queryKeys.inventory.all, 'list'] as const,
    list: (filters: { siteId: string; dateFrom?: string; dateTo?: string }) =>
      [...queryKeys.inventory.lists(), filters] as const,
    snapshots: () => [...queryKeys.inventory.all, 'snapshots'] as const,
    snapshot: (params: { siteId: string; materialId: string; date: string }) =>
      [...queryKeys.inventory.snapshots(), params] as const,
    calculate: (siteId: string, materialId: string, date: string) =>
      [
        ...queryKeys.inventory.all,
        'calculate',
        siteId,
        materialId,
        date,
      ] as const,
  },
  dashboard: {
    all: ['dashboard'] as const,
    metrics: (siteId: string) =>
      [...queryKeys.dashboard.all, 'metrics', siteId] as const,
    kpis: (siteId: string, dateRange?: { from: string; to: string }) =>
      [...queryKeys.dashboard.all, 'kpis', siteId, dateRange] as const,
    trends: (siteId: string, period: string) =>
      [...queryKeys.dashboard.all, 'trends', siteId, period] as const,
  },
  materials: {
    all: ['materials'] as const,
    lists: () => [...queryKeys.materials.all, 'list'] as const,
    list: (filters?: { category?: string; isFinal?: boolean }) =>
      [...queryKeys.materials.lists(), filters] as const,
    details: () => [...queryKeys.materials.all, 'detail'] as const,
    detail: (id: string) => [...queryKeys.materials.details(), id] as const,
  },
} as const;
