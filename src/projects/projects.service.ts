import { Injectable } from '@nestjs/common';

// Mock temporal para pruebas
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

@Injectable()
export class ProjectsService {
  getProjects(filters: any) {
    // Aquí puedes aplicar filtros en el futuro
    return mockProjects;
  }

  getProjectById(id: string) {
    return mockProjects.find(p => p.id === Number(id));
  }

  createProject(data: any) {
    const newProject = {
      ...data,
      id: mockProjects.length + 1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    mockProjects.push(newProject);
    return newProject;
  }

  updateProject(id: string, data: any) {
    const idx = mockProjects.findIndex(p => p.id === Number(id));
    if (idx === -1) return null;
    mockProjects[idx] = { ...mockProjects[idx], ...data, updatedAt: new Date().toISOString() };
    return mockProjects[idx];
  }

  deleteProject(id: string) {
    const idx = mockProjects.findIndex(p => p.id === Number(id));
    if (idx === -1) return null;
    mockProjects.splice(idx, 1);
    return { deleted: true };
  }
}
