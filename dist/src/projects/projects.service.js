"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let ProjectsService = class ProjectsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getProjects(filters) {
        return this.prisma.project.findMany({
            where: filters,
            include: { areas: true },
        });
    }
    async getProjectById(id) {
        return this.prisma.project.findUnique({
            where: { id },
            include: { areas: true },
        });
    }
    async createProject(data) {
        const { areas, ...projectData } = data;
        return this.prisma.project.create({
            data: {
                ...projectData,
                areas: areas && Array.isArray(areas) && areas.length > 0 ? { create: areas } : undefined,
            },
            include: { areas: true },
        });
    }
    async updateProject(id, data) {
        return this.prisma.project.update({
            where: { id },
            data: {
                ...data,
                areas: undefined,
            },
            include: { areas: true },
        });
    }
    async deleteProject(id) {
        await this.prisma.project.delete({ where: { id } });
        return { deleted: true };
    }
    async addAreaToProject(projectId, areaData) {
        return this.prisma.area.create({
            data: { ...areaData, project: { connect: { id: projectId } } },
        });
    }
    async updateArea(areaId, data) {
        return this.prisma.area.update({ where: { id: areaId }, data });
    }
    async deleteArea(areaId) {
        await this.prisma.area.delete({ where: { id: areaId } });
        return { deleted: true };
    }
};
exports.ProjectsService = ProjectsService;
exports.ProjectsService = ProjectsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProjectsService);
//# sourceMappingURL=projects.service.js.map