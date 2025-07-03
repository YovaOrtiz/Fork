import { z } from 'zod';
export declare const FilterNotificationSchema: z.ZodObject<{
    userId: z.ZodOptional<z.ZodNumber>;
    type: z.ZodOptional<z.ZodNativeEnum<{
        project_created: "project_created";
        project_updated: "project_updated";
        system_alert: "system_alert";
        custom: "custom";
    }>>;
    priority: z.ZodOptional<z.ZodNativeEnum<{
        low: "low";
        medium: "medium";
        high: "high";
        urgent: "urgent";
    }>>;
    channel: z.ZodOptional<z.ZodNativeEnum<{
        email: "email";
        slack: "slack";
        telegram: "telegram";
    }>>;
    read: z.ZodOptional<z.ZodBoolean>;
    search: z.ZodOptional<z.ZodString>;
    from: z.ZodOptional<z.ZodString>;
    to: z.ZodOptional<z.ZodString>;
    orderBy: z.ZodOptional<z.ZodEnum<["createdAt", "priority"]>>;
    order: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
    skip: z.ZodOptional<z.ZodNumber>;
    take: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    priority?: "high" | "medium" | "low" | "urgent";
    orderBy?: "priority" | "createdAt";
    take?: number;
    skip?: number;
    search?: string;
    type?: "custom" | "project_created" | "project_updated" | "system_alert";
    userId?: number;
    channel?: "email" | "slack" | "telegram";
    read?: boolean;
    from?: string;
    to?: string;
    order?: "asc" | "desc";
}, {
    priority?: "high" | "medium" | "low" | "urgent";
    orderBy?: "priority" | "createdAt";
    take?: number;
    skip?: number;
    search?: string;
    type?: "custom" | "project_created" | "project_updated" | "system_alert";
    userId?: number;
    channel?: "email" | "slack" | "telegram";
    read?: boolean;
    from?: string;
    to?: string;
    order?: "asc" | "desc";
}>;
export type FilterNotificationDto = z.infer<typeof FilterNotificationSchema>;
