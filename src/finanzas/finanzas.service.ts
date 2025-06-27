import { Injectable } from '@nestjs/common';

// Mock temporal para pruebas
const mockFinanzas = [
  { id: 1, concepto: 'Pago proveedor', monto: 1500, fecha: '2025-06-01', categoria: 'Egreso', estado: 'Pagado' },
  { id: 2, concepto: 'Factura cliente', monto: 2500, fecha: '2025-06-10', categoria: 'Ingreso', estado: 'Pendiente' },
];

@Injectable()
export class FinanzasService {
  getFinanzas() {
    return mockFinanzas;
  }

  getFinanzaById(id: string) {
    return mockFinanzas.find(f => f.id === Number(id));
  }

  createFinanza(data: any) {
    const newFinanza = {
      ...data,
      id: mockFinanzas.length + 1,
    };
    mockFinanzas.push(newFinanza);
    return newFinanza;
  }

  updateFinanza(id: string, data: any) {
    const idx = mockFinanzas.findIndex(f => f.id === Number(id));
    if (idx === -1) return null;
    mockFinanzas[idx] = { ...mockFinanzas[idx], ...data };
    return mockFinanzas[idx];
  }

  deleteFinanza(id: string) {
    const idx = mockFinanzas.findIndex(f => f.id === Number(id));
    if (idx === -1) return null;
    mockFinanzas.splice(idx, 1);
    return { deleted: true };
  }
}
