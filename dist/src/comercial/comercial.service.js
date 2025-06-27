"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComercialService = void 0;
const common_1 = require("@nestjs/common");
const mockComercial = [
    { id: 1, cliente: 'Empresa X', contacto: 'Juan Pérez', oportunidad: 'Venta software', estado: 'En negociación', monto: 5000 },
    { id: 2, cliente: 'Empresa Y', contacto: 'Ana López', oportunidad: 'Capacitación', estado: 'Cerrada', monto: 1200 },
];
let ComercialService = class ComercialService {
    getComercial() {
        return mockComercial;
    }
    getComercialById(id) {
        return mockComercial.find(c => c.id === Number(id));
    }
    createComercial(data) {
        const newComercial = {
            ...data,
            id: mockComercial.length + 1,
        };
        mockComercial.push(newComercial);
        return newComercial;
    }
    updateComercial(id, data) {
        const idx = mockComercial.findIndex(c => c.id === Number(id));
        if (idx === -1)
            return null;
        mockComercial[idx] = { ...mockComercial[idx], ...data };
        return mockComercial[idx];
    }
    deleteComercial(id) {
        const idx = mockComercial.findIndex(c => c.id === Number(id));
        if (idx === -1)
            return null;
        mockComercial.splice(idx, 1);
        return { deleted: true };
    }
};
exports.ComercialService = ComercialService;
exports.ComercialService = ComercialService = __decorate([
    (0, common_1.Injectable)()
], ComercialService);
//# sourceMappingURL=comercial.service.js.map