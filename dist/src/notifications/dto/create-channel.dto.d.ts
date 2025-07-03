import { z } from 'zod';
export declare const CreateChannelSchema: z.ZodObject<{
    userId: z.ZodNumber;
    type: z.ZodNativeEnum<{
        email: "email";
        slack: "slack";
        telegram: "telegram";
    }>;
    config: z.ZodAny;
    enabled: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    type?: "email" | "slack" | "telegram";
    userId?: number;
    config?: any;
    enabled?: boolean;
}, {
    type?: "email" | "slack" | "telegram";
    userId?: number;
    config?: any;
    enabled?: boolean;
}>;
export type CreateChannelDto = z.infer<typeof CreateChannelSchema>;
