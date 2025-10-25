/**
 * @deskops/database
 *
 * Prisma-based database layer with:
 * - 12 production models (Site, Material, Equipment, Production, etc.)
 * - Zod validation schemas for all input types
 * - Singleton Prisma client with global caching
 *
 * Usage:
 *   import { prisma, ProductionSchema } from '@deskops/database';
 */

export { prisma } from './client';
export * from './schemas';

// Re-export Prisma types for convenience
export type {
  Site,
  Material,
  Equipment,
  ManpowerRole,
  Production,
  Dispatch,
  ReceivedMaterial,
  EquipmentLog,
  ManpowerLog,
  InventorySnapshot,
  ExportJob,
  ExportAudit,
  Prisma,
} from '@prisma/client';
