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
exports.ComercialController = void 0;
const common_1 = require("@nestjs/common");
const comercial_service_1 = require("./comercial.service");
let ComercialController = class ComercialController {
    comercialService;
    constructor(comercialService) {
        this.comercialService = comercialService;
    }
    getComercial() {
        return this.comercialService.getComercial();
    }
    getComercialById(id) {
        return this.comercialService.getComercialById(id);
    }
    createComercial(data) {
        return this.comercialService.createComercial(data);
    }
    updateComercial(id, data) {
        return this.comercialService.updateComercial(id, data);
    }
    deleteComercial(id) {
        return this.comercialService.deleteComercial(id);
    }
};
exports.ComercialController = ComercialController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ComercialController.prototype, "getComercial", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ComercialController.prototype, "getComercialById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ComercialController.prototype, "createComercial", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ComercialController.prototype, "updateComercial", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ComercialController.prototype, "deleteComercial", null);
exports.ComercialController = ComercialController = __decorate([
    (0, common_1.Controller)('comercial'),
    __metadata("design:paramtypes", [comercial_service_1.ComercialService])
], ComercialController);
//# sourceMappingURL=comercial.controller.js.map