import { Workbook } from 'exceljs';
import { writeFile } from 'fs/promises';
import { createHash } from 'crypto';
import { prisma } from '@/lib/db';

interface ExportResult {
  filePath: string;
  fileSize: number;
  fileHash: string;
  recordCount: number;
}

interface ExcelGeneratorOptions {
  jobId: string;
  module: string;
  siteId: string;
  dateFrom: Date;
  dateTo: Date;
  granularity: string;
}

const EXPORT_STORAGE_PATH = '{EXPORT_STORAGE_PATH}';

export async function generateExcelExport(
  options: ExcelGeneratorOptions
): Promise<ExportResult> {
  const { jobId, module, siteId, dateFrom, dateTo } = options;

  // Create workbook
  const workbook = new Workbook();
  workbook.creator = 'DeskOps Export System';
  workbook.created = new Date();

  const worksheet = workbook.addWorksheet(module.toUpperCase(), {
    properties: { defaultRowHeight: 20 },
  });

  // Fetch data based on module
  const data = await fetchModuleData(module, siteId, dateFrom, dateTo);

  if (data.length === 0) {
    worksheet.addRow(['No data available for the selected period']);
  } else {
    // Get column headers from first data row
    const firstRow = data[0];
    if (!firstRow) {
      throw new Error('Data array contains undefined elements');
    }
    const headers = Object.keys(firstRow);

    // Add header row with styling
    const headerRow = worksheet.addRow(headers);
    headerRow.font = { bold: true, color: { argb: 'FFFFFFFF' } };
    headerRow.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FF366092' },
    };
    headerRow.alignment = { vertical: 'middle', horizontal: 'center' };

    // Add data rows
    data.forEach((record) => {
      const values = headers.map((header) => record[header]);
      worksheet.addRow(values);
    });

    // Auto-fit column widths
    worksheet.columns.forEach((column) => {
      if (column.eachCell) {
        let maxLength = 10;
        column.eachCell({ includeEmpty: false }, (cell) => {
          const cellValue = cell.value?.toString() || '';
          maxLength = Math.max(maxLength, cellValue.length);
        });
        column.width = Math.min(maxLength + 2, 50);
      }
    });

    // Apply auto-filter
    worksheet.autoFilter = {
      from: { row: 1, column: 1 },
      to: { row: 1, column: headers.length },
    };

    // Freeze header row
    worksheet.views = [{ state: 'frozen', ySplit: 1 }];
  }

  // Write to file
  const filePath = `${EXPORT_STORAGE_PATH}/${jobId}.xlsx`;
  const buffer = await workbook.xlsx.writeBuffer();
  await writeFile(filePath, Buffer.from(buffer));

  // Calculate file hash
  const fileHash = createHash('sha256')
    .update(Buffer.from(buffer))
    .digest('hex');

  return {
    filePath,
    fileSize: buffer.byteLength,
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
          material: { select: { name: true, uom: true } },
          site: { select: { name: true } },
        },
        orderBy: { date: 'asc' },
      });

      type ProductionRecord = (typeof records)[0];
      return records.map((record: ProductionRecord) => ({
        Date: record.date.toISOString().split('T')[0],
        Site: record.site.name,
        Material: record.material.name,
        'Quantity (Ton)': record.qtyTon,
        Operation: record.operation,
        Shift: record.shift || '',
        Notes: record.notes || '',
      }));
    }

    case 'dispatch': {
      const records = await prisma.dispatch.findMany({
        where: whereClause,
        include: {
          material: { select: { name: true, uom: true } },
          site: { select: { name: true } },
        },
        orderBy: { date: 'asc' },
      });

      type DispatchRecord = (typeof records)[0];
      return records.map((record: DispatchRecord) => ({
        Date: record.date.toISOString().split('T')[0],
        Site: record.site.name,
        Material: record.material.name,
        'Quantity (Ton)': record.qtyTon,
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
          material: { select: { name: true, uom: true } },
          site: { select: { name: true } },
        },
        orderBy: { date: 'asc' },
      });

      type ReceivedRecord = (typeof records)[0];
      return records.map((record: ReceivedRecord) => ({
        Date: record.date.toISOString().split('T')[0],
        Site: record.site.name,
        Material: record.material.name,
        'Quantity (Ton)': record.qtyTon,
        Source: record.source || '',
        'Vehicle Reference': record.vehicleRef || '',
        Notes: record.notes || '',
      }));
    }

    case 'equipment': {
      const records = await prisma.equipmentLog.findMany({
        where: whereClause,
        include: {
          equipment: { select: { name: true, type: true } },
          site: { select: { name: true } },
        },
        orderBy: { date: 'asc' },
      });

      type EquipmentRecord = (typeof records)[0];
      return records.map((record: EquipmentRecord) => ({
        Date: record.date.toISOString().split('T')[0],
        Site: record.site.name,
        Equipment: record.equipment.name,
        Type: record.equipment.type,
        Hours: record.hours,
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
          role: { select: { name: true } },
          site: { select: { name: true } },
        },
        orderBy: { date: 'asc' },
      });

      type ManpowerRecord = (typeof records)[0];
      return records.map((record: ManpowerRecord) => ({
        Date: record.date.toISOString().split('T')[0],
        Site: record.site.name,
        Role: record.role.name,
        Headcount: record.headcount,
        Hours: record.hours,
        Shift: record.shift || '',
        Notes: record.notes || '',
      }));
    }

    case 'inventory': {
      const records = await prisma.inventorySnapshot.findMany({
        where: whereClause,
        include: {
          material: { select: { name: true, uom: true } },
          site: { select: { name: true } },
        },
        orderBy: { date: 'asc' },
      });

      type InventoryRecord = (typeof records)[0];
      return records.map((record: InventoryRecord) => ({
        Date: record.date.toISOString().split('T')[0],
        Site: record.site.name,
        Material: record.material.name,
        'Opening (Ton)': record.openingTon,
        'Produced (Ton)': record.producedTon,
        'Received (Ton)': record.receivedTon,
        'Dispatched (Ton)': record.dispatchedTon,
        'Adjustment (Ton)': record.adjustmentTon,
        'Closing (Ton)': record.closingTon,
      }));
    }

    default:
      throw new Error(`Unknown module: ${module}`);
  }
}
