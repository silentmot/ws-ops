# SWMS System Constants - Centralized Configuration

## System Overview

**Purpose**: This document defines all centralized constants, configurations, and standardized values used across the DeskOps application. All modules MUST reference these centralized definitions to ensure consistency.

**Critical Requirement**:

- ⚠️ **DO NOT DUPLICATE** these constants in individual modules
- ⚠️ **ALWAYS IMPORT** from the centralized constants file
- ⚠️ **UPDATE HERE FIRST** before changing any system-wide configurations
- ⚠️ **NO VERSIONING** in API endpoints - use `/api/[module]/[resource]` pattern only
- ⚠️ **DO NOT USE `any`** in type annotations, assertions, generics, or anywhere in the codebase.
- ⚠️ **ANY CODE CONTAINING `any`** will be considered incomplete and must be refactored before acceptance.

---

## **1. Unit of Measure types**

```typescript
/**
 * Unit of Measure types
 * Source: Document index 9 - "export type UOM"
 */
export type UOM = "TON" | "LOAD" | "HOUR" | "COUNT" | "PERCENT";
```

**Usage Example:**

```typescript
import { UOM } from "@/lib/constants";

const isMaterial = material.UOM === "TON";
```

## **2. Material, Operation, Equipment, Role, and User Types**

```typescript
export type MaterialCategory =
  | "AGGREGATES"
  | "PROCESSED_BASE"
  | "FINE"
  | "SPECIALTY"
  | "RAW_FEED";

/**
 * Operation types for production and dispatch
 * Source: Document index 9 - "export type OperationType"
 */
export type OperationType = "CRU-PRO" | "CRU-DIS" | "CRU-OP" | "SEG-OP";

/**
 * Equipment categories
 * Source: Document index 9 - "export type EquipmentType"
 */
export type EquipmentType =
  | "CRUSHING_SCREENING"
  | "EARTH_MOVING"
  | "HAULING"
  | "AUXILIARY";

/**
 * Role codes for manpower
 * Source: Document index 9 - "export type RoleCode"
 */
export type ManpowerRole =
  | "EQUIPMENT_DRIVER"
  | "CRUSHER_OPERATOR"
  | "MAINTENANCE_WORKER"
  | "LABORER"
  | "SECURITY";

/**
 * Type alias for backward compatibility
 * Use ManpowerRole consistently throughout the codebase
 */
export type RoleCode = ManpowerRole;

/**
 * User roles for authentication
 * Source: Document index 9 - "export enum UserRole"
 */
export enum UserRole {
  ADMIN = 'ADMIN',
  MODERATOR = 'MODERATOR',
}

/**
 * Shift types for production and manpower scheduling
 */
export type ShiftType = "MORNING" | "AFTERNOON" | "NIGHT";

/**
 * Equipment status types
 */
export type EquipmentStatus = "OPERATIONAL" | "MAINTENANCE" | "BREAKDOWN" | "IDLE";

/**
 * Scalar types for dataset fields
 * Source: Document index 9 - "export type ScalarType"
 */
export type ScalarType = "string" | "number" | "date" | "percent";

// =============================================================================
// MATERIAL DEFINITIONS (Source: Document index 9)
// =============================================================================

/**
 * Material definition interface
 * Source: Document index 9 - "export interface MaterialDef"
 */
export interface MaterialDef {
  id: string;           // e.g., "MAT_AGG_34"
  code: string;         // e.g., "AGG-3/4"
  type: string;         // e.g., "3/4"
  name: string;         // e.g., "AGGREGATE 3/4"
  category: MaterialCategory;
  uom: UOM;             // default UOM for all production/dispatch entries
  isFinal: boolean;     // true when sellable product
  notes?: string;
}

/**
 * Complete material catalog
 * Source: Document index 9 - "export const MATERIALS: MaterialDef[]"
 */
export const MATERIALS: MaterialDef[] = [
  // AGGREGATES (final products)
  { id: "MAT_AGG_34",  code: "AGG-3/4",  type: "3/4",  name: "AGGREGATE 3/4",  category: "AGGREGATES", uom: "TON", isFinal: true },
  { id: "MAT_AGG_12",  code: "AGG-1/2",  type: "1/2",  name: "AGGREGATE 1/2",  category: "AGGREGATES", uom: "TON", isFinal: true },
  { id: "MAT_AGG_38",  code: "AGG-3/8",  type: "3/8",  name: "AGGREGATE 3/8",  category: "AGGREGATES", uom: "TON", isFinal: true },
  { id: "MAT_AGG_2",   code: "AGG-2",    type: "2",    name: "AGGREGATE 2",    category: "AGGREGATES", uom: "TON", isFinal: true },
  { id: "MAT_AGG_1_5", code: "AGG-1.5",  type: "1.5",  name: "AGGREGATE 1.5",  category: "AGGREGATES", uom: "TON", isFinal: true },
  { id: "MAT_AGG_1",   code: "AGG-1",    type: "1",    name: "AGGREGATE 1",    category: "AGGREGATES", uom: "TON", isFinal: true },
  { id: "MAT_AGG_3_16", code: "AGG-3/16", type: "3/16", name: "AGGREGATE 3/16", category: "AGGREGATES", uom: "TON", isFinal: true },
  { id: "MAT_AGG_1_16", code: "AGG-1/16", type: "1/16", name: "AGGREGATE 1/16", category: "AGGREGATES", uom: "TON", isFinal: true },
  { id: "MAT_AGG_0_5MM", code: "AGG-0_5MM", type: "0-5mm", name: "AGGREGATE 0-5MM", category: "AGGREGATES", uom: "TON", isFinal: true },

  // FINE (final products)
  { id: "MAT_FINE_SAND",  code: "FINE-SAND",  type: "SAND",  name: "SAND",      category: "FINE", uom: "TON", isFinal: true },
  { id: "MAT_FINE_POWDER",code: "FINE-PWD",   type: "POWDER",name: "POWDER",    category: "FINE", uom: "TON", isFinal: true },

  // SPECIALTY (final products)
  { id: "MAT_SPEC_OVERSIZE", code: "SPEC-OVERSIZE", type: "OVERSIZE", name: "OVERSIZE", category: "SPECIALTY", uom: "TON", isFinal: true },

  // PROCESSED BASE (final products)
  { id: "MAT_BASE_SUBBASE",  code: "BASE-SUBBASE",  type: "SUBBASE",  name: "SUBBASE",  category: "PROCESSED_BASE", uom: "TON", isFinal: true },
  { id: "MAT_BASE_A1A",      code: "BASE-A1A",      type: "A1A",      name: "A1A",      category: "PROCESSED_BASE", uom: "TON", isFinal: true },

  // RAW FEED (not sellable - intermediate materials)
  { id: "MAT_RAW_FEED", code: "RAW-FEED", type: "FEED", name: "FEED", category: "RAW_FEED", uom: "TON", isFinal: false, notes: "Crusher intake - raw material input" },
  { id: "MAT_RAW_CDW",  code: "RAW-CDW",  type: "CDW",  name: "CDW",  category: "RAW_FEED", uom: "TON", isFinal: false, notes: "Construction & demolition waste input" },
  { id: "MAT_RAW_PURE", code: "RAW-PURE", type: "PURE", name: "PURE", category: "RAW_FEED", uom: "TON", isFinal: false, notes: "Pure concrete input for processing" },
];

/**
 * Canonical ordering for UI and exports
 * Source: Document index 9 - "export const MATERIAL_ORDER: string[]"
 */
export const MATERIAL_ORDER: string[] = [
  "MAT_AGG_34",
  "MAT_AGG_12",
  "MAT_AGG_38",
  "MAT_AGG_2",
  "MAT_AGG_1_5",
  "MAT_AGG_1",
  "MAT_AGG_3_16",
  "MAT_AGG_1_16",
  "MAT_AGG_0_5MM",
  "MAT_BASE_SUBBASE",
  "MAT_BASE_A1A",
  "MAT_FINE_SAND",
  "MAT_FINE_POWDER",
  "MAT_SPEC_OVERSIZE",
  "MAT_RAW_FEED",
  "MAT_RAW_CDW",
  "MAT_RAW_PURE",
];

// =============================================================================
// OPERATION TYPES (Source: Document index 9)
// =============================================================================

/**
 * Operation type definitions
 * Source: Document index 9 - "export const OPERATION_TYPES"
 */
export const OPERATION_TYPES: Record<OperationType, { label: string }> = {
  "CRU-PRO": { label: "Crusher Production" },
  "CRU-DIS": { label: "Crusher Dispatch" },
  "CRU-OP":  { label: "Crusher Operation" },
  "SEG-OP":  { label: "Segregation / Acceptance" },
};

// =============================================================================
// MANPOWER ROLES (Source: Document index 9)
// =============================================================================

/**
 * Role definition interface
 * Source: Document index 9 - "export interface RoleDef"
 */
export interface RoleDef {
  code: ManpowerRole;
  name: string;
}

/**
 * Role definitions
 * Source: Document index 9 - "export const ROLES: RoleDef[]"
 */
export const ROLES: RoleDef[] = [
  { code: "EQUIPMENT_DRIVER", name: "Equipment Driver" },
  { code: "CRUSHER_OPERATOR", name: "Crusher Operator" },
  { code: "MAINTENANCE_WORKER", name: "Maintenance Worker" },
  { code: "LABORER", name: "Laborer" },
];

// =============================================================================
// EQUIPMENT DEFINITIONS (Source: Document index 9)
// =============================================================================

/**
 * Equipment definition interface
 * Source: Document index 9 - "export interface EquipmentDef"
 */
export interface EquipmentDef {
  id: string;
  code: string;
  name: string;
  type: EquipmentType;
}

/**
 * Equipment catalog
 * Source: Document index 9 - "export const EQUIPMENT: EquipmentDef[]"
 */
export const EQUIPMENT: EquipmentDef[] = [
  { id: "EQ_CRUSH_STATIC",  code: "CRUSH-STATIC", name: "STATIC CRUSHER",  type: "CRUSHING_SCREENING" },
  { id: "EQ_SCREEN_MOBILE", code: "SCREEN-MOBILE", name: "MOBILE SCREEN",  type: "CRUSHING_SCREENING" },
  { id: "EQ_LOADER",        code: "LOADER",        name: "FRONT LOADER",    type: "EARTH_MOVING" },
  { id: "EQ_BULL",          code: "BULL",          name: "BULLDOZER",       type: "EARTH_MOVING" },
  { id: "EQ_EXC",           code: "EXC",           name: "EXCAVATOR",       type: "EARTH_MOVING" },
  { id: "EQ_DUMPER",        code: "DUMPER",        name: "DUMPER",          type: "HAULING" },
  { id: "EQ_DYNA",          code: "DYNA",          name: "DYNA",            type: "HAULING" },
  { id: "EQ_GRADER",        code: "GRADER",        name: "GRADER",          type: "AUXILIARY" },
  { id: "EQ_WINCH",         code: "WINCH",         name: "WINCH",           type: "AUXILIARY" },
];

// =============================================================================
// DATASET STRUCTURES (Source: Document index 9)
// =============================================================================

/**
 * Dataset field definitions for all modules
 * Source: Document index 9 - "export const DATASETS"
 */
export const DATASETS = {
  production: {
    fields: [
      { field: "date",      type: "date" as const },
      { field: "siteCode",  type: "string" as const },
      { field: "materialId",type: "string" as const },
      { field: "qty",       type: "number" as const, uom: "TON" as UOM },
      { field: "operation", type: "string" as const }, // OperationType
    ],
  },
  dispatchTx: {
    fields: [
      { field: "date",      type: "date" as const },
      { field: "siteCode",  type: "string" as const },
      { field: "materialId",type: "string" as const },
      { field: "qty",       type: "number" as const, uom: "TON" as UOM },
      { field: "trips",     type: "number" as const },
      { field: "operation", type: "string" as const },
    ],
  },
  equipment: {
    fields: [
      { field: "date",        type: "date" as const },
      { field: "siteCode",    type: "string" as const },
      { field: "equipmentId", type: "string" as const },
      { field: "hours",       type: "number" as const, uom: "HOUR" as UOM },
      { field: "count",       type: "number" as const, uom: "COUNT" as UOM },
    ],
  },
  manpower: {
    fields: [
      { field: "date",     type: "date" as const },
      { field: "siteCode", type: "string" as const },
      { field: "roleCode", type: "string" as const }, // RoleCode
      { field: "hours",       type: "number" as const, uom: "HOUR" as UOM }, // total hours worked (attendance)
      { field: "headcount",type: "number" as const, uom: "COUNT" as UOM },
    ],
  },
  inventorySnapshot: {
    fields: [
      { field: "date",          type: "date" as const },
      { field: "siteCode",      type: "string" as const },
      { field: "materialId",    type: "string" as const },
      { field: "openingTon",    type: "number" as const, uom: "TON" as UOM },
      { field: "producedTon",   type: "number" as const, uom: "TON" as UOM },
      { field: "dispatchedTon", type: "number" as const, uom: "TON" as UOM },
      { field: "adjustmentTon", type: "number" as const, uom: "TON" as UOM },
      { field: "closingTon",    type: "number" as const, uom: "TON" as UOM },
    ],
  },
} as const;

// =============================================================================
// EXPORT HEADERS (Source: Document index 9)
// =============================================================================

/**
 * Export column headers for each dataset
 * Source: Document index 9 - "export const EXPORT_HEADERS"
 */
export const EXPORT_HEADERS = {
  production: ["date", "siteCode", "materialId", "material", "qtyTon"],
  dispatchTx: ["date", "siteCode", "materialId", "material", "qtyTon", "trips"],
  equipment: ["date", "siteCode", "equipmentId", "equipment", "hours", "count"],
  manpower: ["date", "siteCode", "roleCode", "role", "headcount"],
  inventorySnapshot: [
    "date",
    "siteCode",
    "materialId",
    "material",
    "openingTon",
    "producedTon",
    "dispatchedTon",
    "adjustmentTon",
    "closingTon",
  ],
} as const;

// =============================================================================
// DEFAULTS AND VALIDATION (Source: Document index 9)
// =============================================================================

/**
 * Default site code
 * Source: Document index 9 - "export const DEFAULT_SITE_CODE"
 */
export const DEFAULT_SITE_CODE = "ALASLA-29";

/**
 * Decimal precision by UOM
 * Source: Document index 9 - "export const DECIMAL_PRECISION"
 */
export const DECIMAL_PRECISION = {
  TON: 3,
  LOAD: 0,
  HOUR: 2,
  COUNT: 0,
  PERCENT: 2
} as const;

/**
 * Error codes for validation
 * Source: Document index 9 - "export const ERROR_CODES"
 */
export const ERROR_CODES = {
  UNKNOWN_MATERIAL_ID: "E-MAT-ID",
  UNKNOWN_EQUIPMENT_ID: "E-EQ-ID",
  UNKNOWN_ROLE_CODE: "E-ROLE-CODE",
  INVALID_DATE: "E-DATE",
  INVALID_NUMBER: "E-NUM",
} as const;

// =============================================================================
// LOOKUP HELPER FUNCTIONS
// =============================================================================

/**
 * Get material by ID
 * @param id Material ID
 * @returns Material definition or undefined
 */
export function getMaterialById(id: string): MaterialDef | undefined {
  return MATERIALS.find((m) => m.id === id);
}

/**
 * Get material by code
 * @param code Material code
 * @returns Material definition or undefined
 */
export function getMaterialByCode(code: string): MaterialDef | undefined {
  return MATERIALS.find((m) => m.code === code);
}

/**
 * Get materials by category
 * @param category Material category
 * @returns Array of material definitions
 */
export function getMaterialsByCategory(
  category: MaterialCategory
): MaterialDef[] {
  return MATERIALS.filter((m) => m.category === category);
}

/**
 * Get final (sellable) materials only
 * @returns Array of final material definitions
 */
export function getFinalMaterials(): MaterialDef[] {
  return MATERIALS.filter((m) => m.isFinal);
}

/**
 * Get materials in canonical order
 * @returns Array of materials sorted by MATERIAL_ORDER
 */
export function getMaterialsInOrder(): MaterialDef[] {
  return MATERIAL_ORDER.map((id) => getMaterialById(id)).filter(
    (m): m is MaterialDef => m !== undefined
  );
}

/**
 * Get equipment by ID
 * @param id Equipment ID
 * @returns Equipment definition or undefined
 */
export function getEquipmentById(id: string): EquipmentDef | undefined {
  return EQUIPMENT.find((e) => e.id === id);
}

/**
 * Get equipment by code
 * @param code Equipment code
 * @returns Equipment definition or undefined
 */
export function getEquipmentByCode(code: string): EquipmentDef | undefined {
  return EQUIPMENT.find((e) => e.code === code);
}

/**
 * Get equipment by type
 * @param type Equipment type
 * @returns Array of equipment definitions
 */
export function getEquipmentByType(
  type: EquipmentType
): EquipmentDef[] {
  return EQUIPMENT.filter((e) => e.type === type);
}

/**
 * Get role by code
 * @param code Role code (ManpowerRole)
 * @returns Role definition or undefined
 */
export function getRoleByCode(code: ManpowerRole): RoleDef | undefined {
  return ROLES.find((r) => r.code === code);
}

/**
 * Validate material ID exists
 * @param id Material ID to validate
 * @returns true if valid, false otherwise
 */
export function isValidMaterialId(id: string): boolean {
  return MATERIALS.some((m) => m.id === id);
}

/**
 * Validate equipment ID exists
 * @param id Equipment ID to validate
 * @returns true if valid, false otherwise
 */
export function isValidEquipmentId(id: string): boolean {
  return EQUIPMENT.some((e) => e.id === id);
}

/**
 * Validate role code exists
 * @param code Role code to validate
 * @returns true if valid, false otherwise
 */
export function isValidRoleCode(code: string): boolean {
  return ROLES.some((r) => r.code === code);
}

/**
 * Validate operation type
 * @param op Operation type to validate
 * @returns true if valid, false otherwise
 */
export function isValidOperationType(op: string): op is OperationType {
  return Object.prototype.hasOwnProperty.call(OPERATION_TYPES, op);
}

/**
 * Format number with precision based on UOM
 * @param value Number to format
 * @param uom Unit of measure
 * @returns Formatted string
 */
export function formatWithPrecision(value: number, uom: UOM): string {
  const precision = DECIMAL_PRECISION[uom];
  return value.toFixed(precision);
}

// =============================================================================
// TYPE GUARDS
// =============================================================================

/**
 * Check if value is valid UOM
 */
export function isUOM(value: string): value is UOM {
  return ["TON", "LOAD", "HOUR", "COUNT", "PERCENT"].includes(value);
}

/**
 * Check if value is valid MaterialCategory
 */
export function isMaterialCategory(
  value: string
): value is MaterialCategory {
  return ["AGGREGATES", "PROCESSED_BASE", "FINE", "SPECIALTY", "RAW_FEED"].includes(value);
}

/**
 * Check if value is valid EquipmentType
 */
export function isEquipmentType(
  value: string
): value is EquipmentType {
  return ["CRUSHING_SCREENING", "EARTH_MOVING", "HAULING", "AUXILIARY"].includes(value);
}
