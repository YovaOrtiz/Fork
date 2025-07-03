"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateNotificationSchema = void 0;
const client_1 = require("@prisma/client");
const zod_1 = require("zod");
exports.CreateNotificationSchema = zod_1.z.object({
    userId: zod_1.z.number(),
    type: zod_1.z.nativeEnum(client_1.NotificationType),
    title: zod_1.z.string().min(1),
    message: zod_1.z.string().min(1),
    priority: zod_1.z.nativeEnum(client_1.NotificationPriority),
    channel: zod_1.z.nativeEnum(client_1.NotificationChannelType),
    meta: zod_1.z.any().optional(),
});
//# sourceMappingURL=create-notification.dto.js.map