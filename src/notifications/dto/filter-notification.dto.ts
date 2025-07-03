import { NotificationPriority, NotificationType, NotificationChannelType } from '@prisma/client';
import { z } from 'zod';

export const FilterNotificationSchema = z.object({
  userId: z.number().optional(),
  type: z.nativeEnum(NotificationType).optional(),
  priority: z.nativeEnum(NotificationPriority).optional(),
  channel: z.nativeEnum(NotificationChannelType).optional(),
  read: z.boolean().optional(),
  search: z.string().optional(),
  from: z.string().datetime().optional(),
  to: z.string().datetime().optional(),
  orderBy: z.enum(['createdAt', 'priority']).optional(),
  order: z.enum(['asc', 'desc']).optional(),
  skip: z.number().optional(),
  take: z.number().optional(),
});

export type FilterNotificationDto = z.infer<typeof FilterNotificationSchema>;
