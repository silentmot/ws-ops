'use server';

import { auth } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';
import { prisma } from '@/lib/db';
import { ReceivedMaterialSchema } from '@deskops/database';
import { isValidMaterialId } from '@deskops/constants';

export async function createReceivedMaterial(data: unknown) {
  try {
    const { userId } = await auth();

    if (!userId) {
      throw new Error('Unauthorized');
    }

    const validatedData = ReceivedMaterialSchema.parse(data);

    if (!isValidMaterialId(validatedData.materialId)) {
      throw new Error('Invalid material ID');
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
            category: true,
          },
        },
      },
    });

    revalidatePath('/dashboard');
    revalidatePath('/received');

    return { success: true, data: receivedMaterial };
  } catch (error) {
    if (error instanceof Error) {
      return { success: false, error: error.message };
    }
    return { success: false, error: 'Unknown error occurred' };
  }
}

export async function updateReceivedMaterial(id: string, data: unknown) {
  try {
    const { userId } = await auth();

    if (!userId) {
      throw new Error('Unauthorized');
    }

    const validatedData = ReceivedMaterialSchema.partial().parse(data);

    if (validatedData.materialId && !isValidMaterialId(validatedData.materialId)) {
      throw new Error('Invalid material ID');
    }

    const updateData: Record<string, unknown> = {};
    if (validatedData.siteId !== undefined) updateData['siteId'] = validatedData.siteId;
    if (validatedData.date !== undefined) updateData['date'] = validatedData.date;
    if (validatedData.materialId !== undefined) updateData['materialId'] = validatedData.materialId;
    if (validatedData.qtyTon !== undefined) updateData['qtyTon'] = validatedData.qtyTon;
    if (validatedData.source !== undefined) updateData['source'] = validatedData.source ?? null;
    if (validatedData.vehicleRef !== undefined) updateData['vehicleRef'] = validatedData.vehicleRef ?? null;
    if (validatedData.notes !== undefined) updateData['notes'] = validatedData.notes ?? null;
    updateData['updatedAt'] = new Date();

    const receivedMaterial = await prisma.receivedMaterial.update({
      where: { id },
      data: updateData,
      include: {
        material: {
          select: {
            code: true,
            name: true,
            category: true,
          },
        },
      },
    });

    revalidatePath('/dashboard');
    revalidatePath('/received');

    return { success: true, data: receivedMaterial };
  } catch (error) {
    if (error instanceof Error) {
      return { success: false, error: error.message };
    }
    return { success: false, error: 'Unknown error occurred' };
  }
}

export async function deleteReceivedMaterial(id: string) {
  try {
    const { userId } = await auth();

    if (!userId) {
      throw new Error('Unauthorized');
    }

    await prisma.receivedMaterial.delete({
      where: { id },
    });

    revalidatePath('/dashboard');
    revalidatePath('/received');

    return { success: true };
  } catch (error) {
    if (error instanceof Error) {
      return { success: false, error: error.message };
    }
    return { success: false, error: 'Unknown error occurred' };
  }
}
