"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComprasLogisticaService = void 0;
const common_1 = require("@nestjs/common");
const mockComprasLogistica = [
    { id: 1, tipo: 'Compra', descripcion: 'Compra de insumos', proveedor: 'Proveedor A', monto: 2000, fecha: '2025-06-12', estado: 'Pendiente' },
    { id: 2, tipo: 'Logística', descripcion: 'Envío de productos', proveedor: 'Transportes B', monto: 800, fecha: '2025-06-14', estado: 'Completado' },
];
let ComprasLogisticaService = class ComprasLogisticaService {
    getComprasLogistica() {
        return mockComprasLogistica;
    }
    getCompraLogisticaById(id) {
        return mockComprasLogistica.find(c => c.id === Number(id));
    }
    createCompraLogistica(data) {
        const newItem = {
            ...data,
            id: mockComprasLogistica.length + 1,
        };
        mockComprasLogistica.push(newItem);
        return newItem;
    }
    updateCompraLogistica(id, data) {
        const idx = mockComprasLogistica.findIndex(c => c.id === Number(id));
        if (idx === -1)
            return null;
        mockComprasLogistica[idx] = { ...mockComprasLogistica[idx], ...data };
        return mockComprasLogistica[idx];
    }
    deleteCompraLogistica(id) {
        const idx = mockComprasLogistica.findIndex(c => c.id === Number(id));
        if (idx === -1)
            return null;
        mockComprasLogistica.splice(idx, 1);
        return { deleted: true };
    }
};
exports.ComprasLogisticaService = ComprasLogisticaService;
exports.ComprasLogisticaService = ComprasLogisticaService = __decorate([
    (0, common_1.Injectable)()
], ComprasLogisticaService);
//# sourceMappingURL=compras-logistica.service.js.map