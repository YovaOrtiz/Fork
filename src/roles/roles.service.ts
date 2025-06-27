import { Injectable } from '@nestjs/common';

// Mock temporal para pruebas
const mockRoles = [
  { id: 1, name: 'admin', description: 'Administrador del sistema' },
  { id: 2, name: 'user', description: 'Usuario estándar' },
  { id: 3, name: 'editor', description: 'Puede editar proyectos y tareas' },
];

@Injectable()
export class RolesService {
  getRoles() {
    return mockRoles;
  }

  getRoleById(id: string) {
    return mockRoles.find(r => r.id === Number(id));
  }

  createRole(data: any) {
    const newRole = {
      ...data,
      id: mockRoles.length + 1,
    };
    mockRoles.push(newRole);
    return newRole;
  }

  updateRole(id: string, data: any) {
    const idx = mockRoles.findIndex(r => r.id === Number(id));
    if (idx === -1) return null;
    mockRoles[idx] = { ...mockRoles[idx], ...data };
    return mockRoles[idx];
  }

  deleteRole(id: string) {
    const idx = mockRoles.findIndex(r => r.id === Number(id));
    if (idx === -1) return null;
    mockRoles.splice(idx, 1);
    return { deleted: true };
  }
}
