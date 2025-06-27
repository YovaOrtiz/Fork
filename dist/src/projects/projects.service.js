"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsService = void 0;
const common_1 = require("@nestjs/common");
const mockProjects = [
    {
        id: 1,
        name: 'Proyecto de ejemplo',
        client: 'Cliente S.A.',
        description: 'Descripción de prueba',
        startDate: new Date().toISOString(),
        expectedEndDate: new Date().toISOString(),
        overallProgress: 0,
        priority: 'medium',
        status: 'planning',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        createdBy: 'admin',
        lastUpdatedBy: 'admin',
        currentStage: 'Cotización',
        areas: [],
        budget: 0,
        hoursWorked: 0,
        internalCost: 0,
        profitability: 0,
    },
];
let ProjectsService = class ProjectsService {
    getProjects(filters) {
        return mockProjects;
    }
    getProjectById(id) {
        return mockProjects.find(p => p.id === Number(id));
    }
    createProject(data) {
        const newProject = {
            ...data,
            id: mockProjects.length + 1,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };
        mockProjects.push(newProject);
        return newProject;
    }
    updateProject(id, data) {
        const idx = mockProjects.findIndex(p => p.id === Number(id));
        if (idx === -1)
            return null;
        mockProjects[idx] = { ...mockProjects[idx], ...data, updatedAt: new Date().toISOString() };
        return mockProjects[idx];
    }
    deleteProject(id) {
        const idx = mockProjects.findIndex(p => p.id === Number(id));
        if (idx === -1)
            return null;
        mockProjects.splice(idx, 1);
        return { deleted: true };
    }
};
exports.ProjectsService = ProjectsService;
exports.ProjectsService = ProjectsService = __decorate([
    (0, common_1.Injectable)()
], ProjectsService);
//# sourceMappingURL=projects.service.js.map