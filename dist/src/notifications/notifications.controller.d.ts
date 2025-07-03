import { NotificationsService } from './notifications.service';
export declare class NotificationsController {
    private readonly notificationsService;
    constructor(notificationsService: NotificationsService);
    getNotifications(query: any): Promise<{
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
    createNotification(body: any): Promise<{
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
    updateNotification(id: string, body: any): Promise<{
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
    markAllAsRead(userId: string): Promise<import(".prisma/client").Prisma.BatchPayload>;
    getChannels(userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        type: import(".prisma/client").$Enums.NotificationChannelType;
        userId: number;
        config: import("@prisma/client/runtime/library").JsonValue;
        enabled: boolean;
    }[]>;
    createChannel(body: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        type: import(".prisma/client").$Enums.NotificationChannelType;
        userId: number;
        config: import("@prisma/client/runtime/library").JsonValue;
        enabled: boolean;
    }>;
    updateChannel(id: string, body: any): Promise<{
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
    getSettings(userId: string): Promise<{
        id: string;
        priority: import(".prisma/client").$Enums.NotificationPriority;
        createdAt: Date;
        updatedAt: Date;
        type: import(".prisma/client").$Enums.NotificationType;
        userId: number;
        enabled: boolean;
        channels: import(".prisma/client").$Enums.NotificationChannelType[];
    }[]>;
    createSetting(body: any): Promise<{
        id: string;
        priority: import(".prisma/client").$Enums.NotificationPriority;
        createdAt: Date;
        updatedAt: Date;
        type: import(".prisma/client").$Enums.NotificationType;
        userId: number;
        enabled: boolean;
        channels: import(".prisma/client").$Enums.NotificationChannelType[];
    }>;
    updateSetting(id: string, body: any): Promise<{
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
    getStats(userId: string): Promise<{
        total: number;
        unread: number;
        urgent: number;
        today: number;
    }>;
    sendTestNotification(body: any): Promise<{
        success: boolean;
        message: string;
        data: any;
    }>;
}
