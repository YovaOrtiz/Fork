"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSettingSchema = void 0;
const client_1 = require("@prisma/client");
const zod_1 = require("zod");
exports.CreateSettingSchema = zod_1.z.object({
    userId: zod_1.z.number(),
    type: zod_1.z.nativeEnum(client_1.NotificationType),
    priority: zod_1.z.nativeEnum(client_1.NotificationPriority),
    channels: zod_1.z.array(zod_1.z.nativeEnum(client_1.NotificationChannelType)),
    enabled: zod_1.z.boolean().optional(),
});
//# sourceMappingURL=create-setting.dto.js.map