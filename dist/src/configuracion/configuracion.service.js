"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfiguracionService = void 0;
const common_1 = require("@nestjs/common");
const mockConfiguraciones = [
    { id: 1, usuarioId: 1, notificaciones: true, idioma: 'es', tema: 'oscuro', timezone: 'America/Mexico_City' },
    { id: 2, usuarioId: 2, notificaciones: false, idioma: 'es', tema: 'claro', timezone: 'America/Mexico_City' },
];
let ConfiguracionService = class ConfiguracionService {
    getConfiguracion(id) {
        return mockConfiguraciones.find(c => c.id === Number(id));
    }
    updateConfiguracion(id, data) {
        const idx = mockConfiguraciones.findIndex(c => c.id === Number(id));
        if (idx === -1)
            return null;
        mockConfiguraciones[idx] = { ...mockConfiguraciones[idx], ...data };
        return mockConfiguraciones[idx];
    }
};
exports.ConfiguracionService = ConfiguracionService;
exports.ConfiguracionService = ConfiguracionService = __decorate([
    (0, common_1.Injectable)()
], ConfiguracionService);
//# sourceMappingURL=configuracion.service.js.map