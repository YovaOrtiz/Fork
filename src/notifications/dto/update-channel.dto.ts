import { NotificationChannelType } from '@prisma/client';
import { z } from 'zod';

export const UpdateChannelSchema = z.object({
  config: z.any().optional(),
  enabled: z.boolean().optional(),
});

export type UpdateChannelDto = z.infer<typeof UpdateChannelSchema>;
