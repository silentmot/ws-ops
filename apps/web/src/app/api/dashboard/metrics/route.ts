import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { prisma } from '@/lib/db';
import { handleApiError } from '@/lib/error-handler';

interface DashboardMetrics {
  totalProduction: {
    current: number;
    previous: number;
    percentageChange: number;
  };
  totalDispatched: {
    current: number;
    previous: number;
    percentageChange: number;
  };
  totalReceived: {
    current: number;
    previous: number;
    percentageChange: number;
  };
  equipmentUtilization: {
    current: number;
    previous: number;
    percentageChange: number;
  };
  currentInventoryStatus: {
    current: number;
    previous: number;
    percentageChange: number;
  };
}

function calculatePercentageChange(current: number, previous: number): number {
  if (previous === 0) {
    return current > 0 ? 100 : 0;
  }
  return ((current - previous) / previous) * 100;
}

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

    let currentStartDate: Date;
    let currentEndDate: Date;

    if (!dateFrom && !dateTo) {
      // Default to today
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      currentStartDate = today;
      currentEndDate = new Date(today);
      currentEndDate.setHours(23, 59, 59, 999);
    } else if (dateFrom && !dateTo) {
      // Single date provided - use as single-day window
      currentStartDate = new Date(dateFrom);
      currentEndDate = new Date(dateFrom);
    } else if (!dateFrom && dateTo) {
      // Single date provided - use as single-day window
      currentStartDate = new Date(dateTo);
      currentEndDate = new Date(dateTo);
    } else {
      // Both dates provided
      currentStartDate = new Date(dateFrom as string);
      currentEndDate = new Date(dateTo as string);
    }

    // Normalize to start-of-day for consistent boundaries
    currentStartDate.setHours(0, 0, 0, 0);
    currentEndDate.setHours(0, 0, 0, 0);

    const dayMs = 1000 * 60 * 60 * 24;
    const daysDifference = Math.max(
      1,
      Math.floor((currentEndDate.getTime() - currentStartDate.getTime()) / dayMs) + 1
    );

    const previousStartDate = new Date(currentStartDate);
    previousStartDate.setDate(previousStartDate.getDate() - daysDifference);
    const previousEndDate = new Date(currentStartDate);
    previousEndDate.setDate(previousEndDate.getDate() - 1);

    const [
      currentProductionSum,
      previousProductionSum,
      currentDispatchedSum,
      previousDispatchedSum,
      currentReceivedSum,
      previousReceivedSum,
      currentEquipmentHours,
      previousEquipmentHours,
      currentInventorySum,
      previousInventorySum,
    ] = await Promise.all([
      prisma.production.aggregate({
        where: {
          siteId,
          date: { gte: currentStartDate, lte: currentEndDate },
        },
        _sum: { qtyTon: true },
      }),
      prisma.production.aggregate({
        where: {
          siteId,
          date: { gte: previousStartDate, lte: previousEndDate },
        },
        _sum: { qtyTon: true },
      }),
      prisma.dispatch.aggregate({
        where: {
          siteId,
          date: { gte: currentStartDate, lte: currentEndDate },
        },
        _sum: { qtyTon: true },
      }),
      prisma.dispatch.aggregate({
        where: {
          siteId,
          date: { gte: previousStartDate, lte: previousEndDate },
        },
        _sum: { qtyTon: true },
      }),
      prisma.receivedMaterial.aggregate({
        where: {
          siteId,
          date: { gte: currentStartDate, lte: currentEndDate },
        },
        _sum: { qtyTon: true },
      }),
      prisma.receivedMaterial.aggregate({
        where: {
          siteId,
          date: { gte: previousStartDate, lte: previousEndDate },
        },
        _sum: { qtyTon: true },
      }),
      prisma.equipmentLog.aggregate({
        where: {
          siteId,
          date: { gte: currentStartDate, lte: currentEndDate },
        },
        _sum: { hours: true },
      }),
      prisma.equipmentLog.aggregate({
        where: {
          siteId,
          date: { gte: previousStartDate, lte: previousEndDate },
        },
        _sum: { hours: true },
      }),
      prisma.inventorySnapshot.aggregate({
        where: {
          siteId,
          date: { lte: currentEndDate },
        },
        _sum: { closingTon: true },
      }),
      prisma.inventorySnapshot.aggregate({
        where: {
          siteId,
          date: { lte: previousEndDate },
        },
        _sum: { closingTon: true },
      }),
    ]);

    const metrics: DashboardMetrics = {
      totalProduction: {
        current: Number(currentProductionSum._sum.qtyTon ?? 0),
        previous: Number(previousProductionSum._sum.qtyTon ?? 0),
        percentageChange: calculatePercentageChange(
          Number(currentProductionSum._sum.qtyTon ?? 0),
          Number(previousProductionSum._sum.qtyTon ?? 0)
        ),
      },
      totalDispatched: {
        current: Number(currentDispatchedSum._sum.qtyTon ?? 0),
        previous: Number(previousDispatchedSum._sum.qtyTon ?? 0),
        percentageChange: calculatePercentageChange(
          Number(currentDispatchedSum._sum.qtyTon ?? 0),
          Number(previousDispatchedSum._sum.qtyTon ?? 0)
        ),
      },
      totalReceived: {
        current: Number(currentReceivedSum._sum.qtyTon ?? 0),
        previous: Number(previousReceivedSum._sum.qtyTon ?? 0),
        percentageChange: calculatePercentageChange(
          Number(currentReceivedSum._sum.qtyTon ?? 0),
          Number(previousReceivedSum._sum.qtyTon ?? 0)
        ),
      },
      equipmentUtilization: {
        current: Number(currentEquipmentHours._sum.hours ?? 0),
        previous: Number(previousEquipmentHours._sum.hours ?? 0),
        percentageChange: calculatePercentageChange(
          Number(currentEquipmentHours._sum.hours ?? 0),
          Number(previousEquipmentHours._sum.hours ?? 0)
        ),
      },
      currentInventoryStatus: {
        current: Number(currentInventorySum._sum.closingTon ?? 0),
        previous: Number(previousInventorySum._sum.closingTon ?? 0),
        percentageChange: calculatePercentageChange(
          Number(currentInventorySum._sum.closingTon ?? 0),
          Number(previousInventorySum._sum.closingTon ?? 0)
        ),
      },
    };

    return NextResponse.json(metrics);
  } catch (error) {
    return handleApiError(error);
  }
}
