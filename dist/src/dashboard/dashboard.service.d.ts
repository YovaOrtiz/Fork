export declare class DashboardService {
    getDashboard(): {
        totalUsers: number;
        totalProjects: number;
        totalTasks: number;
        completedTasks: number;
        pendingTasks: number;
        inProgressTasks: number;
        notifications: number;
        lastLogin: string;
        systemStatus: string;
    };
}
