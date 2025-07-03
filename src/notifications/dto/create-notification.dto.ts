import { NotificationPriority, NotificationType, NotificationChannelType } from '@prisma/client';
import { z } from 'zod';

export const CreateNotificationSchema = z.object({
  userId: z.number(),
  type: z.nativeEnum(NotificationType),
  title: z.string().min(1),
  message: z.string().min(1),
  priority: z.nativeEnum(NotificationPriority),
  channel: z.nativeEnum(NotificationChannelType),
  meta: z.any().optional(),
});

export type CreateNotificationDto = z.infer<typeof CreateNotificationSchema>;
