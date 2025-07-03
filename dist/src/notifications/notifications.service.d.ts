import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { FilterNotificationDto } from './dto/filter-notification.dto';
import { CreateChannelDto } from './dto/create-channel.dto';
import { UpdateChannelDto } from './dto/update-channel.dto';
import { CreateSettingDto } from './dto/create-setting.dto';
import { UpdateSettingDto } from './dto/update-setting.dto';
export declare class NotificationsService {
    getNotifications(filter: FilterNotificationDto): Promise<{
        id: string;
        priority: import(".prisma/client").$Enums.NotificationPriority;
        createdAt: Date;
        type: import(".prisma/client").$Enums.NotificationType;
        title: string;
        userId: number;
        message: string;
        channel: import(".prisma/client").$Enums.NotificationChannelType;
        meta: import("@prisma/client/runtime/library").JsonValue | null;
        read: boolean;
        readAt: Date | null;
    }[]>;
    getNotificationById(id: string): Promise<{
        id: string;
        priority: import(".prisma/client").$Enums.NotificationPriority;
        createdAt: Date;
        type: import(".prisma/client").$Enums.NotificationType;
        title: string;
        userId: number;
        message: string;
        channel: import(".prisma/client").$Enums.NotificationChannelType;
        meta: import("@prisma/client/runtime/library").JsonValue | null;
        read: boolean;
        readAt: Date | null;
    }>;
    createNotification(data: CreateNotificationDto): Promise<{
        id: string;
        priority: import(".prisma/client").$Enums.NotificationPriority;
        createdAt: Date;
        type: import(".prisma/client").$Enums.NotificationType;
        title: string;
        userId: number;
        message: string;
        channel: import(".prisma/client").$Enums.NotificationChannelType;
        meta: import("@prisma/client/runtime/library").JsonValue | null;
        read: boolean;
        readAt: Date | null;
    }>;
    updateNotification(id: string, data: UpdateNotificationDto): Promise<{
        id: string;
        priority: import(".prisma/client").$Enums.NotificationPriority;
        createdAt: Date;
        type: import(".prisma/client").$Enums.NotificationType;
        title: string;
        userId: number;
        message: string;
        channel: import(".prisma/client").$Enums.NotificationChannelType;
        meta: import("@prisma/client/runtime/library").JsonValue | null;
        read: boolean;
        readAt: Date | null;
    }>;
    deleteNotification(id: string): Promise<{
        id: string;
        priority: import(".prisma/client").$Enums.NotificationPriority;
        createdAt: Date;
        type: import(".prisma/client").$Enums.NotificationType;
        title: string;
        userId: number;
        message: string;
        channel: import(".prisma/client").$Enums.NotificationChannelType;
        meta: import("@prisma/client/runtime/library").JsonValue | null;
        read: boolean;
        readAt: Date | null;
    }>;
    markAsRead(id: string): Promise<{
        id: string;
        priority: import(".prisma/client").$Enums.NotificationPriority;
        createdAt: Date;
        type: import(".prisma/client").$Enums.NotificationType;
        title: string;
        userId: number;
        message: string;
        channel: import(".prisma/client").$Enums.NotificationChannelType;
        meta: import("@prisma/client/runtime/library").JsonValue | null;
        read: boolean;
        readAt: Date | null;
    }>;
    markAllAsRead(userId: number): Promise<import(".prisma/client").Prisma.BatchPayload>;
    getChannels(userId: number): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        type: import(".prisma/client").$Enums.NotificationChannelType;
        userId: number;
        config: import("@prisma/client/runtime/library").JsonValue;
        enabled: boolean;
    }[]>;
    createChannel(data: CreateChannelDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        type: import(".prisma/client").$Enums.NotificationChannelType;
        userId: number;
        config: import("@prisma/client/runtime/library").JsonValue;
        enabled: boolean;
    }>;
    updateChannel(id: string, data: UpdateChannelDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        type: import(".prisma/client").$Enums.NotificationChannelType;
        userId: number;
        config: import("@prisma/client/runtime/library").JsonValue;
        enabled: boolean;
    }>;
    deleteChannel(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        type: import(".prisma/client").$Enums.NotificationChannelType;
        userId: number;
        config: import("@prisma/client/runtime/library").JsonValue;
        enabled: boolean;
    }>;
    getSettings(userId: number): Promise<{
        id: string;
        priority: import(".prisma/client").$Enums.NotificationPriority;
        createdAt: Date;
        updatedAt: Date;
        type: import(".prisma/client").$Enums.NotificationType;
        userId: number;
        enabled: boolean;
        channels: import(".prisma/client").$Enums.NotificationChannelType[];
    }[]>;
    createSetting(data: CreateSettingDto): Promise<{
        id: string;
        priority: import(".prisma/client").$Enums.NotificationPriority;
        createdAt: Date;
        updatedAt: Date;
        type: import(".prisma/client").$Enums.NotificationType;
        userId: number;
        enabled: boolean;
        channels: import(".prisma/client").$Enums.NotificationChannelType[];
    }>;
    updateSetting(id: string, data: UpdateSettingDto): Promise<{
        id: string;
        priority: import(".prisma/client").$Enums.NotificationPriority;
        createdAt: Date;
        updatedAt: Date;
        type: import(".prisma/client").$Enums.NotificationType;
        userId: number;
        enabled: boolean;
        channels: import(".prisma/client").$Enums.NotificationChannelType[];
    }>;
    deleteSetting(id: string): Promise<{
        id: string;
        priority: import(".prisma/client").$Enums.NotificationPriority;
        createdAt: Date;
        updatedAt: Date;
        type: import(".prisma/client").$Enums.NotificationType;
        userId: number;
        enabled: boolean;
        channels: import(".prisma/client").$Enums.NotificationChannelType[];
    }>;
    getStats(userId: number): Promise<{
        total: number;
        unread: number;
        urgent: number;
        today: number;
    }>;
}
