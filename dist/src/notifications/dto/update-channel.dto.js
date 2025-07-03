"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateChannelSchema = void 0;
const zod_1 = require("zod");
exports.UpdateChannelSchema = zod_1.z.object({
    config: zod_1.z.any().optional(),
    enabled: zod_1.z.boolean().optional(),
});
//# sourceMappingURL=update-channel.dto.js.map