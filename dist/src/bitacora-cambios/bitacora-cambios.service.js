"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BitacoraCambiosService = void 0;
const common_1 = require("@nestjs/common");
const mockBitacora = [
    { id: 1, entidad: 'Proyecto', cambio: 'Actualización de fechas', usuario: 'María García', fecha: '2025-06-10', detalle: 'Se cambió la fecha de entrega.' },
    { id: 2, entidad: 'Tarea', cambio: 'Cambio de responsable', usuario: 'Juan Pérez', fecha: '2025-06-12', detalle: 'Responsable cambiado a Ana Torres.' },
];
let BitacoraCambiosService = class BitacoraCambiosService {
    getBitacora() {
        return mockBitacora;
    }
    getCambioById(id) {
        return mockBitacora.find(b => b.id === Number(id));
    }
    createCambio(data) {
        const newCambio = {
            ...data,
            id: mockBitacora.length + 1,
        };
        mockBitacora.push(newCambio);
        return newCambio;
    }
    updateCambio(id, data) {
        const idx = mockBitacora.findIndex(b => b.id === Number(id));
        if (idx === -1)
            return null;
        mockBitacora[idx] = { ...mockBitacora[idx], ...data };
        return mockBitacora[idx];
    }
    deleteCambio(id) {
        const idx = mockBitacora.findIndex(b => b.id === Number(id));
        if (idx === -1)
            return null;
        mockBitacora.splice(idx, 1);
        return { deleted: true };
    }
};
exports.BitacoraCambiosService = BitacoraCambiosService;
exports.BitacoraCambiosService = BitacoraCambiosService = __decorate([
    (0, common_1.Injectable)()
], BitacoraCambiosService);
//# sourceMappingURL=bitacora-cambios.service.js.map