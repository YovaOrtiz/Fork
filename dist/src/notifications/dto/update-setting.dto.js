"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSettingSchema = void 0;
const client_1 = require("@prisma/client");
const zod_1 = require("zod");
exports.UpdateSettingSchema = zod_1.z.object({
    priority: zod_1.z.nativeEnum(client_1.NotificationPriority).optional(),
    channels: zod_1.z.array(zod_1.z.nativeEnum(client_1.NotificationChannelType)).optional(),
    enabled: zod_1.z.boolean().optional(),
});
//# sourceMappingURL=update-setting.dto.js.map