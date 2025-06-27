import { Injectable } from '@nestjs/common';

// Mock temporal para pruebas
const mockNotifications = [
  { id: 1, message: 'Tarea asignada: Diseñar interfaz', userId: 2, read: false, createdAt: new Date().toISOString() },
  { id: 2, message: 'Nuevo comentario en proyecto', userId: 1, read: false, createdAt: new Date().toISOString() },
];

@Injectable()
export class NotificationsService {
  getNotifications() {
    return mockNotifications;
  }

  getNotificationById(id: string) {
    return mockNotifications.find(n => n.id === Number(id));
  }

  createNotification(data: any) {
    const newNotification = {
      ...data,
      id: mockNotifications.length + 1,
      read: false,
      createdAt: new Date().toISOString(),
    };
    mockNotifications.push(newNotification);
    return newNotification;
  }

  updateNotification(id: string, data: any) {
    const idx = mockNotifications.findIndex(n => n.id === Number(id));
    if (idx === -1) return null;
    mockNotifications[idx] = { ...mockNotifications[idx], ...data };
    return mockNotifications[idx];
  }

  deleteNotification(id: string) {
    const idx = mockNotifications.findIndex(n => n.id === Number(id));
    if (idx === -1) return null;
    mockNotifications.splice(idx, 1);
    return { deleted: true };
  }

  markAsRead(id: string) {
    const idx = mockNotifications.findIndex(n => n.id === Number(id));
    if (idx === -1) return null;
    mockNotifications[idx].read = true;
    return mockNotifications[idx];
  }
}
