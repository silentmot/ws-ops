/**
 * Prisma Accelerate Extension Usage Examples
 *
 * This file demonstrates how to use Prisma Accelerate's caching capabilities
 * with the extended Prisma Client.
 */

import { prisma } from '../client';

/**
 * Example 1: Basic caching with TTL (Time To Live)
 * Cache results for 60 seconds
 */
export async function getMaterialsWithCache() {
  return await prisma.material.findMany({
    where: {
      isActive: true,
    },
    cacheStrategy: { ttl: 60 }, // Cache for 60 seconds
  });
}

/**
 * Example 2: Conditional caching based on query
 * Cache frequently accessed site data
 */
export async function getSiteByCode(code: string) {
  return await prisma.site.findUnique({
    where: { code },
    cacheStrategy: { ttl: 300 }, // Cache for 5 minutes
  });
}

/**
 * Example 3: Caching complex queries
 * Cache inventory snapshots with aggregations
 */
export async function getInventorySnapshotsWithCache(
  siteId: string,
  dateFrom: Date,
  dateTo: Date
) {
  return await prisma.inventorySnapshot.findMany({
    where: {
      siteId,
      date: {
        gte: dateFrom,
        lte: dateTo,
      },
    },
    include: {
      material: true,
      site: true,
    },
    cacheStrategy: { ttl: 120 }, // Cache for 2 minutes
  });
}

/**
 * Example 4: Using swr (stale-while-revalidate) cache strategy
 * Returns cached data immediately while fetching fresh data in background
 */
export async function getActiveSitesWithSWR() {
  return await prisma.site.findMany({
    where: {
      isActive: true,
    },
    cacheStrategy: {
      ttl: 60,
      swr: 120, // Serve stale data for up to 120 seconds while revalidating
    },
  });
}

/**
 * Example 5: Caching with tags for selective invalidation
 * (Requires Prisma Accelerate configured with cache tags)
 */
export async function getProductionDataWithTags(siteId: string, date: Date) {
  return await prisma.production.findMany({
    where: {
      siteId,
      date,
    },
    include: {
      material: true,
    },
    cacheStrategy: {
      ttl: 300,
      tags: [`site:${siteId}`, `production:${date.toISOString()}`],
    },
  });
}

/**
 * Example 6: Dashboard KPIs with aggressive caching
 * Cache heavily accessed dashboard metrics
 */
export async function getDashboardMetricsWithCache(
  siteId: string,
  startDate: Date,
  endDate: Date
) {
  const [production, dispatch, received, equipment] = await Promise.all([
    prisma.production.aggregate({
      where: {
        siteId,
        date: { gte: startDate, lte: endDate },
      },
      _sum: { qtyTon: true },
      cacheStrategy: { ttl: 180 }, // 3 minutes
    }),

    prisma.dispatch.aggregate({
      where: {
        siteId,
        date: { gte: startDate, lte: endDate },
      },
      _sum: { qtyTon: true },
      cacheStrategy: { ttl: 180 },
    }),

    prisma.receivedMaterial.aggregate({
      where: {
        siteId,
        date: { gte: startDate, lte: endDate },
      },
      _sum: { qtyTon: true },
      cacheStrategy: { ttl: 180 },
    }),

    prisma.equipmentLog.aggregate({
      where: {
        siteId,
        date: { gte: startDate, lte: endDate },
      },
      _sum: { hours: true },
      cacheStrategy: { ttl: 180 },
    }),
  ]);

  return {
    totalProduction: production._sum.qtyTon,
    totalDispatch: dispatch._sum.qtyTon,
    totalReceived: received._sum.qtyTon,
    totalEquipmentHours: equipment._sum.hours,
  };
}

/**
 * Example 7: No caching for real-time data
 * Omit cacheStrategy for queries that need fresh data
 */
export async function getRealtimeInventory(siteId: string, materialId: string) {
  // No cacheStrategy - always fetch fresh data
  return await prisma.inventorySnapshot.findFirst({
    where: {
      siteId,
      materialId,
    },
    orderBy: {
      date: 'desc',
    },
  });
}

/**
 * Cache Strategy Best Practices:
 *
 * 1. Use shorter TTL (30-60s) for frequently changing data
 * 2. Use longer TTL (5-10min) for relatively static data (materials, sites, equipment)
 * 3. Use swr for data that can tolerate staleness (dashboards, reports)
 * 4. Omit cacheStrategy for mutations and real-time critical queries
 * 5. Use cache tags for selective invalidation when data changes
 *
 * TTL Guidelines by Data Type:
 * - Master data (materials, sites, equipment): 300-600s (5-10 minutes)
 * - Aggregated reports/dashboards: 120-180s (2-3 minutes)
 * - Recent transactions: 30-60s (30-60 seconds)
 * - Real-time inventory: No cache or 10-30s
 */
