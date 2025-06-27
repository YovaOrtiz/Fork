"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AreasService = void 0;
const common_1 = require("@nestjs/common");
const mockAreas = [
    { id: 1, name: 'Diseño', status: 'active', responsible: 'María García', progress: 50 },
    { id: 2, name: 'Producción', status: 'active', responsible: 'Juan Pérez', progress: 30 },
    { id: 3, name: 'Logística', status: 'inactive', responsible: 'Ana Martínez', progress: 0 },
];
let AreasService = class AreasService {
    getAreas() {
        return mockAreas;
    }
    getAreaById(id) {
        return mockAreas.find(a => a.id === Number(id));
    }
    createArea(data) {
        const newArea = {
            ...data,
            id: mockAreas.length + 1,
        };
        mockAreas.push(newArea);
        return newArea;
    }
    updateArea(id, data) {
        const idx = mockAreas.findIndex(a => a.id === Number(id));
        if (idx === -1)
            return null;
        mockAreas[idx] = { ...mockAreas[idx], ...data };
        return mockAreas[idx];
    }
    deleteArea(id) {
        const idx = mockAreas.findIndex(a => a.id === Number(id));
        if (idx === -1)
            return null;
        mockAreas.splice(idx, 1);
        return { deleted: true };
    }
};
exports.AreasService = AreasService;
exports.AreasService = AreasService = __decorate([
    (0, common_1.Injectable)()
], AreasService);
//# sourceMappingURL=areas.service.js.map