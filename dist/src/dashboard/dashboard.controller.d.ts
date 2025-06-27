import { DashboardService } from './dashboard.service';
export declare class DashboardController {
    private readonly dashboardService;
    constructor(dashboardService: DashboardService);
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
