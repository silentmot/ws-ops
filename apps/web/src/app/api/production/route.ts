import type { NextRequest} from 'next/server';
import { NextResponse } from 'next/server';
import { ProductionSchema } from '@deskops/database';
import { isValidMaterialId, isValidOperationType } from '@deskops/constants';
import { handleApiError } from '@/lib/error-handler';
import {
  checkAuth,
  parseQueryParams,
  validateDateRange,
  buildDateRangeWhereClause,
} from '@/lib/api-helpers';
import { prisma } from '@/lib/db';

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const { userId, unauthorized } = await checkAuth();
    if (unauthorized) return unauthorized;

    const { searchParams } = new URL(request.url);
    const queryParams = parseQueryParams(searchParams);
    const { siteId, dateFrom, dateTo } = queryParams;

    const validation = validateDateRange(dateFrom, dateTo);
    if (!validation.valid && validation.error) {
      return validation.error;
    }

    const whereClause = buildDateRangeWhereClause({ siteId, dateFrom, dateTo });

    const productions = await prisma.production.findMany({
      where: whereClause,
      include: {
        material: {
          select: {
            code: true,
            name: true,
            category: true,
            uom: true,
          },
        },
        site: {
          select: {
            code: true,
            name: true,
          },
        },
      },
      orderBy: [{ date: 'desc' }, { createdAt: 'desc' }],
    });

    return NextResponse.json({ productions });
  } catch (error) {
    return handleApiError(error);
  }
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const { userId, unauthorized } = await checkAuth();
    if (unauthorized) return unauthorized;

    const body = await request.json();
    const validatedData = ProductionSchema.parse(body);

    if (!isValidMaterialId(validatedData.materialId)) {
      return NextResponse.json(
        { message: 'Invalid material ID' },
        { status: 400 }
      );
    }

    if (!isValidOperationType(validatedData.operation)) {
      return NextResponse.json(
        { message: 'Invalid operation type' },
        { status: 400 }
      );
    }

    const production = await prisma.production.create({
      data: {
        siteId: validatedData.siteId,
        date: validatedData.date,
        shift: validatedData.shift ?? null,
        materialId: validatedData.materialId,
        qtyTon: validatedData.qtyTon,
        operation: validatedData.operation,
        notes: validatedData.notes ?? null,
        createdBy: userId as string,
      },
      include: {
        material: {
          select: {
            code: true,
            name: true,
            uom: true,
          },
        },
      },
    });

    return NextResponse.json(production, { status: 201 });
  } catch (error) {
    return handleApiError(error);
  }
}
