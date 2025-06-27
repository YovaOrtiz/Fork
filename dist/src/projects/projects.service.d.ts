export declare class ProjectsService {
    getProjects(filters: any): {
        id: number;
        name: string;
        client: string;
        description: string;
        startDate: string;
        expectedEndDate: string;
        overallProgress: number;
        priority: string;
        status: string;
        createdAt: string;
        updatedAt: string;
        createdBy: string;
        lastUpdatedBy: string;
        currentStage: string;
        areas: any[];
        budget: number;
        hoursWorked: number;
        internalCost: number;
        profitability: number;
    }[];
    getProjectById(id: string): {
        id: number;
        name: string;
        client: string;
        description: string;
        startDate: string;
        expectedEndDate: string;
        overallProgress: number;
        priority: string;
        status: string;
        createdAt: string;
        updatedAt: string;
        createdBy: string;
        lastUpdatedBy: string;
        currentStage: string;
        areas: any[];
        budget: number;
        hoursWorked: number;
        internalCost: number;
        profitability: number;
    };
    createProject(data: any): any;
    updateProject(id: string, data: any): {
        id: number;
        name: string;
        client: string;
        description: string;
        startDate: string;
        expectedEndDate: string;
        overallProgress: number;
        priority: string;
        status: string;
        createdAt: string;
        updatedAt: string;
        createdBy: string;
        lastUpdatedBy: string;
        currentStage: string;
        areas: any[];
        budget: number;
        hoursWorked: number;
        internalCost: number;
        profitability: number;
    };
    deleteProject(id: string): {
        deleted: boolean;
    };
}
