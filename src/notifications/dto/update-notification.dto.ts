import { NotificationPriority, NotificationType, NotificationChannelType } from '@prisma/client';
import { z } from 'zod';

export const UpdateNotificationSchema = z.object({
  title: z.string().optional(),
  message: z.string().optional(),
  priority: z.nativeEnum(NotificationPriority).optional(),
  read: z.boolean().optional(),
  channel: z.nativeEnum(NotificationChannelType).optional(),
  meta: z.any().optional(),
});

export type UpdateNotificationDto = z.infer<typeof UpdateNotificationSchema>;
