import { z } from 'zod';
export declare const SolicitudStatus: z.ZodEnum<["pending", "accepted", "rejected", "completed"]>;
export declare const SolicitudPriority: z.ZodEnum<["low", "medium", "high", "urgent"]>;
export declare const CreateSolicitudSchema: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodString;
    projectId: z.ZodString;
    projectName: z.ZodString;
    fromArea: z.ZodString;
    toArea: z.ZodString;
    priority: z.ZodEnum<["low", "medium", "high", "urgent"]>;
    dueDate: z.ZodOptional<z.ZodString>;
    createdBy: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id?: string;
        name?: string;
    }, {
        id?: string;
        name?: string;
    }>;
    assignedTo: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id?: string;
        name?: string;
    }, {
        id?: string;
        name?: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    description?: string;
    priority?: "high" | "medium" | "low" | "urgent";
    createdBy?: {
        id?: string;
        name?: string;
    };
    dueDate?: string;
    projectId?: string;
    title?: string;
    projectName?: string;
    fromArea?: string;
    toArea?: string;
    assignedTo?: {
        id?: string;
        name?: string;
    };
}, {
    description?: string;
    priority?: "high" | "medium" | "low" | "urgent";
    createdBy?: {
        id?: string;
        name?: string;
    };
    dueDate?: string;
    projectId?: string;
    title?: string;
    projectName?: string;
    fromArea?: string;
    toArea?: string;
    assignedTo?: {
        id?: string;
        name?: string;
    };
}>;
export declare const CreateComentarioSchema: z.ZodObject<{
    text: z.ZodString;
    userId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    userId?: string;
    text?: string;
}, {
    userId?: string;
    text?: string;
}>;
export declare const FilterSolicitudesSchema: z.ZodObject<{
    status: z.ZodOptional<z.ZodEnum<["pending", "accepted", "rejected", "completed"]>>;
    priority: z.ZodOptional<z.ZodEnum<["low", "medium", "high", "urgent"]>>;
    fromArea: z.ZodOptional<z.ZodString>;
    toArea: z.ZodOptional<z.ZodString>;
    dateFrom: z.ZodOptional<z.ZodString>;
    dateTo: z.ZodOptional<z.ZodString>;
    q: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    priority?: "high" | "medium" | "low" | "urgent";
    status?: "completed" | "pending" | "accepted" | "rejected";
    fromArea?: string;
    toArea?: string;
    dateFrom?: string;
    dateTo?: string;
    q?: string;
}, {
    priority?: "high" | "medium" | "low" | "urgent";
    status?: "completed" | "pending" | "accepted" | "rejected";
    fromArea?: string;
    toArea?: string;
    dateFrom?: string;
    dateTo?: string;
    q?: string;
}>;
export type CreateSolicitudDto = z.infer<typeof CreateSolicitudSchema>;
export type CreateComentarioDto = z.infer<typeof CreateComentarioSchema>;
export type FilterSolicitudesDto = z.infer<typeof FilterSolicitudesSchema>;
