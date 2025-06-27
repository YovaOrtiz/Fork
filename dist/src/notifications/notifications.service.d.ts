export declare class NotificationsService {
    getNotifications(): {
        id: number;
        message: string;
        userId: number;
        read: boolean;
        createdAt: string;
    }[];
    getNotificationById(id: string): {
        id: number;
        message: string;
        userId: number;
        read: boolean;
        createdAt: string;
    };
    createNotification(data: any): any;
    updateNotification(id: string, data: any): {
        id: number;
        message: string;
        userId: number;
        read: boolean;
        createdAt: string;
    };
    deleteNotification(id: string): {
        deleted: boolean;
    };
    markAsRead(id: string): {
        id: number;
        message: string;
        userId: number;
        read: boolean;
        createdAt: string;
    };
}
