import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { prisma } from '@/lib/db';
import { ProductionSchema } from '@deskops/database';
import { isValidMaterialId, isValidOperationType } from '@deskops/constants';
import { handleApiError } from '@/lib/error-handler';
import { z } from 'zod';

const ProductionQuerySchema = z.object({
  siteId: z.string().min(1),
  dateFrom: z.string().datetime().optional(),
  dateTo: z.string().datetime().optional(),
});

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const queryParams = ProductionQuerySchema.parse({
      siteId: searchParams.get('siteId'),
      dateFrom: searchParams.get('dateFrom') ?? undefined,
      dateTo: searchParams.get('dateTo') ?? undefined,
    });

    const { siteId, dateFrom, dateTo } = queryParams;

    // Validate date range
    if (dateFrom && dateTo) {
      const dateFromObj = new Date(dateFrom);
      const dateToObj = new Date(dateTo);
      if (dateFromObj > dateToObj) {
        return NextResponse.json(
          { message: 'dateFrom must be less than or equal to dateTo' },
          { status: 400 }
        );
      }
    }

    const whereClause: { siteId: string; date?: { gte?: Date; lte?: Date } } = {
      siteId,
    };

    if (dateFrom || dateTo) {
      whereClause.date = {};
      if (dateFrom) {
        whereClause.date.gte = new Date(dateFrom);
      }
      if (dateTo) {
        whereClause.date.lte = new Date(dateTo);
      }
    }

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
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      );
    }

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
        createdBy: userId,
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
