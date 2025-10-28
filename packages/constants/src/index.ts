// ============================================================================
// Type Definitions
// ============================================================================

export type UOM = 'TON' | 'LOAD' | 'HOUR' | 'COUNT' | 'PERCENT';

export type MaterialCategory =
  | 'AGGREGATES'
  | 'PROCESSED_BASE'
  | 'FINE'
  | 'SPECIALTY'
  | 'RAW_FEED';

export type OperationType = 'CRU-PRO' | 'CRU-DIS' | 'SEG-OP' | 'CRU-OP';

export type EquipmentType =
  | 'CRUSHING_SCREENING'
  | 'EARTH_MOVING'
  | 'HAULING'
  | 'AUXILIARY';

export type ManpowerRole =
  | 'EQUIPMENT_DRIVER'
  | 'CRUSHER_OPERATOR'
  | 'MAINTENANCE_WORKER'
  | 'LABORER'
  | 'SECURITY';

export type RoleCode = ManpowerRole;

export enum UserRole {
  ADMIN = 'ADMIN',
  MODERATOR = 'MODERATOR',
}

export type ShiftType = 'MORNING' | 'AFTERNOON' | 'NIGHT';

export type EquipmentStatus =
  | 'OPERATIONAL'
  | 'MAINTENANCE'
  | 'BREAKDOWN'
  | 'IDLE';

export type ScalarType = 'string' | 'number' | 'date' | 'percent';

// ============================================================================
// Enum Constant Arrays (for Zod and runtime validation)
// ============================================================================

export const SHIFT_TYPES = ['MORNING', 'AFTERNOON', 'NIGHT'] as const;

export const EQUIPMENT_STATUSES = [
  'OPERATIONAL',
  'MAINTENANCE',
  'BREAKDOWN',
  'IDLE',
] as const;

export const SHIFT_DURATION_HOURS = 8;

// ============================================================================
// Interfaces
// ============================================================================

export interface MaterialDef {
  id: string;
  code: string;
  type: string;
  name: string;
  category: MaterialCategory;
  uom: UOM;
  isFinal: boolean;
  notes?: string;
}

export interface RoleDef {
  code: ManpowerRole;
  name: string;
}

export interface EquipmentDef {
  id: string;
  code: string;
  name: string;
  type: EquipmentType;
}

// ============================================================================
// Material Definitions
// ============================================================================

export const MATERIALS: MaterialDef[] = [
  // Aggregates (9)
  {
    id: 'MAT001',
    code: 'AGG-G1',
    type: 'AGG',
    name: 'G1',
    category: 'AGGREGATES',
    uom: 'TON',
    isFinal: true,
  },
  {
    id: 'MAT002',
    code: 'AGG-3/4',
    type: 'AGG',
    name: '3/4',
    category: 'AGGREGATES',
    uom: 'TON',
    isFinal: true,
  },
  {
    id: 'MAT003',
    code: 'AGG-3/8',
    type: 'AGG',
    name: '3/8',
    category: 'AGGREGATES',
    uom: 'TON',
    isFinal: true,
  },
  {
    id: 'MAT004',
    code: 'AGG-S1',
    type: 'AGG',
    name: 'S1',
    category: 'AGGREGATES',
    uom: 'TON',
    isFinal: true,
  },
  {
    id: 'MAT005',
    code: 'AGG-APBC',
    type: 'AGG',
    name: 'APBC',
    category: 'AGGREGATES',
    uom: 'TON',
    isFinal: true,
  },
  {
    id: 'MAT006',
    code: 'AGG-FILLING',
    type: 'AGG',
    name: 'FILLING MATERIAL',
    category: 'AGGREGATES',
    uom: 'TON',
    isFinal: true,
  },
  {
    id: 'MAT007',
    code: 'AGG-RIPRAP',
    type: 'AGG',
    name: 'RIPRAP',
    category: 'AGGREGATES',
    uom: 'TON',
    isFinal: true,
  },
  {
    id: 'MAT008',
    code: 'AGG-4INCH',
    type: 'AGG',
    name: '4 INCH',
    category: 'AGGREGATES',
    uom: 'TON',
    isFinal: true,
  },
  {
    id: 'MAT009',
    code: 'AGG-6INCH',
    type: 'AGG',
    name: '6 INCH',
    category: 'AGGREGATES',
    uom: 'TON',
    isFinal: true,
  },
  // Fine (2)
  {
    id: 'MAT010',
    code: 'FINE-WASHED',
    type: 'FINE',
    name: 'WASHED SAND',
    category: 'FINE',
    uom: 'TON',
    isFinal: true,
  },
  {
    id: 'MAT011',
    code: 'FINE-NATURAL',
    type: 'FINE',
    name: 'NATURAL SAND',
    category: 'FINE',
    uom: 'TON',
    isFinal: true,
  },
  // Specialty (1)
  {
    id: 'MAT012',
    code: 'SPEC-BEDDING',
    type: 'SPEC',
    name: 'BEDDING SAND',
    category: 'SPECIALTY',
    uom: 'TON',
    isFinal: true,
  },
  // Processed Base (2)
  {
    id: 'MAT013',
    code: 'BASE-CRUSHED',
    type: 'BASE',
    name: 'CRUSHED BASE',
    category: 'PROCESSED_BASE',
    uom: 'TON',
    isFinal: true,
  },
  {
    id: 'MAT014',
    code: 'BASE-RECYCLED',
    type: 'BASE',
    name: 'RECYCLED BASE',
    category: 'PROCESSED_BASE',
    uom: 'TON',
    isFinal: true,
  },
  // Raw Feed (3)
  {
    id: 'MAT015',
    code: 'RAW-CONCRETE',
    type: 'RAW',
    name: 'CONCRETE DEBRIS',
    category: 'RAW_FEED',
    uom: 'LOAD',
    isFinal: false,
    notes: 'Input material for crushing',
  },
  {
    id: 'MAT016',
    code: 'RAW-MIXED',
    type: 'RAW',
    name: 'MIXED C&D DEBRIS',
    category: 'RAW_FEED',
    uom: 'LOAD',
    isFinal: false,
    notes: 'Mixed construction and demolition waste',
  },
  {
    id: 'MAT017',
    code: 'RAW-ASPHALT',
    type: 'RAW',
    name: 'ASPHALT DEBRIS',
    category: 'RAW_FEED',
    uom: 'LOAD',
    isFinal: false,
    notes: 'Asphalt waste for processing',
  },
];

export const MATERIAL_ORDER: string[] = [
  'MAT001',
  'MAT002',
  'MAT003',
  'MAT004',
  'MAT005',
  'MAT006',
  'MAT007',
  'MAT008',
  'MAT009',
  'MAT010',
  'MAT011',
  'MAT012',
  'MAT013',
  'MAT014',
  'MAT015',
  'MAT016',
  'MAT017',
];

// ============================================================================
// Operation Types
// ============================================================================

export const OPERATION_TYPES: Record<OperationType, { label: string }> = {
  'CRU-PRO': { label: 'Crushing - Production' },
  'CRU-DIS': { label: 'Crushing - Disposal' },
  'SEG-OP': { label: 'Segregation Operation' },
  'CRU-OP': { label: 'Crushing Operation' },
};

// ============================================================================
// Manpower Roles
// ============================================================================

export const ROLES: RoleDef[] = [
  { code: 'EQUIPMENT_DRIVER', name: 'Equipment Driver' },
  { code: 'CRUSHER_OPERATOR', name: 'Crusher Operator' },
  { code: 'MAINTENANCE_WORKER', name: 'Maintenance Worker' },
  { code: 'LABORER', name: 'Laborer' },
];

// ============================================================================
// Equipment Definitions
// ============================================================================

export const EQUIPMENT: EquipmentDef[] = [
  { id: 'EQ001', code: 'CRUSHER-01', name: 'Jaw Crusher #1', type: 'CRUSHING_SCREENING' },
  { id: 'EQ002', code: 'CRUSHER-02', name: 'Cone Crusher #1', type: 'CRUSHING_SCREENING' },
  { id: 'EQ003', code: 'SCREEN-01', name: 'Vibrating Screen #1', type: 'CRUSHING_SCREENING' },
  { id: 'EQ004', code: 'EXCAVATOR-01', name: 'Excavator CAT320', type: 'EARTH_MOVING' },
  { id: 'EQ005', code: 'EXCAVATOR-02', name: 'Excavator PC200', type: 'EARTH_MOVING' },
  { id: 'EQ006', code: 'LOADER-01', name: 'Wheel Loader L120', type: 'EARTH_MOVING' },
  { id: 'EQ007', code: 'DUMPTRUCK-01', name: 'Dump Truck 6W', type: 'HAULING' },
  { id: 'EQ008', code: 'DUMPTRUCK-02', name: 'Dump Truck 10W', type: 'HAULING' },
  { id: 'EQ009', code: 'GENERATOR-01', name: 'Generator 500kVA', type: 'AUXILIARY' },
];

// ============================================================================
// Dataset Structures
// ============================================================================

export const DATASETS = {
  production: [
    { field: 'date', label: 'Date', type: 'date' as ScalarType },
    { field: 'shift', label: 'Shift', type: 'string' as ScalarType },
    { field: 'operationType', label: 'Operation Type', type: 'string' as ScalarType },
    { field: 'materialId', label: 'Material ID', type: 'string' as ScalarType },
    { field: 'quantity', label: 'Quantity', type: 'number' as ScalarType },
    { field: 'uom', label: 'UOM', type: 'string' as ScalarType },
  ] as const,
  dispatchTx: [
    { field: 'date', label: 'Date', type: 'date' as ScalarType },
    { field: 'drNo', label: 'DR No.', type: 'string' as ScalarType },
    { field: 'materialId', label: 'Material ID', type: 'string' as ScalarType },
    { field: 'quantity', label: 'Quantity', type: 'number' as ScalarType },
    { field: 'vehiclePlate', label: 'Vehicle Plate', type: 'string' as ScalarType },
    { field: 'destination', label: 'Destination', type: 'string' as ScalarType },
  ] as const,
  equipment: [
    { field: 'date', label: 'Date', type: 'date' as ScalarType },
    { field: 'shift', label: 'Shift', type: 'string' as ScalarType },
    { field: 'equipmentId', label: 'Equipment ID', type: 'string' as ScalarType },
    { field: 'hoursOperated', label: 'Hours Operated', type: 'number' as ScalarType },
    { field: 'status', label: 'Status', type: 'string' as ScalarType },
    { field: 'remarks', label: 'Remarks', type: 'string' as ScalarType },
  ] as const,
  manpower: [
    { field: 'date', label: 'Date', type: 'date' as ScalarType },
    { field: 'shift', label: 'Shift', type: 'string' as ScalarType },
    { field: 'roleCode', label: 'Role Code', type: 'string' as ScalarType },
    { field: 'count', label: 'Count', type: 'number' as ScalarType },
    { field: 'hoursWorked', label: 'Hours Worked', type: 'number' as ScalarType },
  ] as const,
  inventorySnapshot: [
    { field: 'date', label: 'Date', type: 'date' as ScalarType },
    { field: 'materialId', label: 'Material ID', type: 'string' as ScalarType },
    { field: 'quantity', label: 'Quantity', type: 'number' as ScalarType },
    { field: 'location', label: 'Location', type: 'string' as ScalarType },
  ] as const,
} as const;

// ============================================================================
// Export Headers
// ============================================================================

export const EXPORT_HEADERS = {
  production: ['Date', 'Shift', 'Operation Type', 'Material', 'Quantity', 'UOM'],
  dispatchTx: ['Date', 'DR No.', 'Material', 'Quantity', 'Vehicle Plate', 'Destination'],
  equipment: ['Date', 'Shift', 'Equipment', 'Hours Operated', 'Status', 'Remarks'],
  manpower: ['Date', 'Shift', 'Role', 'Count', 'Hours Worked'],
  inventorySnapshot: ['Date', 'Material', 'Quantity', 'Location'],
} as const;

// ============================================================================
// Defaults and Validation
// ============================================================================

export const DEFAULT_SITE_CODE = 'ALASLA-29';
export const DEFAULT_SITE_ID = 'cm123456789abcdef0123'; // CUID for default site

export const DECIMAL_PRECISION: Record<UOM, number> = {
  TON: 2,
  LOAD: 0,
  HOUR: 2,
  COUNT: 0,
  PERCENT: 2,
};

export const ERROR_CODES = {
  INVALID_MATERIAL_ID: 'ERR_INVALID_MATERIAL_ID',
  INVALID_EQUIPMENT_ID: 'ERR_INVALID_EQUIPMENT_ID',
  INVALID_ROLE_CODE: 'ERR_INVALID_ROLE_CODE',
  INVALID_OPERATION_TYPE: 'ERR_INVALID_OPERATION_TYPE',
  INVALID_UOM: 'ERR_INVALID_UOM',
  INVALID_DATE: 'ERR_INVALID_DATE',
  MISSING_REQUIRED_FIELD: 'ERR_MISSING_REQUIRED_FIELD',
} as const;

// ============================================================================
// Helper Functions
// ============================================================================

export function getMaterialById(id: string): MaterialDef | undefined {
  return MATERIALS.find((m) => m.id === id);
}

export function getMaterialByCode(code: string): MaterialDef | undefined {
  return MATERIALS.find((m) => m.code === code);
}

export function getMaterialsByCategory(category: MaterialCategory): MaterialDef[] {
  return MATERIALS.filter((m) => m.category === category);
}

export function getFinalMaterials(): MaterialDef[] {
  return MATERIALS.filter((m) => m.isFinal);
}

export function getMaterialsInOrder(): MaterialDef[] {
  return MATERIAL_ORDER.map((id) => {
    const material = getMaterialById(id);
    if (!material) {
      throw new Error(`Material with ID ${id} not found in MATERIALS array`);
    }
    return material;
  });
}

export function getEquipmentById(id: string): EquipmentDef | undefined {
  return EQUIPMENT.find((e) => e.id === id);
}

export function getEquipmentByCode(code: string): EquipmentDef | undefined {
  return EQUIPMENT.find((e) => e.code === code);
}

export function getEquipmentByType(type: EquipmentType): EquipmentDef[] {
  return EQUIPMENT.filter((e) => e.type === type);
}

export function getRoleByCode(code: ManpowerRole): RoleDef | undefined {
  return ROLES.find((r) => r.code === code);
}

export function isValidMaterialId(id: string): boolean {
  return MATERIALS.some((m) => m.id === id);
}

export function isValidEquipmentId(id: string): boolean {
  return EQUIPMENT.some((e) => e.id === id);
}

export function isValidRoleCode(code: string): code is ManpowerRole {
  return ROLES.some((r) => r.code === code);
}

export function isValidOperationType(type: string): type is OperationType {
  return type in OPERATION_TYPES;
}

export function formatWithPrecision(value: number, uom: UOM): string {
  const precision = DECIMAL_PRECISION[uom];
  return value.toFixed(precision);
}

// ============================================================================
// Type Guards
// ============================================================================

export function isUOM(value: string): value is UOM {
  return ['TON', 'LOAD', 'HOUR', 'COUNT', 'PERCENT'].includes(value);
}

export function isMaterialCategory(value: string): value is MaterialCategory {
  return [
    'AGGREGATES',
    'PROCESSED_BASE',
    'FINE',
    'SPECIALTY',
    'RAW_FEED',
  ].includes(value);
}

export function isEquipmentType(value: string): value is EquipmentType {
  return [
    'CRUSHING_SCREENING',
    'EARTH_MOVING',
    'HAULING',
    'AUXILIARY',
  ].includes(value);
}
