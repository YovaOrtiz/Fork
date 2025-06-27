import { Injectable } from '@nestjs/common';

// Mock temporal para pruebas
const mockComprasLogistica = [
  { id: 1, tipo: 'Compra', descripcion: 'Compra de insumos', proveedor: 'Proveedor A', monto: 2000, fecha: '2025-06-12', estado: 'Pendiente' },
  { id: 2, tipo: 'Logística', descripcion: 'Envío de productos', proveedor: 'Transportes B', monto: 800, fecha: '2025-06-14', estado: 'Completado' },
];

@Injectable()
export class ComprasLogisticaService {
  getComprasLogistica() {
    return mockComprasLogistica;
  }

  getCompraLogisticaById(id: string) {
    return mockComprasLogistica.find(c => c.id === Number(id));
  }

  createCompraLogistica(data: any) {
    const newItem = {
      ...data,
      id: mockComprasLogistica.length + 1,
    };
    mockComprasLogistica.push(newItem);
    return newItem;
  }

  updateCompraLogistica(id: string, data: any) {
    const idx = mockComprasLogistica.findIndex(c => c.id === Number(id));
    if (idx === -1) return null;
    mockComprasLogistica[idx] = { ...mockComprasLogistica[idx], ...data };
    return mockComprasLogistica[idx];
  }

  deleteCompraLogistica(id: string) {
    const idx = mockComprasLogistica.findIndex(c => c.id === Number(id));
    if (idx === -1) return null;
    mockComprasLogistica.splice(idx, 1);
    return { deleted: true };
  }
}
