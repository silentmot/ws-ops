import { createWriteStream } from 'fs';
import { writeFile } from 'fs/promises';
import { createHash } from 'crypto';
import { prisma } from '@/lib/db';

interface ExportResult {
  filePath: string;
  fileSize: number;
  fileHash: string;
  recordCount: number;
}

interface CSVGeneratorOptions {
  jobId: string;
  module: string;
  siteId: string;
  dateFrom: Date;
  dateTo: Date;
  granularity: string;
  powerBI?: boolean;
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

export async function generateCSVExport(
  options: CSVGeneratorOptions
): Promise<ExportResult> {
  const { jobId, module, siteId, dateFrom, dateTo, powerBI = false } = options;

  // Fetch data based on module
  const data = await fetchModuleData(module, siteId, dateFrom, dateTo, powerBI);

  if (data.length === 0) {
    const csvContent = powerBI
      ? 'no-data-available\n'
      : 'No data available for the selected period\n';
    const filePath = powerBI
      ? `${EXPORT_STORAGE_PATH}/${jobId}_powerbi.csv`
      : `${EXPORT_STORAGE_PATH}/${jobId}.csv`;
    await writeFile(filePath, csvContent, 'utf8');

    const fileHash = createHash('sha256').update(csvContent).digest('hex');

    return {
      filePath,
      fileSize: Buffer.byteLength(csvContent, 'utf8'),
      fileHash,
      recordCount: 0,
    };
  }

  // Get headers from first data row
  const firstRow = data[0];
  if (!firstRow) {
    throw new Error('Data array contains undefined elements');
  }
  const originalHeaders = Object.keys(firstRow);
  const headers = powerBI ? originalHeaders.map(toKebabCase) : originalHeaders;

  // Build CSV content
  const filePath = powerBI
    ? `${EXPORT_STORAGE_PATH}/${jobId}_powerbi.csv`
    : `${EXPORT_STORAGE_PATH}/${jobId}.csv`;
  const writeStream = createWriteStream(filePath, { encoding: 'utf8' });

  // Create hash
  const hash = createHash('sha256');
  let totalSize = 0;

  // Write header row
  const headerRow = headers.map((h) => escapeCSVField(h)).join(',') + '\n';
  writeStream.write(headerRow);
  hash.update(headerRow);
  totalSize += Buffer.byteLength(headerRow, 'utf8');

  // Write data rows
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

  // Close write stream
  await new Promise<void>((resolve, reject) => {
    writeStream.end(() => {
      resolve();
    });
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

function escapeCSVField(field: string): string {
  // Escape double quotes by doubling them
  const escaped = field.replace(/"/g, '""');

  // Wrap in quotes if contains comma, newline, or double quote
  if (
    escaped.includes(',') ||
    escaped.includes('\n') ||
    escaped.includes('"')
  ) {
    return `"${escaped}"`;
  }

  return escaped;
}

async function fetchModuleData(
  module: string,
  siteId: string,
  dateFrom: Date,
  dateTo: Date,
  powerBI = false
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
          material: {
            select: { name: true, uom: true, code: true, category: true },
          },
          site: { select: { name: true, code: true } },
        },
        orderBy: { date: 'asc' },
      });

      type ProductionRecord = (typeof records)[0];
      if (powerBI) {
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
      return records.map((record: ProductionRecord) => ({
        Date: record.date.toISOString().split('T')[0],
        Site: record.site.name,
        Material: record.material.name,
        'Quantity (Ton)': record.qtyTon.toNumber().toFixed(2),
        Operation: record.operation,
        Shift: record.shift || '',
        Notes: record.notes || '',
      }));
    }

    case 'dispatch': {
      const records = await prisma.dispatch.findMany({
        where: whereClause,
        include: {
          material: {
            select: { name: true, uom: true, code: true, category: true },
          },
          site: { select: { name: true, code: true } },
        },
        orderBy: { date: 'asc' },
      });

      type DispatchRecord = (typeof records)[0];
      if (powerBI) {
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
      return records.map((record: DispatchRecord) => ({
        Date: record.date.toISOString().split('T')[0],
        Site: record.site.name,
        Material: record.material.name,
        'Quantity (Ton)': record.qtyTon.toNumber().toFixed(2),
        Trips: record.trips || '',
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
          material: {
            select: { name: true, uom: true, code: true, category: true },
          },
          site: { select: { name: true, code: true } },
        },
        orderBy: { date: 'asc' },
      });

      type ReceivedRecord = (typeof records)[0];
      if (powerBI) {
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
      return records.map((record: ReceivedRecord) => ({
        Date: record.date.toISOString().split('T')[0],
        Site: record.site.name,
        Material: record.material.name,
        'Quantity (Ton)': record.qtyTon.toNumber().toFixed(2),
        Source: record.source || '',
        'Vehicle Reference': record.vehicleRef || '',
        Notes: record.notes || '',
      }));
    }

    case 'equipment': {
      const records = await prisma.equipmentLog.findMany({
        where: whereClause,
        include: {
          equipment: { select: { name: true, type: true, code: true } },
          site: { select: { name: true, code: true } },
        },
        orderBy: { date: 'asc' },
      });

      type EquipmentRecord = (typeof records)[0];
      if (powerBI) {
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
      return records.map((record: EquipmentRecord) => ({
        Date: record.date.toISOString().split('T')[0],
        Site: record.site.name,
        Equipment: record.equipment.name,
        Type: record.equipment.type,
        Hours: record.hours.toNumber().toFixed(2),
        Count: record.count.toString(),
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
      if (powerBI) {
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
      return records.map((record: ManpowerRecord) => ({
        Date: record.date.toISOString().split('T')[0],
        Site: record.site.name,
        Role: record.role.name,
        Headcount: record.headcount.toString(),
        Hours: record.hours.toNumber().toFixed(2),
        Shift: record.shift || '',
        Notes: record.notes || '',
      }));
    }

    case 'inventory': {
      const records = await prisma.inventorySnapshot.findMany({
        where: whereClause,
        include: {
          material: {
            select: { name: true, uom: true, code: true, category: true },
          },
          site: { select: { name: true, code: true } },
        },
        orderBy: { date: 'asc' },
      });

      type InventoryRecord = (typeof records)[0];
      if (powerBI) {
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
      return records.map((record: InventoryRecord) => ({
        Date: record.date.toISOString().split('T')[0],
        Site: record.site.name,
        Material: record.material.name,
        'Opening (Ton)': record.openingTon.toNumber().toFixed(2),
        'Produced (Ton)': record.producedTon.toNumber().toFixed(2),
        'Received (Ton)': record.receivedTon.toNumber().toFixed(2),
        'Dispatched (Ton)': record.dispatchedTon.toNumber().toFixed(2),
        'Adjustment (Ton)': record.adjustmentTon.toNumber().toFixed(2),
        'Closing (Ton)': record.closingTon.toNumber().toFixed(2),
      }));
    }

    default:
      throw new Error(`Unknown module: ${module}`);
  }
}
