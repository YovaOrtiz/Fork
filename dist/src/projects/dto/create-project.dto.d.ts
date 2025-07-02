import { CreateAreaDto } from './create-area.dto';
export declare enum ProjectPriority {
    low = "low",
    medium = "medium",
    high = "high",
    critical = "critical"
}
export declare enum ProjectStatus {
    planning = "planning",
    active = "active",
    on_hold = "on_hold",
    completed = "completed",
    cancelled = "cancelled"
}
export declare class CreateProjectDto {
    name: string;
    client: string;
    description: string;
    startDate: string;
    expectedEndDate: string;
    priority: ProjectPriority;
    status: ProjectStatus;
    budget: number;
    profitability: number;
    internalCost: number;
    overallProgress: number;
    currentStage: string;
    areas?: CreateAreaDto[];
    createdBy: string;
    createdAt?: string;
    updatedAt?: string;
}
