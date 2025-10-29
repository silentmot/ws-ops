'use server';

import { auth } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';
import { prisma } from '@/lib/db';
import {
  DispatchSchema,
  type DispatchInput,
  type Dispatch,
  type Material,
} from '@deskops/database';
import { isValidMaterialId, isValidOperationType } from '@deskops/constants';

interface ActionResult {
  success: boolean;
  dispatch?: Dispatch & {
    material: Pick<Material, 'code' | 'name' | 'uom'>;
  };
  error?: string;
}

export async function createDispatch(
  data: DispatchInput
): Promise<ActionResult> {
  try {
    const { userId } = await auth();

    if (!userId) {
      return { success: false, error: 'Unauthorized' };
    }

    const validatedData = DispatchSchema.parse(data);

    if (!isValidMaterialId(validatedData.materialId)) {
      return { success: false, error: 'Invalid material ID' };
    }

    if (!isValidOperationType(validatedData.operation)) {
      return { success: false, error: 'Invalid operation type' };
    }

    const dispatch = await prisma.dispatch.create({
      data: {
        siteId: validatedData.siteId,
        date: validatedData.date,
        materialId: validatedData.materialId,
        qtyTon: validatedData.qtyTon,
        trips: validatedData.trips ?? null,
        owner: validatedData.owner ?? null,
        reference: validatedData.reference ?? null,
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
    revalidatePath('/dashboard/dispatch');

    return { success: true, dispatch };
  } catch (error) {
    console.error('Failed to create dispatch:', error);
    return { success: false, error: 'Failed to create dispatch record' };
  }
}

export async function updateDispatch(
  id: string,
  data: Partial<DispatchInput>
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
    if (data.materialId !== undefined)
      updateData['materialId'] = data.materialId;
    if (data.qtyTon !== undefined) updateData['qtyTon'] = data.qtyTon;
    if (data.trips !== undefined) updateData['trips'] = data.trips ?? null;
    if (data.owner !== undefined) updateData['owner'] = data.owner ?? null;
    if (data.reference !== undefined)
      updateData['reference'] = data.reference ?? null;
    if (data.operation !== undefined) updateData['operation'] = data.operation;
    if (data.notes !== undefined) updateData['notes'] = data.notes ?? null;

    const dispatch = await prisma.dispatch.update({
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
    revalidatePath('/dashboard/dispatch');

    return { success: true, dispatch };
  } catch (error) {
    console.error('Failed to update dispatch:', error);
    return { success: false, error: 'Failed to update dispatch record' };
  }
}

interface DeleteResult {
  success: boolean;
  error?: string;
}

export async function deleteDispatch(id: string): Promise<DeleteResult> {
  try {
    const { userId } = await auth();

    if (!userId) {
      return { success: false, error: 'Unauthorized' };
    }

    await prisma.dispatch.delete({
      where: { id },
    });

    revalidatePath('/dashboard');
    revalidatePath('/dashboard/dispatch');

    return { success: true };
  } catch (error) {
    console.error('Failed to delete dispatch:', error);
    return { success: false, error: 'Failed to delete dispatch record' };
  }
}
