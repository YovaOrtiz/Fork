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
exports.PricesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const price_dto_1 = require("./dto/price.dto");
const price_entity_1 = require("./entities/price.entity");
const uuid_1 = require("uuid");
let PricesController = class PricesController {
    prices = [];
    findAll() {
        return this.prices;
    }
    findOne(id) {
        return this.prices.find(p => p.id === id);
    }
    create(dto) {
        const price = { ...dto, id: (0, uuid_1.v4)(), lastUpdated: new Date().toISOString() };
        this.prices.push(price);
        return price;
    }
    update(id, dto) {
        const idx = this.prices.findIndex(p => p.id === id);
        if (idx === -1)
            return null;
        this.prices[idx] = { ...this.prices[idx], ...dto, lastUpdated: new Date().toISOString() };
        return this.prices[idx];
    }
    remove(id) {
        const idx = this.prices.findIndex(p => p.id === id);
        if (idx === -1)
            return { deleted: false };
        this.prices.splice(idx, 1);
        return { deleted: true };
    }
};
exports.PricesController = PricesController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todos los precios' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], PricesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener un precio por ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", price_entity_1.Price)
], PricesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Crear un precio' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [price_dto_1.CreatePriceDto]),
    __metadata("design:returntype", price_entity_1.Price)
], PricesController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar un precio' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, price_dto_1.UpdatePriceDto]),
    __metadata("design:returntype", price_entity_1.Price)
], PricesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar un precio' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PricesController.prototype, "remove", null);
exports.PricesController = PricesController = __decorate([
    (0, swagger_1.ApiTags)('Comercial'),
    (0, common_1.Controller)('comercial/prices')
], PricesController);
//# sourceMappingURL=prices.controller.js.map