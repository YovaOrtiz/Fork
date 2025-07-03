import { Injectable } from '@nestjs/common';
import { PrismaClient, Notification, NotificationChannel, NotificationSetting } from '@prisma/client';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { FilterNotificationDto } from './dto/filter-notification.dto';
import { CreateChannelDto } from './dto/create-channel.dto';
import { UpdateChannelDto } from './dto/update-channel.dto';
import { CreateSettingDto } from './dto/create-setting.dto';
import { UpdateSettingDto } from './dto/update-setting.dto';

const prisma = new PrismaClient();

@Injectable()
export class NotificationsService {
  // NOTIFICATIONS CRUD
  async getNotifications(filter: FilterNotificationDto) {
    const {
      userId, type, priority, channel, read, search, from, to, orderBy, order, skip, take
    } = filter;
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

  async getNotificationById(id: string) {
    return prisma.notification.findUnique({ where: { id } });
  }

  async createNotification(data: CreateNotificationDto) {
    if (!data.userId) throw new Error('userId is required');
    return prisma.notification.create({ data: data as any });
  }

  async updateNotification(id: string, data: UpdateNotificationDto) {
    return prisma.notification.update({ where: { id }, data });
  }

  async deleteNotification(id: string) {
    return prisma.notification.delete({ where: { id } });
  }

  async markAsRead(id: string) {
    return prisma.notification.update({ where: { id }, data: { read: true, readAt: new Date() } });
  }

  async markAllAsRead(userId: number) {
    return prisma.notification.updateMany({ where: { userId, read: false }, data: { read: true, readAt: new Date() } });
  }

  // CHANNELS CRUD
  async getChannels(userId: number) {
    return prisma.notificationChannel.findMany({ where: { userId } });
  }

  async createChannel(data: CreateChannelDto) {
    if (!data.userId) throw new Error('userId is required');
    return prisma.notificationChannel.create({ data: data as any });
  }

  async updateChannel(id: string, data: UpdateChannelDto) {
    return prisma.notificationChannel.update({ where: { id }, data });
  }

  async deleteChannel(id: string) {
    return prisma.notificationChannel.delete({ where: { id } });
  }

  // SETTINGS CRUD
  async getSettings(userId: number) {
    return prisma.notificationSetting.findMany({ where: { userId } });
  }

  async createSetting(data: CreateSettingDto) {
    if (!data.userId) throw new Error('userId is required');
    return prisma.notificationSetting.create({ data: data as any });
  }

  async updateSetting(id: string, data: UpdateSettingDto) {
    return prisma.notificationSetting.update({ where: { id }, data });
  }

  async deleteSetting(id: string) {
    return prisma.notificationSetting.delete({ where: { id } });
  }

  // STATISTICS
  async getStats(userId: number) {
    const [total, unread, urgent, today] = await Promise.all([
      prisma.notification.count({ where: { userId } }),
      prisma.notification.count({ where: { userId, read: false } }),
      prisma.notification.count({ where: { userId, priority: 'urgent' } }),
      prisma.notification.count({ where: { userId, createdAt: { gte: new Date(new Date().setHours(0,0,0,0)) } } })
    ]);
    return { total, unread, urgent, today };
  }
}
