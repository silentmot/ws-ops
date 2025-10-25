import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { prisma } from '@/lib/db';
import { EquipmentLogSchema } from '@deskops/database';
import { isValidEquipmentId } from '@deskops/constants';
import { handleApiError } from '@/lib/error-handler';

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
    const siteId = searchParams.get('siteId');
    const dateFrom = searchParams.get('dateFrom');
    const dateTo = searchParams.get('dateTo');

    if (!siteId) {
      return NextResponse.json(
        { message: 'siteId parameter required' },
        { status: 400 }
      );
    }

    const whereClause: { siteId: string; date?: { gte?: Date; lte?: Date } } = {
      siteId,
    };

    if (dateFrom && dateTo) {
      whereClause.date = {
        gte: new Date(dateFrom),
        lte: new Date(dateTo),
      };
    } else if (dateFrom) {
      whereClause.date = {
        gte: new Date(dateFrom),
      };
    } else if (dateTo) {
      whereClause.date = {
        lte: new Date(dateTo),
      };
    }

    const equipmentLogs = await prisma.equipmentLog.findMany({
      where: whereClause,
      include: {
        equipment: {
          select: {
            code: true,
            name: true,
            type: true,
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

    return NextResponse.json({ equipmentLogs });
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
    const validatedData = EquipmentLogSchema.parse(body);

    if (!isValidEquipmentId(validatedData.equipmentId)) {
      return NextResponse.json(
        { message: 'Invalid equipment ID' },
        { status: 400 }
      );
    }

    const equipmentLog = await prisma.equipmentLog.create({
      data: {
        siteId: validatedData.siteId,
        date: validatedData.date,
        equipmentId: validatedData.equipmentId,
        hours: validatedData.hours,
        count: validatedData.count,
        shift: validatedData.shift ?? null,
        status: validatedData.status ?? null,
        notes: validatedData.notes ?? null,
        createdBy: userId,
      },
      include: {
        equipment: {
          select: {
            code: true,
            name: true,
            type: true,
          },
        },
      },
    });

    return NextResponse.json(equipmentLog, { status: 201 });
  } catch (error) {
    return handleApiError(error);
  }
}
