import { Injectable } from '@nestjs/common';

// Mock temporal para pruebas
const mockPerfiles = [
  { id: 1, nombre: 'Jovani Ortiz', email: 'jovani@email.com', telefono: '555-1234', puesto: 'Administrador', avatar: '', preferencias: { idioma: 'es', tema: 'oscuro' } },
  { id: 2, nombre: 'Ana Torres', email: 'ana@email.com', telefono: '555-5678', puesto: 'Usuario', avatar: '', preferencias: { idioma: 'es', tema: 'claro' } },
];

@Injectable()
export class PerfilService {
  getPerfil(id: string) {
    return mockPerfiles.find(p => p.id === Number(id));
  }

  updatePerfil(id: string, data: any) {
    const idx = mockPerfiles.findIndex(p => p.id === Number(id));
    if (idx === -1) return null;
    mockPerfiles[idx] = { ...mockPerfiles[idx], ...data };
    return mockPerfiles[idx];
  }
}
