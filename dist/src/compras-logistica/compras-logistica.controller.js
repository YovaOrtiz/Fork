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
exports.PurchaseOrdersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const compras_logistica_service_1 = require("./compras-logistica.service");
const purchase_order_dto_1 = require("./dto/purchase-order.dto");
let PurchaseOrdersController = class PurchaseOrdersController {
    comprasLogisticaService;
    constructor(comprasLogisticaService) {
        this.comprasLogisticaService = comprasLogisticaService;
    }
    getAll() {
        return this.comprasLogisticaService.getComprasLogistica();
    }
    getById(id) {
        return this.comprasLogisticaService.getCompraLogisticaById(id);
    }
    create(data) {
        return this.comprasLogisticaService.createCompraLogistica(data);
    }
    update(id, data) {
        return this.comprasLogisticaService.updateCompraLogistica(id, data);
    }
    delete(id) {
        return this.comprasLogisticaService.deleteCompraLogistica(id);
    }
};
exports.PurchaseOrdersController = PurchaseOrdersController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todos los pedidos de compra' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de pedidos de compra' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PurchaseOrdersController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener un pedido de compra por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Pedido encontrado' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Pedido no encontrado' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PurchaseOrdersController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Crear un pedido de compra' }),
    (0, swagger_1.ApiBody)({ type: purchase_order_dto_1.PurchaseOrderDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Pedido creado' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Error de validación' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [purchase_order_dto_1.PurchaseOrderDto]),
    __metadata("design:returntype", void 0)
], PurchaseOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar un pedido de compra' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String }),
    (0, swagger_1.ApiBody)({ type: purchase_order_dto_1.PurchaseOrderDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Pedido actualizado' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Error de validación' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Pedido no encontrado' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, purchase_order_dto_1.PurchaseOrderDto]),
    __metadata("design:returntype", void 0)
], PurchaseOrdersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar un pedido de compra' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Pedido eliminado' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Pedido no encontrado' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PurchaseOrdersController.prototype, "delete", null);
exports.PurchaseOrdersController = PurchaseOrdersController = __decorate([
    (0, swagger_1.ApiTags)('PurchaseOrders'),
    (0, common_1.Controller)('purchase-orders'),
    __metadata("design:paramtypes", [compras_logistica_service_1.ComprasLogisticaService])
], PurchaseOrdersController);
//# sourceMappingURL=compras-logistica.controller.js.map