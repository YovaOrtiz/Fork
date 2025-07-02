import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma, Project, Area } from '@prisma/client';

@Injectable()
export class ProjectsService {
  constructor(private prisma: PrismaService) {}

  async getProjects(filters?: Prisma.ProjectWhereInput): Promise<(Project & { areas: Area[] })[]> {
    return this.prisma.project.findMany({
      where: filters,
      include: { areas: true },
    });
  }

  async getProjectById(id: string): Promise<Project & { areas: Area[] } | null> {
    return this.prisma.project.findUnique({
      where: { id },
      include: { areas: true },
    });
  }

  async createProject(data: Prisma.ProjectCreateInput): Promise<Project & { areas: Area[] }> {
    // Si el DTO viene desde el frontend, puede que "areas" esté como array simple
    // Prisma espera { create: AreaCreateInput[] } para relaciones uno a muchos
    const { areas, ...projectData } = data as any;
    return this.prisma.project.create({
      data: {
        ...projectData,
        areas: areas && Array.isArray(areas) && areas.length > 0 ? { create: areas } : undefined,
      },
      include: { areas: true },
    });
  }

  async updateProject(id: string, data: Prisma.ProjectUpdateInput): Promise<Project & { areas: Area[] }> {
    // No se actualizan áreas aquí directamente
    return this.prisma.project.update({
      where: { id },
      data: {
        ...data,
        areas: undefined,
      },
      include: { areas: true },
    });
  }

  async deleteProject(id: string): Promise<{ deleted: boolean }> {
    await this.prisma.project.delete({ where: { id } });
    return { deleted: true };
  }

  // Métodos para áreas
  async addAreaToProject(projectId: string, areaData: Prisma.AreaCreateInput): Promise<Area> {
    return this.prisma.area.create({
      data: { ...areaData, project: { connect: { id: projectId } } },
    });
  }

  async updateArea(areaId: string, data: Prisma.AreaUpdateInput): Promise<Area> {
    return this.prisma.area.update({ where: { id: areaId }, data });
  }

  async deleteArea(areaId: string): Promise<{ deleted: boolean }> {
    await this.prisma.area.delete({ where: { id: areaId } });
    return { deleted: true };
  }
}
