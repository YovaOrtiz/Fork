import { z } from 'zod';
export declare const UpdateChannelSchema: z.ZodObject<{
    config: z.ZodOptional<z.ZodAny>;
    enabled: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    config?: any;
    enabled?: boolean;
}, {
    config?: any;
    enabled?: boolean;
}>;
export type UpdateChannelDto = z.infer<typeof UpdateChannelSchema>;
