"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterSolicitudesSchema = exports.CreateComentarioSchema = exports.CreateSolicitudSchema = exports.SolicitudPriority = exports.SolicitudStatus = void 0;
const zod_1 = require("zod");
exports.SolicitudStatus = zod_1.z.enum(["pending", "accepted", "rejected", "completed"]);
exports.SolicitudPriority = zod_1.z.enum(["low", "medium", "high", "urgent"]);
exports.CreateSolicitudSchema = zod_1.z.object({
    title: zod_1.z.string().min(1),
    description: zod_1.z.string().min(1),
    projectId: zod_1.z.string(),
    projectName: zod_1.z.string(),
    fromArea: zod_1.z.string(),
    toArea: zod_1.z.string(),
    priority: exports.SolicitudPriority,
    dueDate: zod_1.z.string().datetime().optional(),
    createdBy: zod_1.z.object({ id: zod_1.z.string(), name: zod_1.z.string() }),
    assignedTo: zod_1.z.object({ id: zod_1.z.string(), name: zod_1.z.string() }).optional()
});
exports.CreateComentarioSchema = zod_1.z.object({
    text: zod_1.z.string().min(1),
    userId: zod_1.z.string(),
});
exports.FilterSolicitudesSchema = zod_1.z.object({
    status: exports.SolicitudStatus.optional(),
    priority: exports.SolicitudPriority.optional(),
    fromArea: zod_1.z.string().optional(),
    toArea: zod_1.z.string().optional(),
    dateFrom: zod_1.z.string().datetime().optional(),
    dateTo: zod_1.z.string().datetime().optional(),
    q: zod_1.z.string().optional(),
});
//# sourceMappingURL=solicitud.dto.js.map