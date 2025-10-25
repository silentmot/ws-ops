import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { prisma } from '@/lib/db';
import { ReceivedMaterialSchema } from '@deskops/database';
import { isValidMaterialId } from '@deskops/constants';
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

    const receivedMaterials = await prisma.receivedMaterial.findMany({
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

    return NextResponse.json({ receivedMaterials });
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
    const validatedData = ReceivedMaterialSchema.parse(body);

    if (!isValidMaterialId(validatedData.materialId)) {
      return NextResponse.json(
        { message: 'Invalid material ID' },
        { status: 400 }
      );
    }

    const receivedMaterial = await prisma.receivedMaterial.create({
      data: {
        siteId: validatedData.siteId,
        date: validatedData.date,
        materialId: validatedData.materialId,
        qtyTon: validatedData.qtyTon,
        source: validatedData.source ?? null,
        vehicleRef: validatedData.vehicleRef ?? null,
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

    return NextResponse.json(receivedMaterial, { status: 201 });
  } catch (error) {
    return handleApiError(error);
  }
}
