"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreciosService = void 0;
const common_1 = require("@nestjs/common");
const mockPrecios = [
    { id: 1, producto: 'Software A', precio: 1200, moneda: 'USD', fecha: '2025-06-01', estado: 'Vigente' },
    { id: 2, producto: 'Servicio B', precio: 850, moneda: 'USD', fecha: '2025-06-10', estado: 'Vigente' },
];
let PreciosService = class PreciosService {
    getPrecios() {
        return mockPrecios;
    }
    getPrecioById(id) {
        return mockPrecios.find(p => p.id === Number(id));
    }
    createPrecio(data) {
        const newPrecio = {
            ...data,
            id: mockPrecios.length + 1,
        };
        mockPrecios.push(newPrecio);
        return newPrecio;
    }
    updatePrecio(id, data) {
        const idx = mockPrecios.findIndex(p => p.id === Number(id));
        if (idx === -1)
            return null;
        mockPrecios[idx] = { ...mockPrecios[idx], ...data };
        return mockPrecios[idx];
    }
    deletePrecio(id) {
        const idx = mockPrecios.findIndex(p => p.id === Number(id));
        if (idx === -1)
            return null;
        mockPrecios.splice(idx, 1);
        return { deleted: true };
    }
};
exports.PreciosService = PreciosService;
exports.PreciosService = PreciosService = __decorate([
    (0, common_1.Injectable)()
], PreciosService);
//# sourceMappingURL=precios.service.js.map