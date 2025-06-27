import { Injectable } from '@nestjs/common';

// Mock temporal para pruebas
const mockComercial = [
  { id: 1, cliente: 'Empresa X', contacto: 'Juan Pérez', oportunidad: 'Venta software', estado: 'En negociación', monto: 5000 },
  { id: 2, cliente: 'Empresa Y', contacto: 'Ana López', oportunidad: 'Capacitación', estado: 'Cerrada', monto: 1200 },
];

@Injectable()
export class ComercialService {
  getComercial() {
    return mockComercial;
  }

  getComercialById(id: string) {
    return mockComercial.find(c => c.id === Number(id));
  }

  createComercial(data: any) {
    const newComercial = {
      ...data,
      id: mockComercial.length + 1,
    };
    mockComercial.push(newComercial);
    return newComercial;
  }

  updateComercial(id: string, data: any) {
    const idx = mockComercial.findIndex(c => c.id === Number(id));
    if (idx === -1) return null;
    mockComercial[idx] = { ...mockComercial[idx], ...data };
    return mockComercial[idx];
  }

  deleteComercial(id: string) {
    const idx = mockComercial.findIndex(c => c.id === Number(id));
    if (idx === -1) return null;
    mockComercial.splice(idx, 1);
    return { deleted: true };
  }
}
