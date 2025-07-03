import { NotificationType, NotificationPriority, NotificationChannelType } from '@prisma/client';
import { z } from 'zod';

export const CreateSettingSchema = z.object({
  userId: z.number(),
  type: z.nativeEnum(NotificationType),
  priority: z.nativeEnum(NotificationPriority),
  channels: z.array(z.nativeEnum(NotificationChannelType)),
  enabled: z.boolean().optional(),
});

export type CreateSettingDto = z.infer<typeof CreateSettingSchema>;
