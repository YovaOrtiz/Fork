"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerfilController = void 0;
const common_1 = require("@nestjs/common");
const perfil_service_1 = require("./perfil.service");
let PerfilController = class PerfilController {
    perfilService;
    constructor(perfilService) {
        this.perfilService = perfilService;
    }
    getPerfil(id) {
        return this.perfilService.getPerfil(id);
    }
    updatePerfil(id, data) {
        return this.perfilService.updatePerfil(id, data);
    }
};
exports.PerfilController = PerfilController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PerfilController.prototype, "getPerfil", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], PerfilController.prototype, "updatePerfil", null);
exports.PerfilController = PerfilController = __decorate([
    (0, common_1.Controller)('perfil'),
    __metadata("design:paramtypes", [perfil_service_1.PerfilService])
], PerfilController);
//# sourceMappingURL=perfil.controller.js.map