import { z } from 'zod';
export declare const CreateSettingSchema: z.ZodObject<{
    userId: z.ZodNumber;
    type: z.ZodNativeEnum<{
        project_created: "project_created";
        project_updated: "project_updated";
        system_alert: "system_alert";
        custom: "custom";
    }>;
    priority: z.ZodNativeEnum<{
        low: "low";
        medium: "medium";
        high: "high";
        urgent: "urgent";
    }>;
    channels: z.ZodArray<z.ZodNativeEnum<{
        email: "email";
        slack: "slack";
        telegram: "telegram";
    }>, "many">;
    enabled: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    priority?: "high" | "medium" | "low" | "urgent";
    type?: "custom" | "project_created" | "project_updated" | "system_alert";
    userId?: number;
    enabled?: boolean;
    channels?: ("email" | "slack" | "telegram")[];
}, {
    priority?: "high" | "medium" | "low" | "urgent";
    type?: "custom" | "project_created" | "project_updated" | "system_alert";
    userId?: number;
    enabled?: boolean;
    channels?: ("email" | "slack" | "telegram")[];
}>;
export type CreateSettingDto = z.infer<typeof CreateSettingSchema>;
