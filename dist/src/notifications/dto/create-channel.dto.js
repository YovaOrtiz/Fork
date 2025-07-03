"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateChannelSchema = void 0;
const client_1 = require("@prisma/client");
const zod_1 = require("zod");
exports.CreateChannelSchema = zod_1.z.object({
    userId: zod_1.z.number(),
    type: zod_1.z.nativeEnum(client_1.NotificationChannelType),
    config: zod_1.z.any(),
    enabled: zod_1.z.boolean().optional(),
});
//# sourceMappingURL=create-channel.dto.js.map