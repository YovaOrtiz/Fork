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
exports.QuotesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const quote_dto_1 = require("./dto/quote.dto");
const quote_entity_1 = require("./entities/quote.entity");
const uuid_1 = require("uuid");
let QuotesController = class QuotesController {
    quotes = [];
    findAll() {
        return this.quotes;
    }
    findOne(id) {
        return this.quotes.find(q => q.id === id);
    }
    create(dto) {
        const total = dto.items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
        const quote = { ...dto, id: (0, uuid_1.v4)(), total, createdAt: new Date().toISOString() };
        this.quotes.push(quote);
        return quote;
    }
    update(id, dto) {
        const idx = this.quotes.findIndex(q => q.id === id);
        if (idx === -1)
            return null;
        this.quotes[idx] = { ...this.quotes[idx], ...dto };
        return this.quotes[idx];
    }
    updateStatus(id, status) {
        const quote = this.quotes.find(q => q.id === id);
        if (!quote)
            return null;
        quote.status = status;
        if (status === quote_dto_1.QuoteStatus.ENVIADA)
            quote.sentAt = new Date().toISOString();
        if (status === quote_dto_1.QuoteStatus.ACEPTADA)
            quote.approvedAt = new Date().toISOString();
        if (status === quote_dto_1.QuoteStatus.RECHAZADA)
            quote.rejectedAt = new Date().toISOString();
        return quote;
    }
    getPdf(id) {
        return { url: `https://fakepdf.com/quote/${id}.pdf` };
    }
    convertToOrder(id) {
        const quote = this.quotes.find(q => q.id === id);
        if (!quote)
            return null;
        return { orderId: (0, uuid_1.v4)(), fromQuoteId: id, createdAt: new Date().toISOString() };
    }
};
exports.QuotesController = QuotesController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todas las cotizaciones' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], QuotesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener una cotización por ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", quote_entity_1.Quote)
], QuotesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Crear una cotización' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [quote_dto_1.CreateQuoteDto]),
    __metadata("design:returntype", quote_entity_1.Quote)
], QuotesController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar una cotización' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, quote_dto_1.UpdateQuoteDto]),
    __metadata("design:returntype", quote_entity_1.Quote)
], QuotesController.prototype, "update", null);
__decorate([
    (0, common_1.Put)(':id/status'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar el estatus de una cotización' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", quote_entity_1.Quote)
], QuotesController.prototype, "updateStatus", null);
__decorate([
    (0, common_1.Get)(':id/pdf'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener PDF mock de la cotización' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], QuotesController.prototype, "getPdf", null);
__decorate([
    (0, common_1.Post)(':id/convert-to-order'),
    (0, swagger_1.ApiOperation)({ summary: 'Convertir cotización a pedido (mock)' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], QuotesController.prototype, "convertToOrder", null);
exports.QuotesController = QuotesController = __decorate([
    (0, swagger_1.ApiTags)('Comercial'),
    (0, common_1.Controller)('comercial/quotes')
], QuotesController);
//# sourceMappingURL=quotes.controller.js.map