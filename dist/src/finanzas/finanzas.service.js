"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinanzasService = void 0;
const common_1 = require("@nestjs/common");
const mockFinanzas = [
    { id: 1, concepto: 'Pago proveedor', monto: 1500, fecha: '2025-06-01', categoria: 'Egreso', estado: 'Pagado' },
    { id: 2, concepto: 'Factura cliente', monto: 2500, fecha: '2025-06-10', categoria: 'Ingreso', estado: 'Pendiente' },
];
let FinanzasService = class FinanzasService {
    getFinanzas() {
        return mockFinanzas;
    }
    getFinanzaById(id) {
        return mockFinanzas.find(f => f.id === Number(id));
    }
    createFinanza(data) {
        const newFinanza = {
            ...data,
            id: mockFinanzas.length + 1,
        };
        mockFinanzas.push(newFinanza);
        return newFinanza;
    }
    updateFinanza(id, data) {
        const idx = mockFinanzas.findIndex(f => f.id === Number(id));
        if (idx === -1)
            return null;
        mockFinanzas[idx] = { ...mockFinanzas[idx], ...data };
        return mockFinanzas[idx];
    }
    deleteFinanza(id) {
        const idx = mockFinanzas.findIndex(f => f.id === Number(id));
        if (idx === -1)
            return null;
        mockFinanzas.splice(idx, 1);
        return { deleted: true };
    }
};
exports.FinanzasService = FinanzasService;
exports.FinanzasService = FinanzasService = __decorate([
    (0, common_1.Injectable)()
], FinanzasService);
//# sourceMappingURL=finanzas.service.js.map