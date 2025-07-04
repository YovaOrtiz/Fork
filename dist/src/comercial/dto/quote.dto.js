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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateQuoteDto = exports.CreateQuoteDto = exports.QuoteItemDto = exports.QuoteStatus = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
var QuoteStatus;
(function (QuoteStatus) {
    QuoteStatus["BORRADOR"] = "Borrador";
    QuoteStatus["ENVIADA"] = "Enviada";
    QuoteStatus["ACEPTADA"] = "Aceptada";
    QuoteStatus["RECHAZADA"] = "Rechazada";
})(QuoteStatus || (exports.QuoteStatus = QuoteStatus = {}));
class QuoteItemDto {
    productId;
    productName;
    quantity;
    unitPrice;
}
exports.QuoteItemDto = QuoteItemDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], QuoteItemDto.prototype, "productId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], QuoteItemDto.prototype, "productName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], QuoteItemDto.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], QuoteItemDto.prototype, "unitPrice", void 0);
class CreateQuoteDto {
    leadId;
    leadName;
    status;
    items;
    conditions;
}
exports.CreateQuoteDto = CreateQuoteDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateQuoteDto.prototype, "leadId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateQuoteDto.prototype, "leadName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: QuoteStatus }),
    (0, class_validator_1.IsEnum)(QuoteStatus),
    __metadata("design:type", String)
], CreateQuoteDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [QuoteItemDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => QuoteItemDto),
    __metadata("design:type", Array)
], CreateQuoteDto.prototype, "items", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateQuoteDto.prototype, "conditions", void 0);
class UpdateQuoteDto {
    leadId;
    leadName;
    status;
    items;
    conditions;
}
exports.UpdateQuoteDto = UpdateQuoteDto;
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateQuoteDto.prototype, "leadId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateQuoteDto.prototype, "leadName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, enum: QuoteStatus }),
    (0, class_validator_1.IsEnum)(QuoteStatus),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateQuoteDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, type: [QuoteItemDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => QuoteItemDto),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], UpdateQuoteDto.prototype, "items", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateQuoteDto.prototype, "conditions", void 0);
//# sourceMappingURL=quote.dto.js.map