import { NotificationType, NotificationPriority, NotificationChannelType } from '@prisma/client';
import { z } from 'zod';

export const UpdateSettingSchema = z.object({
  priority: z.nativeEnum(NotificationPriority).optional(),
  channels: z.array(z.nativeEnum(NotificationChannelType)).optional(),
  enabled: z.boolean().optional(),
});

export type UpdateSettingDto = z.infer<typeof UpdateSettingSchema>;
