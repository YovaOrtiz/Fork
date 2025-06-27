import { Injectable } from '@nestjs/common';

// Mock temporal para pruebas
const mockAreas = [
  { id: 1, name: 'Diseño', status: 'active', responsible: 'María García', progress: 50 },
  { id: 2, name: 'Producción', status: 'active', responsible: 'Juan Pérez', progress: 30 },
  { id: 3, name: 'Logística', status: 'inactive', responsible: 'Ana Martínez', progress: 0 },
];

@Injectable()
export class AreasService {
  getAreas() {
    return mockAreas;
  }

  getAreaById(id: string) {
    return mockAreas.find(a => a.id === Number(id));
  }

  createArea(data: any) {
    const newArea = {
      ...data,
      id: mockAreas.length + 1,
    };
    mockAreas.push(newArea);
    return newArea;
  }

  updateArea(id: string, data: any) {
    const idx = mockAreas.findIndex(a => a.id === Number(id));
    if (idx === -1) return null;
    mockAreas[idx] = { ...mockAreas[idx], ...data };
    return mockAreas[idx];
  }

  deleteArea(id: string) {
    const idx = mockAreas.findIndex(a => a.id === Number(id));
    if (idx === -1) return null;
    mockAreas.splice(idx, 1);
    return { deleted: true };
  }
}
