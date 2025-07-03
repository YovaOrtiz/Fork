import { z } from 'zod';
export declare const UpdateSettingSchema: z.ZodObject<{
    priority: z.ZodOptional<z.ZodNativeEnum<{
        low: "low";
        medium: "medium";
        high: "high";
        urgent: "urgent";
    }>>;
    channels: z.ZodOptional<z.ZodArray<z.ZodNativeEnum<{
        email: "email";
        slack: "slack";
        telegram: "telegram";
    }>, "many">>;
    enabled: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    priority?: "high" | "medium" | "low" | "urgent";
    enabled?: boolean;
    channels?: ("email" | "slack" | "telegram")[];
}, {
    priority?: "high" | "medium" | "low" | "urgent";
    enabled?: boolean;
    channels?: ("email" | "slack" | "telegram")[];
}>;
export type UpdateSettingDto = z.infer<typeof UpdateSettingSchema>;
