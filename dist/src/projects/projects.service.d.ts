import { PrismaService } from '../prisma.service';
import { Prisma, Project, Area } from '@prisma/client';
export declare class ProjectsService {
    private prisma;
    constructor(prisma: PrismaService);
    getProjects(filters?: Prisma.ProjectWhereInput): Promise<(Project & {
        areas: Area[];
    })[]>;
    getProjectById(id: string): Promise<Project & {
        areas: Area[];
    } | null>;
    createProject(data: Prisma.ProjectCreateInput): Promise<Project & {
        areas: Area[];
    }>;
    updateProject(id: string, data: Prisma.ProjectUpdateInput): Promise<Project & {
        areas: Area[];
    }>;
    deleteProject(id: string): Promise<{
        deleted: boolean;
    }>;
    addAreaToProject(projectId: string, areaData: Prisma.AreaCreateInput): Promise<Area>;
    updateArea(areaId: string, data: Prisma.AreaUpdateInput): Promise<Area>;
    deleteArea(areaId: string): Promise<{
        deleted: boolean;
    }>;
}
