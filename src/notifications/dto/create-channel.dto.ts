import { NotificationChannelType } from '@prisma/client';
import { z } from 'zod';

export const CreateChannelSchema = z.object({
  userId: z.number(),
  type: z.nativeEnum(NotificationChannelType),
  config: z.any(),
  enabled: z.boolean().optional(),
});

export type CreateChannelDto = z.infer<typeof CreateChannelSchema>;
