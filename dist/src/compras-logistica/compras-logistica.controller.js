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
exports.ComprasLogisticaController = void 0;
const common_1 = require("@nestjs/common");
const compras_logistica_service_1 = require("./compras-logistica.service");
let ComprasLogisticaController = class ComprasLogisticaController {
    comprasLogisticaService;
    constructor(comprasLogisticaService) {
        this.comprasLogisticaService = comprasLogisticaService;
    }
    getComprasLogistica() {
        return this.comprasLogisticaService.getComprasLogistica();
    }
    getCompraLogisticaById(id) {
        return this.comprasLogisticaService.getCompraLogisticaById(id);
    }
    createCompraLogistica(data) {
        return this.comprasLogisticaService.createCompraLogistica(data);
    }
    updateCompraLogistica(id, data) {
        return this.comprasLogisticaService.updateCompraLogistica(id, data);
    }
    deleteCompraLogistica(id) {
        return this.comprasLogisticaService.deleteCompraLogistica(id);
    }
};
exports.ComprasLogisticaController = ComprasLogisticaController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ComprasLogisticaController.prototype, "getComprasLogistica", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ComprasLogisticaController.prototype, "getCompraLogisticaById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ComprasLogisticaController.prototype, "createCompraLogistica", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ComprasLogisticaController.prototype, "updateCompraLogistica", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ComprasLogisticaController.prototype, "deleteCompraLogistica", null);
exports.ComprasLogisticaController = ComprasLogisticaController = __decorate([
    (0, common_1.Controller)('compras-logistica'),
    __metadata("design:paramtypes", [compras_logistica_service_1.ComprasLogisticaService])
], ComprasLogisticaController);
//# sourceMappingURL=compras-logistica.controller.js.map