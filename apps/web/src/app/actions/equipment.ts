'use server';

import { auth } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';
import { prisma } from '@/lib/db';
import { EquipmentLogSchema } from '@deskops/database';
import { isValidEquipmentId } from '@deskops/constants';

export async function createEquipmentLog(data: unknown) {
  try {
    const { userId } = await auth();

    if (!userId) {
      throw new Error('Unauthorized');
    }

    const validatedData = EquipmentLogSchema.parse(data);

    if (!isValidEquipmentId(validatedData.equipmentId)) {
      throw new Error('Invalid equipment ID');
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

    revalidatePath('/dashboard');
    revalidatePath('/dashboard/equipment');

    return { success: true, data: equipmentLog };
  } catch (error) {
    if (error instanceof Error) {
      return { success: false, error: error.message };
    }
    return { success: false, error: 'Unknown error occurred' };
  }
}

export async function updateEquipmentLog(id: string, data: unknown) {
  try {
    const { userId } = await auth();

    if (!userId) {
      throw new Error('Unauthorized');
    }

    const validatedData = EquipmentLogSchema.partial().parse(data);

    if (
      validatedData.equipmentId &&
      !isValidEquipmentId(validatedData.equipmentId)
    ) {
      throw new Error('Invalid equipment ID');
    }

    const updateData: Record<string, unknown> = {};
    if (validatedData.siteId !== undefined)
      updateData['siteId'] = validatedData.siteId;
    if (validatedData.date !== undefined)
      updateData['date'] = validatedData.date;
    if (validatedData.equipmentId !== undefined)
      updateData['equipmentId'] = validatedData.equipmentId;
    if (validatedData.hours !== undefined)
      updateData['hours'] = validatedData.hours;
    if (validatedData.count !== undefined)
      updateData['count'] = validatedData.count;
    if (validatedData.shift !== undefined)
      updateData['shift'] = validatedData.shift ?? null;
    if (validatedData.status !== undefined)
      updateData['status'] = validatedData.status ?? null;
    if (validatedData.notes !== undefined)
      updateData['notes'] = validatedData.notes ?? null;
    updateData['updatedAt'] = new Date();

    const equipmentLog = await prisma.equipmentLog.update({
      where: { id },
      data: updateData,
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

    revalidatePath('/dashboard');
    revalidatePath('/dashboard/equipment');

    return { success: true, data: equipmentLog };
  } catch (error) {
    if (error instanceof Error) {
      return { success: false, error: error.message };
    }
    return { success: false, error: 'Unknown error occurred' };
  }
}

export async function deleteEquipmentLog(id: string) {
  try {
    const { userId } = await auth();

    if (!userId) {
      throw new Error('Unauthorized');
    }

    await prisma.equipmentLog.delete({
      where: { id },
    });

    revalidatePath('/dashboard');
    revalidatePath('/dashboard/equipment');

    return { success: true };
  } catch (error) {
    if (error instanceof Error) {
      return { success: false, error: error.message };
    }
    return { success: false, error: 'Unknown error occurred' };
  }
}
