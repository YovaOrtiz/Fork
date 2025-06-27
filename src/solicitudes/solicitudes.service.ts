import { Injectable } from '@nestjs/common';

// Mock temporal para pruebas
const mockSolicitudes = [
  { id: 1, tipo: 'Permiso', solicitante: 'Carlos Ruiz', fecha: '2025-06-15', estado: 'Aprobada', motivo: 'Vacaciones' },
  { id: 2, tipo: 'Compra', solicitante: 'Ana Torres', fecha: '2025-06-16', estado: 'Pendiente', motivo: 'Equipo nuevo' },
];

@Injectable()
export class SolicitudesService {
  getSolicitudes() {
    return mockSolicitudes;
  }

  getSolicitudById(id: string) {
    return mockSolicitudes.find(s => s.id === Number(id));
  }

  createSolicitud(data: any) {
    const newSolicitud = {
      ...data,
      id: mockSolicitudes.length + 1,
    };
    mockSolicitudes.push(newSolicitud);
    return newSolicitud;
  }

  updateSolicitud(id: string, data: any) {
    const idx = mockSolicitudes.findIndex(s => s.id === Number(id));
    if (idx === -1) return null;
    mockSolicitudes[idx] = { ...mockSolicitudes[idx], ...data };
    return mockSolicitudes[idx];
  }

  deleteSolicitud(id: string) {
    const idx = mockSolicitudes.findIndex(s => s.id === Number(id));
    if (idx === -1) return null;
    mockSolicitudes.splice(idx, 1);
    return { deleted: true };
  }
}
