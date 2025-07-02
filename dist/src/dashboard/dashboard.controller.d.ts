import { DashboardService } from './dashboard.service';
export declare class DashboardController {
    private readonly dashboardService;
    constructor(dashboardService: DashboardService);
    getKpis(): Promise<{
        active: number;
        atRisk: number;
        overdue: number;
        completed: number;
    }>;
    getStats(): Promise<{
        totalBudget: number;
        totalSales: number;
        totalProfit: number;
        margin: number;
        goals: {
            annualSales: number;
            annualMargin: number;
            annualProfit: number;
        };
    }>;
    getTopProjects(): Promise<{
        name: string;
        client: string;
        description: string;
        progress: number;
        status: import(".prisma/client").$Enums.ProjectStatus;
        priority: import(".prisma/client").$Enums.ProjectPriority;
        isOverdue: boolean;
        isAtRisk: boolean;
    }[]>;
    getRecentActivity(): Promise<{
        user: string;
        projectName: string;
        activityType: string;
        description: string;
        date: Date;
        areas: string[];
    }[]>;
    getAreaWorkload(): Promise<{
        area: string;
        projectCount: number;
        workload: number;
    }[]>;
    getSalesMetrics(): Promise<{
        byExecutive: {
            name: string;
            sales: number;
        }[];
        byNiche: {
            niche: string;
            sales: number;
        }[];
        byQuarter: {
            quarter: string;
            sales: number;
        }[];
        byMonth: {
            month: string;
            sales: number;
        }[];
        byBusinessUnit: {
            unit: string;
            sales: number;
        }[];
        goalCompletion: number;
    }>;
}
