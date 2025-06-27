"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesService = void 0;
const common_1 = require("@nestjs/common");
const mockRoles = [
    { id: 1, name: 'admin', description: 'Administrador del sistema' },
    { id: 2, name: 'user', description: 'Usuario estándar' },
    { id: 3, name: 'editor', description: 'Puede editar proyectos y tareas' },
];
let RolesService = class RolesService {
    getRoles() {
        return mockRoles;
    }
    getRoleById(id) {
        return mockRoles.find(r => r.id === Number(id));
    }
    createRole(data) {
        const newRole = {
            ...data,
            id: mockRoles.length + 1,
        };
        mockRoles.push(newRole);
        return newRole;
    }
    updateRole(id, data) {
        const idx = mockRoles.findIndex(r => r.id === Number(id));
        if (idx === -1)
            return null;
        mockRoles[idx] = { ...mockRoles[idx], ...data };
        return mockRoles[idx];
    }
    deleteRole(id) {
        const idx = mockRoles.findIndex(r => r.id === Number(id));
        if (idx === -1)
            return null;
        mockRoles.splice(idx, 1);
        return { deleted: true };
    }
};
exports.RolesService = RolesService;
exports.RolesService = RolesService = __decorate([
    (0, common_1.Injectable)()
], RolesService);
//# sourceMappingURL=roles.service.js.map