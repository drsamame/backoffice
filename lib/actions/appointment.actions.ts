'use server';

import { db } from '../db';
import { auth } from '@/auth';

export const getPaginatedAppointments = async (
  page: number = 1,
  limit: number = 10,
  filters: { betType?: string } = {}
) => {
  const session = await auth();
  const userRole = session?.user?.role;

  if (userRole !== 'admin') {
    return { success: false, error: 'error 401' };
  }

  try {
    const skip = (page - 1) * limit;

    const where: any = {};
    if (filters.betType) {
      where.betType = filters.betType;
    }

    const [appointments, totalCount, scheduledCount, pendingCount, cancelledCount] = await Promise.all([
      db.appointment.findMany({
        where,
        orderBy: [{ schedule: 'desc' }],
        skip,
        take: limit,
      }),
      db.appointment.count({ where }),
      db.appointment.count({ where: { ...where, status: 'scheduled' } }),
      db.appointment.count({ where: { ...where, status: 'pending' } }),
      db.appointment.count({ where: { ...where, status: 'cancelled' } }),
    ]);

    return {
      success: true,
      data: {
        appointments,
        totalCount,
        scheduledCount,
        pendingCount,
        cancelledCount,
        page,
        limit,
        totalPages: Math.ceil(totalCount / limit),
      },
    };
  } catch (error) {
    console.error(error);
    return { success: false, error: 'error 500' };
  }
};