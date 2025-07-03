import { z } from 'zod';
export declare const CreateNotificationSchema: z.ZodObject<{
    userId: z.ZodNumber;
    type: z.ZodNativeEnum<{
        project_created: "project_created";
        project_updated: "project_updated";
        system_alert: "system_alert";
        custom: "custom";
    }>;
    title: z.ZodString;
    message: z.ZodString;
    priority: z.ZodNativeEnum<{
        low: "low";
        medium: "medium";
        high: "high";
        urgent: "urgent";
    }>;
    channel: z.ZodNativeEnum<{
        email: "email";
        slack: "slack";
        telegram: "telegram";
    }>;
    meta: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    priority?: "high" | "medium" | "low" | "urgent";
    type?: "custom" | "project_created" | "project_updated" | "system_alert";
    title?: string;
    userId?: number;
    message?: string;
    channel?: "email" | "slack" | "telegram";
    meta?: any;
}, {
    priority?: "high" | "medium" | "low" | "urgent";
    type?: "custom" | "project_created" | "project_updated" | "system_alert";
    title?: string;
    userId?: number;
    message?: string;
    channel?: "email" | "slack" | "telegram";
    meta?: any;
}>;
export type CreateNotificationDto = z.infer<typeof CreateNotificationSchema>;
