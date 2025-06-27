import { Injectable } from '@nestjs/common';

// Mock temporal para pruebas
const mockPrecios = [
  { id: 1, producto: 'Software A', precio: 1200, moneda: 'USD', fecha: '2025-06-01', estado: 'Vigente' },
  { id: 2, producto: 'Servicio B', precio: 850, moneda: 'USD', fecha: '2025-06-10', estado: 'Vigente' },
];

@Injectable()
export class PreciosService {
  getPrecios() {
    return mockPrecios;
  }

  getPrecioById(id: string) {
    return mockPrecios.find(p => p.id === Number(id));
  }

  createPrecio(data: any) {
    const newPrecio = {
      ...data,
      id: mockPrecios.length + 1,
    };
    mockPrecios.push(newPrecio);
    return newPrecio;
  }

  updatePrecio(id: string, data: any) {
    const idx = mockPrecios.findIndex(p => p.id === Number(id));
    if (idx === -1) return null;
    mockPrecios[idx] = { ...mockPrecios[idx], ...data };
    return mockPrecios[idx];
  }

  deletePrecio(id: string) {
    const idx = mockPrecios.findIndex(p => p.id === Number(id));
    if (idx === -1) return null;
    mockPrecios.splice(idx, 1);
    return { deleted: true };
  }
}
