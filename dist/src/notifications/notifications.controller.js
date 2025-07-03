"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationsController = void 0;
const common_1 = require("@nestjs/common");
const notifications_service_1 = require("./notifications.service");
const create_notification_dto_1 = require("./dto/create-notification.dto");
const update_notification_dto_1 = require("./dto/update-notification.dto");
const filter_notification_dto_1 = require("./dto/filter-notification.dto");
const create_channel_dto_1 = require("./dto/create-channel.dto");
const update_channel_dto_1 = require("./dto/update-channel.dto");
const create_setting_dto_1 = require("./dto/create-setting.dto");
const update_setting_dto_1 = require("./dto/update-setting.dto");
let NotificationsController = class NotificationsController {
    notificationsService;
    constructor(notificationsService) {
        this.notificationsService = notificationsService;
    }
    async getNotifications(query) {
        const filter = filter_notification_dto_1.FilterNotificationSchema.safeParse(query);
        if (!filter.success)
            throw new common_1.HttpException(filter.error.format(), common_1.HttpStatus.BAD_REQUEST);
        return this.notificationsService.getNotifications(filter.data);
    }
    async getNotificationById(id) {
        return this.notificationsService.getNotificationById(id);
    }
    async createNotification(body) {
        const parsed = create_notification_dto_1.CreateNotificationSchema.safeParse(body);
        if (!parsed.success)
            throw new common_1.HttpException(parsed.error.format(), common_1.HttpStatus.BAD_REQUEST);
        return this.notificationsService.createNotification(parsed.data);
    }
    async updateNotification(id, body) {
        const parsed = update_notification_dto_1.UpdateNotificationSchema.safeParse(body);
        if (!parsed.success)
            throw new common_1.HttpException(parsed.error.format(), common_1.HttpStatus.BAD_REQUEST);
        return this.notificationsService.updateNotification(id, parsed.data);
    }
    async deleteNotification(id) {
        return this.notificationsService.deleteNotification(id);
    }
    async markAsRead(id) {
        return this.notificationsService.markAsRead(id);
    }
    async markAllAsRead(userId) {
        return this.notificationsService.markAllAsRead(Number(userId));
    }
    async getChannels(userId) {
        return this.notificationsService.getChannels(Number(userId));
    }
    async createChannel(body) {
        const parsed = create_channel_dto_1.CreateChannelSchema.safeParse(body);
        if (!parsed.success)
            throw new common_1.HttpException(parsed.error.format(), common_1.HttpStatus.BAD_REQUEST);
        return this.notificationsService.createChannel(parsed.data);
    }
    async updateChannel(id, body) {
        const parsed = update_channel_dto_1.UpdateChannelSchema.safeParse(body);
        if (!parsed.success)
            throw new common_1.HttpException(parsed.error.format(), common_1.HttpStatus.BAD_REQUEST);
        return this.notificationsService.updateChannel(id, parsed.data);
    }
    async deleteChannel(id) {
        return this.notificationsService.deleteChannel(id);
    }
    async getSettings(userId) {
        return this.notificationsService.getSettings(Number(userId));
    }
    async createSetting(body) {
        const parsed = create_setting_dto_1.CreateSettingSchema.safeParse(body);
        if (!parsed.success)
            throw new common_1.HttpException(parsed.error.format(), common_1.HttpStatus.BAD_REQUEST);
        return this.notificationsService.createSetting(parsed.data);
    }
    async updateSetting(id, body) {
        const parsed = update_setting_dto_1.UpdateSettingSchema.safeParse(body);
        if (!parsed.success)
            throw new common_1.HttpException(parsed.error.format(), common_1.HttpStatus.BAD_REQUEST);
        return this.notificationsService.updateSetting(id, parsed.data);
    }
    async deleteSetting(id) {
        return this.notificationsService.deleteSetting(id);
    }
    async getStats(userId) {
        return this.notificationsService.getStats(Number(userId));
    }
    async sendTestNotification(body) {
        return { success: true, message: 'Notificación de prueba enviada (mock)', data: body };
    }
};
exports.NotificationsController = NotificationsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NotificationsController.prototype, "getNotifications", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotificationsController.prototype, "getNotificationById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NotificationsController.prototype, "createNotification", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], NotificationsController.prototype, "updateNotification", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotificationsController.prototype, "deleteNotification", null);
__decorate([
    (0, common_1.Put)(':id/read'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotificationsController.prototype, "markAsRead", null);
__decorate([
    (0, common_1.Put)('mark-all-read/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotificationsController.prototype, "markAllAsRead", null);
__decorate([
    (0, common_1.Get)('/channels/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotificationsController.prototype, "getChannels", null);
__decorate([
    (0, common_1.Post)('/channels'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NotificationsController.prototype, "createChannel", null);
__decorate([
    (0, common_1.Put)('/channels/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], NotificationsController.prototype, "updateChannel", null);
__decorate([
    (0, common_1.Delete)('/channels/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotificationsController.prototype, "deleteChannel", null);
__decorate([
    (0, common_1.Get)('/settings/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotificationsController.prototype, "getSettings", null);
__decorate([
    (0, common_1.Post)('/settings'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NotificationsController.prototype, "createSetting", null);
__decorate([
    (0, common_1.Put)('/settings/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], NotificationsController.prototype, "updateSetting", null);
__decorate([
    (0, common_1.Delete)('/settings/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotificationsController.prototype, "deleteSetting", null);
__decorate([
    (0, common_1.Get)('/stats/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotificationsController.prototype, "getStats", null);
__decorate([
    (0, common_1.Post)('/send-test'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NotificationsController.prototype, "sendTestNotification", null);
exports.NotificationsController = NotificationsController = __decorate([
    (0, common_1.Controller)('notifications'),
    __metadata("design:paramtypes", [notifications_service_1.NotificationsService])
], NotificationsController);
//# sourceMappingURL=notifications.controller.js.map