"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationsService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
let NotificationsService = class NotificationsService {
    async getNotifications(filter) {
        const { userId, type, priority, channel, read, search, from, to, orderBy, order, skip, take } = filter;
        return prisma.notification.findMany({
            where: {
                userId,
                type,
                priority,
                channel,
                read,
                createdAt: from || to ? {
                    ...(from ? { gte: new Date(from) } : {}),
                    ...(to ? { lte: new Date(to) } : {}),
                } : undefined,
                ...(search ? {
                    OR: [
                        { title: { contains: search, mode: 'insensitive' } },
                        { message: { contains: search, mode: 'insensitive' } },
                    ]
                } : {})
            },
            orderBy: orderBy ? { [orderBy]: order || 'desc' } : { createdAt: 'desc' },
            skip,
            take,
        });
    }
    async getNotificationById(id) {
        return prisma.notification.findUnique({ where: { id } });
    }
    async createNotification(data) {
        if (!data.userId)
            throw new Error('userId is required');
        return prisma.notification.create({ data: data });
    }
    async updateNotification(id, data) {
        return prisma.notification.update({ where: { id }, data });
    }
    async deleteNotification(id) {
        return prisma.notification.delete({ where: { id } });
    }
    async markAsRead(id) {
        return prisma.notification.update({ where: { id }, data: { read: true, readAt: new Date() } });
    }
    async markAllAsRead(userId) {
        return prisma.notification.updateMany({ where: { userId, read: false }, data: { read: true, readAt: new Date() } });
    }
    async getChannels(userId) {
        return prisma.notificationChannel.findMany({ where: { userId } });
    }
    async createChannel(data) {
        if (!data.userId)
            throw new Error('userId is required');
        return prisma.notificationChannel.create({ data: data });
    }
    async updateChannel(id, data) {
        return prisma.notificationChannel.update({ where: { id }, data });
    }
    async deleteChannel(id) {
        return prisma.notificationChannel.delete({ where: { id } });
    }
    async getSettings(userId) {
        return prisma.notificationSetting.findMany({ where: { userId } });
    }
    async createSetting(data) {
        if (!data.userId)
            throw new Error('userId is required');
        return prisma.notificationSetting.create({ data: data });
    }
    async updateSetting(id, data) {
        return prisma.notificationSetting.update({ where: { id }, data });
    }
    async deleteSetting(id) {
        return prisma.notificationSetting.delete({ where: { id } });
    }
    async getStats(userId) {
        const [total, unread, urgent, today] = await Promise.all([
            prisma.notification.count({ where: { userId } }),
            prisma.notification.count({ where: { userId, read: false } }),
            prisma.notification.count({ where: { userId, priority: 'urgent' } }),
            prisma.notification.count({ where: { userId, createdAt: { gte: new Date(new Date().setHours(0, 0, 0, 0)) } } })
        ]);
        return { total, unread, urgent, today };
    }
};
exports.NotificationsService = NotificationsService;
exports.NotificationsService = NotificationsService = __decorate([
    (0, common_1.Injectable)()
], NotificationsService);
//# sourceMappingURL=notifications.service.js.map