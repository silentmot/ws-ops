'use server';

import { auth } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';
import { prisma } from '@/lib/db';
import { ProductionSchema, type ProductionInput } from '@deskops/database';
import { isValidMaterialId, isValidOperationType } from '@deskops/constants';
import { Prisma } from '@prisma/client';

interface ActionResult {
  success: boolean;
  production?: Prisma.ProductionGetPayload<{
    include: {
      material: {
        select: {
          code: true;
          name: true;
          uom: true;
        };
      };
    };
  }>;
  error?: string;
}

export async function createProduction(
  data: ProductionInput
): Promise<ActionResult> {
  try {
    const { userId } = await auth();

    if (!userId) {
      return { success: false, error: 'Unauthorized' };
    }

    const validatedData = ProductionSchema.parse(data);

    if (!isValidMaterialId(validatedData.materialId)) {
      return { success: false, error: 'Invalid material ID' };
    }

    if (!isValidOperationType(validatedData.operation)) {
      return { success: false, error: 'Invalid operation type' };
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

    revalidatePath('/dashboard');
    revalidatePath('/dashboard/production');

    return { success: true, production };
  } catch (error) {
    console.error('Failed to create production:', error);
    return { success: false, error: 'Failed to create production record' };
  }
}

export async function updateProduction(
  id: string,
  data: Partial<ProductionInput>
): Promise<ActionResult> {
  try {
    const { userId } = await auth();

    if (!userId) {
      return { success: false, error: 'Unauthorized' };
    }

    // Validate materialId if provided
    if (data.materialId !== undefined && !isValidMaterialId(data.materialId)) {
      return { success: false, error: 'Invalid material ID' };
    }

    // Validate operation if provided
    if (data.operation !== undefined && !isValidOperationType(data.operation)) {
      return { success: false, error: 'Invalid operation type' };
    }

    const updateData: Record<string, unknown> = {
      updatedAt: new Date(),
    };

    if (data.siteId !== undefined) updateData['siteId'] = data.siteId;
    if (data.date !== undefined) updateData['date'] = data.date;
    if (data.shift !== undefined) updateData['shift'] = data.shift ?? null;
    if (data.materialId !== undefined) updateData['materialId'] = data.materialId;
    if (data.qtyTon !== undefined) updateData['qtyTon'] = data.qtyTon;
    if (data.operation !== undefined) updateData['operation'] = data.operation;
    if (data.notes !== undefined) updateData['notes'] = data.notes ?? null;

    const production = await prisma.production.update({
      where: { id },
      data: updateData,
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

    revalidatePath('/dashboard');
    revalidatePath('/dashboard/production');

    return { success: true, production };
  } catch (error) {
    console.error('Failed to update production:', error);
    return { success: false, error: 'Failed to update production record' };
  }
}

interface DeleteResult {
  success: boolean;
  error?: string;
}

export async function deleteProduction(id: string): Promise<DeleteResult> {
  try {
    const { userId } = await auth();

    if (!userId) {
      return { success: false, error: 'Unauthorized' };
    }

    await prisma.production.delete({
      where: { id },
    });

    revalidatePath('/dashboard');
    revalidatePath('/dashboard/production');

    return { success: true };
  } catch (error) {
    console.error('Failed to delete production:', error);
    return { success: false, error: 'Failed to delete production record' };
  }
}
