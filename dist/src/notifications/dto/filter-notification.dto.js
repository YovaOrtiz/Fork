"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterNotificationSchema = void 0;
const client_1 = require("@prisma/client");
const zod_1 = require("zod");
exports.FilterNotificationSchema = zod_1.z.object({
    userId: zod_1.z.number().optional(),
    type: zod_1.z.nativeEnum(client_1.NotificationType).optional(),
    priority: zod_1.z.nativeEnum(client_1.NotificationPriority).optional(),
    channel: zod_1.z.nativeEnum(client_1.NotificationChannelType).optional(),
    read: zod_1.z.boolean().optional(),
    search: zod_1.z.string().optional(),
    from: zod_1.z.string().datetime().optional(),
    to: zod_1.z.string().datetime().optional(),
    orderBy: zod_1.z.enum(['createdAt', 'priority']).optional(),
    order: zod_1.z.enum(['asc', 'desc']).optional(),
    skip: zod_1.z.number().optional(),
    take: zod_1.z.number().optional(),
});
//# sourceMappingURL=filter-notification.dto.js.map