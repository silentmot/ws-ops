/**
 * Power BI CSV Exporter
 * Generates CSV files with kebab-case column names for Power BI integration
 * Source: Task 11.2 - Power BI CSV Export
 */

import { createWriteStream } from 'fs';
import { createHash } from 'crypto';
import { prisma } from '@/lib/db';
import type { ExportResult } from './types';

interface PowerBICSVGeneratorOptions {
  jobId: string;
  module: string;
  siteId: string;
  dateFrom: Date;
  dateTo: Date;
  granularity: string;
}

const EXPORT_STORAGE_PATH = '{EXPORT_STORAGE_PATH}';

/**
 * Convert string to kebab-case for Power BI compatibility
 */
function toKebabCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .replace(/[()]/g, '')
    .toLowerCase();
}

/**
 * Escape CSV field according to RFC 4180
 */
function escapeCSVField(field: string): string {
  const escaped = field.replace(/"/g, '""');

  if (
    escaped.includes(',') ||
    escaped.includes('\n') ||
    escaped.includes('"')
  ) {
    return `"${escaped}"`;
  }

  return escaped;
}

export async function generatePowerBICSVExport(
  options: PowerBICSVGeneratorOptions
): Promise<ExportResult> {
  const { jobId, module, siteId, dateFrom, dateTo } = options;

  const data = await fetchModuleData(module, siteId, dateFrom, dateTo);

  if (data.length === 0) {
    const csvContent = 'no-data-available\n';
    const filePath = `${EXPORT_STORAGE_PATH}/${jobId}_powerbi.csv`;

    const writeStream = createWriteStream(filePath, { encoding: 'utf8' });
    writeStream.write(csvContent);
    writeStream.end();

    await new Promise<void>((resolve, reject) => {
      writeStream.on('finish', resolve);
      writeStream.on('error', reject);
    });

    const fileHash = createHash('sha256').update(csvContent).digest('hex');

    return {
      filePath,
      fileSize: Buffer.byteLength(csvContent, 'utf8'),
      fileHash,
      recordCount: 0,
    };
  }

  const firstRow = data[0];
  if (!firstRow) {
    throw new Error('Data array contains undefined elements');
  }

  const originalHeaders = Object.keys(firstRow);
  const kebabHeaders = originalHeaders.map(toKebabCase);

  const filePath = `${EXPORT_STORAGE_PATH}/${jobId}_powerbi.csv`;
  const writeStream = createWriteStream(filePath, { encoding: 'utf8' });

  const hash = createHash('sha256');
  let totalSize = 0;

  const headerRow = kebabHeaders.join(',') + '\n';
  writeStream.write(headerRow);
  hash.update(headerRow);
  totalSize += Buffer.byteLength(headerRow, 'utf8');

  for (const record of data) {
    const values = originalHeaders.map((header) => {
      const value = record[header];
      return escapeCSVField(value?.toString() || '');
    });
    const row = values.join(',') + '\n';
    writeStream.write(row);
    hash.update(row);
    totalSize += Buffer.byteLength(row, 'utf8');
  }

  await new Promise<void>((resolve, reject) => {
    writeStream.end(() => resolve());
    writeStream.on('error', reject);
  });

  const fileHash = hash.digest('hex');

  return {
    filePath,
    fileSize: totalSize,
    fileHash,
    recordCount: data.length,
  };
}

async function fetchModuleData(
  module: string,
  siteId: string,
  dateFrom: Date,
  dateTo: Date
): Promise<Record<string, unknown>[]> {
  const whereClause = {
    siteId,
    date: {
      gte: dateFrom,
      lte: dateTo,
    },
  };

  switch (module) {
    case 'production': {
      const records = await prisma.production.findMany({
        where: whereClause,
        include: {
          material: { select: { name: true, code: true, category: true } },
          site: { select: { name: true, code: true } },
        },
        orderBy: { date: 'asc' },
      });

      type ProductionRecord = (typeof records)[0];
      return records.map((record: ProductionRecord) => ({
        Date: record.date.toISOString().split('T')[0],
        SiteCode: record.site.code,
        SiteName: record.site.name,
        MaterialCode: record.material.code,
        MaterialName: record.material.name,
        MaterialCategory: record.material.category,
        QuantityTon: record.qtyTon.toNumber(),
        Operation: record.operation,
        Shift: record.shift || '',
        Notes: record.notes || '',
      }));
    }

    case 'dispatch': {
      const records = await prisma.dispatch.findMany({
        where: whereClause,
        include: {
          material: { select: { name: true, code: true, category: true } },
          site: { select: { name: true, code: true } },
        },
        orderBy: { date: 'asc' },
      });

      type DispatchRecord = (typeof records)[0];
      return records.map((record: DispatchRecord) => ({
        Date: record.date.toISOString().split('T')[0],
        SiteCode: record.site.code,
        SiteName: record.site.name,
        MaterialCode: record.material.code,
        MaterialName: record.material.name,
        MaterialCategory: record.material.category,
        QuantityTon: record.qtyTon.toNumber(),
        Trips: record.trips || 0,
        Owner: record.owner || '',
        Reference: record.reference || '',
        Operation: record.operation,
        Notes: record.notes || '',
      }));
    }

    case 'received': {
      const records = await prisma.receivedMaterial.findMany({
        where: whereClause,
        include: {
          material: { select: { name: true, code: true, category: true } },
          site: { select: { name: true, code: true } },
        },
        orderBy: { date: 'asc' },
      });

      type ReceivedRecord = (typeof records)[0];
      return records.map((record: ReceivedRecord) => ({
        Date: record.date.toISOString().split('T')[0],
        SiteCode: record.site.code,
        SiteName: record.site.name,
        MaterialCode: record.material.code,
        MaterialName: record.material.name,
        MaterialCategory: record.material.category,
        QuantityTon: record.qtyTon.toNumber(),
        Source: record.source || '',
        VehicleReference: record.vehicleRef || '',
        Notes: record.notes || '',
      }));
    }

    case 'equipment': {
      const records = await prisma.equipmentLog.findMany({
        where: whereClause,
        include: {
          equipment: { select: { name: true, code: true, type: true } },
          site: { select: { name: true, code: true } },
        },
        orderBy: { date: 'asc' },
      });

      type EquipmentRecord = (typeof records)[0];
      return records.map((record: EquipmentRecord) => ({
        Date: record.date.toISOString().split('T')[0],
        SiteCode: record.site.code,
        SiteName: record.site.name,
        EquipmentCode: record.equipment.code,
        EquipmentName: record.equipment.name,
        EquipmentType: record.equipment.type,
        Hours: record.hours.toNumber(),
        Count: record.count,
        Shift: record.shift || '',
        Status: record.status || '',
        Notes: record.notes || '',
      }));
    }

    case 'manpower': {
      const records = await prisma.manpowerLog.findMany({
        where: whereClause,
        include: {
          role: { select: { name: true, code: true } },
          site: { select: { name: true, code: true } },
        },
        orderBy: { date: 'asc' },
      });

      type ManpowerRecord = (typeof records)[0];
      return records.map((record: ManpowerRecord) => ({
        Date: record.date.toISOString().split('T')[0],
        SiteCode: record.site.code,
        SiteName: record.site.name,
        RoleCode: record.role.code,
        RoleName: record.role.name,
        Headcount: record.headcount,
        Hours: record.hours.toNumber(),
        Shift: record.shift || '',
        Notes: record.notes || '',
      }));
    }

    case 'inventory': {
      const records = await prisma.inventorySnapshot.findMany({
        where: whereClause,
        include: {
          material: { select: { name: true, code: true, category: true } },
          site: { select: { name: true, code: true } },
        },
        orderBy: { date: 'asc' },
      });

      type InventoryRecord = (typeof records)[0];
      return records.map((record: InventoryRecord) => ({
        Date: record.date.toISOString().split('T')[0],
        SiteCode: record.site.code,
        SiteName: record.site.name,
        MaterialCode: record.material.code,
        MaterialName: record.material.name,
        MaterialCategory: record.material.category,
        OpeningTon: record.openingTon.toNumber(),
        ProducedTon: record.producedTon.toNumber(),
        ReceivedTon: record.receivedTon.toNumber(),
        DispatchedTon: record.dispatchedTon.toNumber(),
        AdjustmentTon: record.adjustmentTon.toNumber(),
        ClosingTon: record.closingTon.toNumber(),
      }));
    }

    default:
      throw new Error(`Unknown module: ${module}`);
  }
}
