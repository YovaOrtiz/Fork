import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
export declare class ProjectsController {
    private readonly projectsService;
    constructor(projectsService: ProjectsService);
    getProjects(filters: any): Promise<({
        id: string;
        name: string;
        client: string;
        description: string;
        startDate: Date;
        expectedEndDate: Date;
        priority: import(".prisma/client").$Enums.ProjectPriority;
        status: import(".prisma/client").$Enums.ProjectStatus;
        budget: number;
        salesPrice: number;
        profitability: number;
        internalCost: number;
        overallProgress: number;
        currentStage: string;
        createdBy: string;
        updatedBy: string;
        createdAt: Date;
        updatedAt: Date;
    } & {
        areas: import(".prisma/client").Area[];
    })[]>;
    getProjectById(id: string): Promise<{
        id: string;
        name: string;
        client: string;
        description: string;
        startDate: Date;
        expectedEndDate: Date;
        priority: import(".prisma/client").$Enums.ProjectPriority;
        status: import(".prisma/client").$Enums.ProjectStatus;
        budget: number;
        salesPrice: number;
        profitability: number;
        internalCost: number;
        overallProgress: number;
        currentStage: string;
        createdBy: string;
        updatedBy: string;
        createdAt: Date;
        updatedAt: Date;
    } & {
        areas: import(".prisma/client").Area[];
    }>;
    create(data: CreateProjectDto): Promise<{
        id: string;
        name: string;
        client: string;
        description: string;
        startDate: Date;
        expectedEndDate: Date;
        priority: import(".prisma/client").$Enums.ProjectPriority;
        status: import(".prisma/client").$Enums.ProjectStatus;
        budget: number;
        salesPrice: number;
        profitability: number;
        internalCost: number;
        overallProgress: number;
        currentStage: string;
        createdBy: string;
        updatedBy: string;
        createdAt: Date;
        updatedAt: Date;
    } & {
        areas: import(".prisma/client").Area[];
    }>;
    updateProject(id: string, data: any): Promise<{
        id: string;
        name: string;
        client: string;
        description: string;
        startDate: Date;
        expectedEndDate: Date;
        priority: import(".prisma/client").$Enums.ProjectPriority;
        status: import(".prisma/client").$Enums.ProjectStatus;
        budget: number;
        salesPrice: number;
        profitability: number;
        internalCost: number;
        overallProgress: number;
        currentStage: string;
        createdBy: string;
        updatedBy: string;
        createdAt: Date;
        updatedAt: Date;
    } & {
        areas: import(".prisma/client").Area[];
    }>;
    deleteProject(id: string): Promise<{
        deleted: boolean;
    }>;
}
