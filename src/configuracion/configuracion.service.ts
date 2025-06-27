import { Injectable } from '@nestjs/common';

// Mock temporal para pruebas
const mockConfiguraciones = [
  { id: 1, usuarioId: 1, notificaciones: true, idioma: 'es', tema: 'oscuro', timezone: 'America/Mexico_City' },
  { id: 2, usuarioId: 2, notificaciones: false, idioma: 'es', tema: 'claro', timezone: 'America/Mexico_City' },
];

@Injectable()
export class ConfiguracionService {
  getConfiguracion(id: string) {
    return mockConfiguraciones.find(c => c.id === Number(id));
  }

  updateConfiguracion(id: string, data: any) {
    const idx = mockConfiguraciones.findIndex(c => c.id === Number(id));
    if (idx === -1) return null;
    mockConfiguraciones[idx] = { ...mockConfiguraciones[idx], ...data };
    return mockConfiguraciones[idx];
  }
}
