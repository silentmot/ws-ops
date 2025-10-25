'use server';

import { auth } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';
import { prisma } from '@/lib/db';
import { ManpowerLogSchema } from '@deskops/database';

export async function createManpowerLog(data: unknown) {
  try {
    const { userId } = await auth();

    if (!userId) {
      throw new Error('Unauthorized');
    }

    const validatedData = ManpowerLogSchema.parse(data);

    const manpowerLog = await prisma.manpowerLog.create({
      data: {
        siteId: validatedData.siteId,
        date: validatedData.date,
        roleId: validatedData.roleId,
        headcount: validatedData.headcount,
        hours: validatedData.hours,
        shift: validatedData.shift ?? null,
        notes: validatedData.notes ?? null,
        createdBy: userId,
      },
      include: {
        role: {
          select: {
            code: true,
            name: true,
          },
        },
      },
    });

    revalidatePath('/dashboard');
    revalidatePath('/manpower');

    return { success: true, data: manpowerLog };
  } catch (error) {
    if (error instanceof Error) {
      return { success: false, error: error.message };
    }
    return { success: false, error: 'Unknown error occurred' };
  }
}

export async function updateManpowerLog(id: string, data: unknown) {
  try {
    const { userId } = await auth();

    if (!userId) {
      throw new Error('Unauthorized');
    }

    const validatedData = ManpowerLogSchema.partial().parse(data);

    const updateData: Record<string, unknown> = {};
    if (validatedData.siteId !== undefined) updateData['siteId'] = validatedData.siteId;
    if (validatedData.date !== undefined) updateData['date'] = validatedData.date;
    if (validatedData.roleId !== undefined) updateData['roleId'] = validatedData.roleId;
    if (validatedData.headcount !== undefined) updateData['headcount'] = validatedData.headcount;
    if (validatedData.hours !== undefined) updateData['hours'] = validatedData.hours;
    if (validatedData.shift !== undefined) updateData['shift'] = validatedData.shift ?? null;
    if (validatedData.notes !== undefined) updateData['notes'] = validatedData.notes ?? null;
    updateData['updatedAt'] = new Date();

    const manpowerLog = await prisma.manpowerLog.update({
      where: { id },
      data: updateData,
      include: {
        role: {
          select: {
            code: true,
            name: true,
          },
        },
      },
    });

    revalidatePath('/dashboard');
    revalidatePath('/manpower');

    return { success: true, data: manpowerLog };
  } catch (error) {
    if (error instanceof Error) {
      return { success: false, error: error.message };
    }
    return { success: false, error: 'Unknown error occurred' };
  }
}

export async function deleteManpowerLog(id: string) {
  try {
    const { userId } = await auth();

    if (!userId) {
      throw new Error('Unauthorized');
    }

    await prisma.manpowerLog.delete({
      where: { id },
    });

    revalidatePath('/dashboard');
    revalidatePath('/manpower');

    return { success: true };
  } catch (error) {
    if (error instanceof Error) {
      return { success: false, error: error.message };
    }
    return { success: false, error: 'Unknown error occurred' };
  }
}
