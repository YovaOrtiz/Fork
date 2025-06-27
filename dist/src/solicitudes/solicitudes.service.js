"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolicitudesService = void 0;
const common_1 = require("@nestjs/common");
const mockSolicitudes = [
    { id: 1, tipo: 'Permiso', solicitante: 'Carlos Ruiz', fecha: '2025-06-15', estado: 'Aprobada', motivo: 'Vacaciones' },
    { id: 2, tipo: 'Compra', solicitante: 'Ana Torres', fecha: '2025-06-16', estado: 'Pendiente', motivo: 'Equipo nuevo' },
];
let SolicitudesService = class SolicitudesService {
    getSolicitudes() {
        return mockSolicitudes;
    }
    getSolicitudById(id) {
        return mockSolicitudes.find(s => s.id === Number(id));
    }
    createSolicitud(data) {
        const newSolicitud = {
            ...data,
            id: mockSolicitudes.length + 1,
        };
        mockSolicitudes.push(newSolicitud);
        return newSolicitud;
    }
    updateSolicitud(id, data) {
        const idx = mockSolicitudes.findIndex(s => s.id === Number(id));
        if (idx === -1)
            return null;
        mockSolicitudes[idx] = { ...mockSolicitudes[idx], ...data };
        return mockSolicitudes[idx];
    }
    deleteSolicitud(id) {
        const idx = mockSolicitudes.findIndex(s => s.id === Number(id));
        if (idx === -1)
            return null;
        mockSolicitudes.splice(idx, 1);
        return { deleted: true };
    }
};
exports.SolicitudesService = SolicitudesService;
exports.SolicitudesService = SolicitudesService = __decorate([
    (0, common_1.Injectable)()
], SolicitudesService);
//# sourceMappingURL=solicitudes.service.js.map