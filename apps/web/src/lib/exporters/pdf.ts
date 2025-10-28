import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { writeFile } from 'fs/promises';
import { createHash } from 'crypto';
import { prisma } from '@/lib/db';

interface ExportResult {
  filePath: string;
  fileSize: number;
  fileHash: string;
  recordCount: number;
}

interface PDFGeneratorOptions {
  jobId: string;
  module: string;
  siteId: string;
  dateFrom: Date;
  dateTo: Date;
  granularity: string;
}

const EXPORT_STORAGE_PATH = '{EXPORT_STORAGE_PATH}';
const PAGE_WIDTH = 595; // A4 width in points
const PAGE_HEIGHT = 842; // A4 height in points
const MARGIN = 50;
const CONTENT_WIDTH = PAGE_WIDTH - 2 * MARGIN;

export async function generatePDFExport(
  options: PDFGeneratorOptions
): Promise<ExportResult> {
  const { jobId, module, siteId, dateFrom, dateTo } = options;

  // Create PDF document
  const pdfDoc = await PDFDocument.create();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  // Fetch data based on module
  const data = await fetchModuleData(module, siteId, dateFrom, dateTo);

  if (data.length === 0) {
    const page = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
    page.drawText('No data available for the selected period', {
      x: MARGIN,
      y: PAGE_HEIGHT - MARGIN - 20,
      size: 12,
      font,
      color: rgb(0, 0, 0),
    });
  } else {
    // Get headers from first data row
    const firstRow = data[0];
    if (!firstRow) {
      throw new Error('Data array contains undefined elements');
    }
    const headers = Object.keys(firstRow);
    const columnWidth = CONTENT_WIDTH / headers.length;

    let currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
    let currentY = PAGE_HEIGHT - MARGIN;

    // Draw title
    currentPage.drawText(`${module.toUpperCase()} EXPORT`, {
      x: MARGIN,
      y: currentY,
      size: 16,
      font: boldFont,
      color: rgb(0.21, 0.38, 0.57),
    });
    currentY -= 30;

    // Draw date range
    currentPage.drawText(
      `Period: ${dateFrom.toISOString().split('T')[0]} to ${dateTo.toISOString().split('T')[0]}`,
      {
        x: MARGIN,
        y: currentY,
        size: 10,
        font,
        color: rgb(0.4, 0.4, 0.4),
      }
    );
    currentY -= 30;

    // Draw header row
    headers.forEach((header, index) => {
      currentPage.drawText(header, {
        x: MARGIN + index * columnWidth,
        y: currentY,
        size: 10,
        font: boldFont,
        color: rgb(0, 0, 0),
        maxWidth: columnWidth - 5,
      });
    });
    currentY -= 20;

    // Draw horizontal line under headers
    currentPage.drawLine({
      start: { x: MARGIN, y: currentY },
      end: { x: PAGE_WIDTH - MARGIN, y: currentY },
      thickness: 1,
      color: rgb(0.7, 0.7, 0.7),
    });
    currentY -= 15;

    // Draw data rows
    data.forEach((record) => {
      // Check if we need a new page
      if (currentY < MARGIN + 30) {
        currentPage = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
        currentY = PAGE_HEIGHT - MARGIN;

        // Redraw headers on new page
        headers.forEach((header, index) => {
          currentPage.drawText(header, {
            x: MARGIN + index * columnWidth,
            y: currentY,
            size: 10,
            font: boldFont,
            color: rgb(0, 0, 0),
            maxWidth: columnWidth - 5,
          });
        });
        currentY -= 20;

        currentPage.drawLine({
          start: { x: MARGIN, y: currentY },
          end: { x: PAGE_WIDTH - MARGIN, y: currentY },
          thickness: 1,
          color: rgb(0.7, 0.7, 0.7),
        });
        currentY -= 15;
      }

      headers.forEach((header, index) => {
        const value = record[header]?.toString() || '';
        currentPage.drawText(value, {
          x: MARGIN + index * columnWidth,
          y: currentY,
          size: 9,
          font,
          color: rgb(0, 0, 0),
          maxWidth: columnWidth - 5,
        });
      });

      currentY -= 15;
    });

    // Add page numbers
    const pages = pdfDoc.getPages();
    pages.forEach((page, index) => {
      page.drawText(`Page ${index + 1} of ${pages.length}`, {
        x: PAGE_WIDTH / 2 - 30,
        y: MARGIN / 2,
        size: 8,
        font,
        color: rgb(0.5, 0.5, 0.5),
      });
    });
  }

  // Save PDF to buffer
  const pdfBytes = await pdfDoc.save();

  // Write to file
  const filePath = `${EXPORT_STORAGE_PATH}/${jobId}.pdf`;
  await writeFile(filePath, pdfBytes);

  // Calculate file hash
  const fileHash = createHash('sha256')
    .update(Buffer.from(pdfBytes))
    .digest('hex');

  return {
    filePath,
    fileSize: pdfBytes.length,
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
          material: { select: { name: true } },
          site: { select: { name: true } },
        },
        orderBy: { date: 'asc' },
      });

      type ProductionRecord = (typeof records)[0];
      return records.map((record: ProductionRecord) => ({
        Date: record.date.toISOString().split('T')[0],
        Site: record.site.name,
        Material: record.material.name,
        'Qty (T)': record.qtyTon.toNumber().toFixed(2),
        Operation: record.operation,
        Shift: record.shift || '',
      }));
    }

    case 'dispatch': {
      const records = await prisma.dispatch.findMany({
        where: whereClause,
        include: {
          material: { select: { name: true } },
          site: { select: { name: true } },
        },
        orderBy: { date: 'asc' },
      });

      type DispatchRecord = (typeof records)[0];
      return records.map((record: DispatchRecord) => ({
        Date: record.date.toISOString().split('T')[0],
        Site: record.site.name,
        Material: record.material.name,
        'Qty (T)': record.qtyTon.toNumber().toFixed(2),
        Owner: record.owner || '',
        Reference: record.reference || '',
      }));
    }

    case 'received': {
      const records = await prisma.receivedMaterial.findMany({
        where: whereClause,
        include: {
          material: { select: { name: true } },
          site: { select: { name: true } },
        },
        orderBy: { date: 'asc' },
      });

      type ReceivedRecord = (typeof records)[0];
      return records.map((record: ReceivedRecord) => ({
        Date: record.date.toISOString().split('T')[0],
        Site: record.site.name,
        Material: record.material.name,
        'Qty (T)': record.qtyTon.toNumber().toFixed(2),
        Source: record.source || '',
        Vehicle: record.vehicleRef || '',
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
        Hours: record.hours.toNumber().toFixed(1),
        Count: record.count.toString(),
        Status: record.status || '',
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
        Headcount: record.headcount.toString(),
        Hours: record.hours.toNumber().toFixed(1),
        Shift: record.shift || '',
      }));
    }

    case 'inventory': {
      const records = await prisma.inventorySnapshot.findMany({
        where: whereClause,
        include: {
          material: { select: { name: true } },
          site: { select: { name: true } },
        },
        orderBy: { date: 'asc' },
      });

      type InventoryRecord = (typeof records)[0];
      return records.map((record: InventoryRecord) => ({
        Date: record.date.toISOString().split('T')[0],
        Site: record.site.name,
        Material: record.material.name,
        'Opening (T)': record.openingTon.toNumber().toFixed(2),
        'Received (T)': record.receivedTon.toNumber().toFixed(2),
        'Dispatched (T)': record.dispatchedTon.toNumber().toFixed(2),
        'Closing (T)': record.closingTon.toNumber().toFixed(2),
      }));
    }

    default:
      throw new Error(`Unknown module: ${module}`);
  }
}
