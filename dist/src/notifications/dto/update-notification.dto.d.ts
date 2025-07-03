import { z } from 'zod';
export declare const UpdateNotificationSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    message: z.ZodOptional<z.ZodString>;
    priority: z.ZodOptional<z.ZodNativeEnum<{
        low: "low";
        medium: "medium";
        high: "high";
        urgent: "urgent";
    }>>;
    read: z.ZodOptional<z.ZodBoolean>;
    channel: z.ZodOptional<z.ZodNativeEnum<{
        email: "email";
        slack: "slack";
        telegram: "telegram";
    }>>;
    meta: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    priority?: "high" | "medium" | "low" | "urgent";
    title?: string;
    message?: string;
    channel?: "email" | "slack" | "telegram";
    meta?: any;
    read?: boolean;
}, {
    priority?: "high" | "medium" | "low" | "urgent";
    title?: string;
    message?: string;
    channel?: "email" | "slack" | "telegram";
    meta?: any;
    read?: boolean;
}>;
export type UpdateNotificationDto = z.infer<typeof UpdateNotificationSchema>;
