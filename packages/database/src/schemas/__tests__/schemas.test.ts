import { describe, test, expect } from 'vitest';
import { ProductionSchema, DispatchSchema } from '../production';
import { EquipmentLogSchema } from '../equipment';
import { ManpowerLogSchema } from '../manpower';
import { OPERATION_TYPES, SHIFT_TYPES, EQUIPMENT_STATUSES } from '@deskops/constants';

describe('Schema validation with centralized constants', () => {
  test('ProductionSchema parses with valid OperationType and ShiftType', () => {
    const validInput = {
      siteId: 'cm123abc456def',
      date: new Date('2025-01-15'),
      shift: SHIFT_TYPES[0],
      materialId: 'MAT001',
      qtyTon: 100.5,
      operation: Object.keys(OPERATION_TYPES)[0],
      notes: 'Test production',
    };

    const result = ProductionSchema.safeParse(validInput);
    expect(result.success).toBe(true);
  });

  test('DispatchSchema parses with valid OperationType', () => {
    const validInput = {
      siteId: 'cm123abc456def',
      date: new Date('2025-01-15'),
      materialId: 'MAT001',
      qtyTon: 50.25,
      trips: 3,
      owner: 'Customer A',
      reference: 'DR-001',
      operation: Object.keys(OPERATION_TYPES)[1],
    };

    const result = DispatchSchema.safeParse(validInput);
    expect(result.success).toBe(true);
  });

  test('EquipmentLogSchema parses with valid ShiftType and EquipmentStatus', () => {
    const validInput = {
      siteId: 'cm123abc456def',
      date: new Date('2025-01-15'),
      equipmentId: 'EQ001',
      hours: 8.5,
      count: 1,
      shift: SHIFT_TYPES[1],
      status: EQUIPMENT_STATUSES[0],
      notes: 'Equipment operational',
    };

    const result = EquipmentLogSchema.safeParse(validInput);
    expect(result.success).toBe(true);
  });

  test('ManpowerLogSchema parses with valid ShiftType', () => {
    const validInput = {
      siteId: 'cm123abc456def',
      date: new Date('2025-01-15'),
      roleId: 'ROLE_EQUIPMENT_DRIVER',
      headcount: 5,
      hours: 8.0,
      shift: SHIFT_TYPES[2],
      notes: 'Night shift crew',
    };

    const result = ManpowerLogSchema.safeParse(validInput);
    expect(result.success).toBe(true);
  });

  test('ProductionSchema rejects invalid OperationType', () => {
    const invalidInput = {
      siteId: 'cm123abc456def',
      date: new Date('2025-01-15'),
      materialId: 'MAT001',
      qtyTon: 100.5,
      operation: 'INVALID-OP',
    };

    const result = ProductionSchema.safeParse(invalidInput);
    expect(result.success).toBe(false);
  });

  test('EquipmentLogSchema rejects invalid EquipmentStatus', () => {
    const invalidInput = {
      siteId: 'cm123abc456def',
      date: new Date('2025-01-15'),
      equipmentId: 'EQ001',
      hours: 8.5,
      count: 1,
      status: 'INVALID-STATUS',
    };

    const result = EquipmentLogSchema.safeParse(invalidInput);
    expect(result.success).toBe(false);
  });

  test('ManpowerLogSchema rejects invalid ShiftType', () => {
    const invalidInput = {
      siteId: 'cm123abc456def',
      date: new Date('2025-01-15'),
      roleId: 'ROLE_EQUIPMENT_DRIVER',
      headcount: 5,
      hours: 8.0,
      shift: 'INVALID-SHIFT',
    };

    const result = ManpowerLogSchema.safeParse(invalidInput);
    expect(result.success).toBe(false);
  });
});
