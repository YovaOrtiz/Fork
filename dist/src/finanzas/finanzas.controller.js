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
exports.FinanzasController = void 0;
const common_1 = require("@nestjs/common");
const finanzas_service_1 = require("./finanzas.service");
let FinanzasController = class FinanzasController {
    finanzasService;
    constructor(finanzasService) {
        this.finanzasService = finanzasService;
    }
    getFinanzas() {
        return this.finanzasService.getFinanzas();
    }
    getFinanzaById(id) {
        return this.finanzasService.getFinanzaById(id);
    }
    createFinanza(data) {
        return this.finanzasService.createFinanza(data);
    }
    updateFinanza(id, data) {
        return this.finanzasService.updateFinanza(id, data);
    }
    deleteFinanza(id) {
        return this.finanzasService.deleteFinanza(id);
    }
};
exports.FinanzasController = FinanzasController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FinanzasController.prototype, "getFinanzas", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FinanzasController.prototype, "getFinanzaById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FinanzasController.prototype, "createFinanza", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], FinanzasController.prototype, "updateFinanza", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FinanzasController.prototype, "deleteFinanza", null);
exports.FinanzasController = FinanzasController = __decorate([
    (0, common_1.Controller)('finanzas'),
    __metadata("design:paramtypes", [finanzas_service_1.FinanzasService])
], FinanzasController);
//# sourceMappingURL=finanzas.controller.js.map