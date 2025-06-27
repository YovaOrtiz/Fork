import { Injectable } from '@nestjs/common';

// Mock temporal para pruebas
const mockBitacora = [
  { id: 1, entidad: 'Proyecto', cambio: 'Actualización de fechas', usuario: 'María García', fecha: '2025-06-10', detalle: 'Se cambió la fecha de entrega.' },
  { id: 2, entidad: 'Tarea', cambio: 'Cambio de responsable', usuario: 'Juan Pérez', fecha: '2025-06-12', detalle: 'Responsable cambiado a Ana Torres.' },
];

@Injectable()
export class BitacoraCambiosService {
  getBitacora() {
    return mockBitacora;
  }

  getCambioById(id: string) {
    return mockBitacora.find(b => b.id === Number(id));
  }

  createCambio(data: any) {
    const newCambio = {
      ...data,
      id: mockBitacora.length + 1,
    };
    mockBitacora.push(newCambio);
    return newCambio;
  }

  updateCambio(id: string, data: any) {
    const idx = mockBitacora.findIndex(b => b.id === Number(id));
    if (idx === -1) return null;
    mockBitacora[idx] = { ...mockBitacora[idx], ...data };
    return mockBitacora[idx];
  }

  deleteCambio(id: string) {
    const idx = mockBitacora.findIndex(b => b.id === Number(id));
    if (idx === -1) return null;
    mockBitacora.splice(idx, 1);
    return { deleted: true };
  }
}
