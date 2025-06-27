"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerfilService = void 0;
const common_1 = require("@nestjs/common");
const mockPerfiles = [
    { id: 1, nombre: 'Jovani Ortiz', email: 'jovani@email.com', telefono: '555-1234', puesto: 'Administrador', avatar: '', preferencias: { idioma: 'es', tema: 'oscuro' } },
    { id: 2, nombre: 'Ana Torres', email: 'ana@email.com', telefono: '555-5678', puesto: 'Usuario', avatar: '', preferencias: { idioma: 'es', tema: 'claro' } },
];
let PerfilService = class PerfilService {
    getPerfil(id) {
        return mockPerfiles.find(p => p.id === Number(id));
    }
    updatePerfil(id, data) {
        const idx = mockPerfiles.findIndex(p => p.id === Number(id));
        if (idx === -1)
            return null;
        mockPerfiles[idx] = { ...mockPerfiles[idx], ...data };
        return mockPerfiles[idx];
    }
};
exports.PerfilService = PerfilService;
exports.PerfilService = PerfilService = __decorate([
    (0, common_1.Injectable)()
], PerfilService);
//# sourceMappingURL=perfil.service.js.map