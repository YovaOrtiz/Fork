"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateNotificationSchema = void 0;
const client_1 = require("@prisma/client");
const zod_1 = require("zod");
exports.UpdateNotificationSchema = zod_1.z.object({
    title: zod_1.z.string().optional(),
    message: zod_1.z.string().optional(),
    priority: zod_1.z.nativeEnum(client_1.NotificationPriority).optional(),
    read: zod_1.z.boolean().optional(),
    channel: zod_1.z.nativeEnum(client_1.NotificationChannelType).optional(),
    meta: zod_1.z.any().optional(),
});
//# sourceMappingURL=update-notification.dto.js.map