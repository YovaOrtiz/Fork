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
const mockNotifications = [
    { id: 1, message: 'Tarea asignada: Diseñar interfaz', userId: 2, read: false, createdAt: new Date().toISOString() },
    { id: 2, message: 'Nuevo comentario en proyecto', userId: 1, read: false, createdAt: new Date().toISOString() },
];
let NotificationsService = class NotificationsService {
    getNotifications() {
        return mockNotifications;
    }
    getNotificationById(id) {
        return mockNotifications.find(n => n.id === Number(id));
    }
    createNotification(data) {
        const newNotification = {
            ...data,
            id: mockNotifications.length + 1,
            read: false,
            createdAt: new Date().toISOString(),
        };
        mockNotifications.push(newNotification);
        return newNotification;
    }
    updateNotification(id, data) {
        const idx = mockNotifications.findIndex(n => n.id === Number(id));
        if (idx === -1)
            return null;
        mockNotifications[idx] = { ...mockNotifications[idx], ...data };
        return mockNotifications[idx];
    }
    deleteNotification(id) {
        const idx = mockNotifications.findIndex(n => n.id === Number(id));
        if (idx === -1)
            return null;
        mockNotifications.splice(idx, 1);
        return { deleted: true };
    }
    markAsRead(id) {
        const idx = mockNotifications.findIndex(n => n.id === Number(id));
        if (idx === -1)
            return null;
        mockNotifications[idx].read = true;
        return mockNotifications[idx];
    }
};
exports.NotificationsService = NotificationsService;
exports.NotificationsService = NotificationsService = __decorate([
    (0, common_1.Injectable)()
], NotificationsService);
//# sourceMappingURL=notifications.service.js.map