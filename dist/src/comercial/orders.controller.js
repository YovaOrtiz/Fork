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
exports.OrdersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const order_dto_1 = require("./dto/order.dto");
const order_entity_1 = require("./entities/order.entity");
const uuid_1 = require("uuid");
let OrdersController = class OrdersController {
    orders = [];
    findAll() {
        return this.orders;
    }
    findOne(id) {
        return this.orders.find(o => o.id === id);
    }
    create(dto) {
        const total = dto.items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
        const order = { ...dto, id: (0, uuid_1.v4)(), createdAt: new Date().toISOString(), total };
        this.orders.push(order);
        return order;
    }
    update(id, dto) {
        const idx = this.orders.findIndex(o => o.id === id);
        if (idx === -1)
            return null;
        const merged = { ...this.orders[idx], ...dto };
        const total = merged.items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
        this.orders[idx] = { ...merged, total };
        return this.orders[idx];
    }
    updateStatus(id, status) {
        const order = this.orders.find(o => o.id === id);
        if (!order)
            return null;
        order.status = status;
        return order;
    }
    remove(id) {
        const idx = this.orders.findIndex(o => o.id === id);
        if (idx === -1)
            return { deleted: false };
        this.orders.splice(idx, 1);
        return { deleted: true };
    }
};
exports.OrdersController = OrdersController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todos los pedidos' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], OrdersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener un pedido por ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", order_entity_1.Order)
], OrdersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Crear un pedido' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [order_dto_1.CreateOrderDto]),
    __metadata("design:returntype", order_entity_1.Order)
], OrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar un pedido' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, order_dto_1.UpdateOrderDto]),
    __metadata("design:returntype", order_entity_1.Order)
], OrdersController.prototype, "update", null);
__decorate([
    (0, common_1.Put)(':id/status'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar el estatus de un pedido' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", order_entity_1.Order)
], OrdersController.prototype, "updateStatus", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar un pedido' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "remove", null);
exports.OrdersController = OrdersController = __decorate([
    (0, swagger_1.ApiTags)('Comercial'),
    (0, common_1.Controller)('comercial/orders')
], OrdersController);
//# sourceMappingURL=orders.controller.js.map