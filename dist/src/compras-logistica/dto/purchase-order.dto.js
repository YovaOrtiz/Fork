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
exports.PurchaseOrderDto = exports.PurchaseOrderSchema = exports.OverallStatusEnum = exports.ExternalShippingStatusEnum = exports.InternalStatusEnum = exports.OriginStatusEnum = void 0;
const zod_1 = require("zod");
exports.OriginStatusEnum = zod_1.z.enum([
    'pending_supplier',
    'left_origin',
    'in_customs',
    'arrived_local_port',
    'received_at_warehouse',
]);
exports.InternalStatusEnum = zod_1.z.enum([
    'pending',
    'printed',
    'packaged',
    'quality_check',
    'completed',
]);
exports.ExternalShippingStatusEnum = zod_1.z.enum([
    'pending_pickup',
    'in_transit',
    'delivered',
    'exception',
    'not_applicable',
]);
exports.OverallStatusEnum = zod_1.z.enum([
    'pending',
    'in_production',
    'in_transit',
    'delivered',
    'completed',
    'cancelled',
]);
exports.PurchaseOrderSchema = zod_1.z.object({
    productName: zod_1.z.string().min(1),
    quantity: zod_1.z.number().int().positive(),
    unitPrice: zod_1.z.number().nonnegative(),
    origin: zod_1.z.string().min(1),
    destination: zod_1.z.string().optional(),
    originStatus: exports.OriginStatusEnum,
    internalStatus: exports.InternalStatusEnum,
    externalShippingStatus: exports.ExternalShippingStatusEnum,
    overallStatus: exports.OverallStatusEnum,
    notes: zod_1.z.string().optional(),
});
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class PurchaseOrderDto {
    productName;
    quantity;
    unitPrice;
    origin;
    destination;
    originStatus;
    internalStatus;
    externalShippingStatus;
    overallStatus;
    notes;
}
exports.PurchaseOrderDto = PurchaseOrderDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    __metadata("design:type", String)
], PurchaseOrderDto.prototype, "productName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], PurchaseOrderDto.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], PurchaseOrderDto.prototype, "unitPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    __metadata("design:type", String)
], PurchaseOrderDto.prototype, "origin", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PurchaseOrderDto.prototype, "destination", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: exports.OriginStatusEnum.options }),
    (0, class_validator_1.IsEnum)(exports.OriginStatusEnum.options),
    __metadata("design:type", Object)
], PurchaseOrderDto.prototype, "originStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: exports.InternalStatusEnum.options }),
    (0, class_validator_1.IsEnum)(exports.InternalStatusEnum.options),
    __metadata("design:type", Object)
], PurchaseOrderDto.prototype, "internalStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: exports.ExternalShippingStatusEnum.options }),
    (0, class_validator_1.IsEnum)(exports.ExternalShippingStatusEnum.options),
    __metadata("design:type", Object)
], PurchaseOrderDto.prototype, "externalShippingStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: exports.OverallStatusEnum.options }),
    (0, class_validator_1.IsEnum)(exports.OverallStatusEnum.options),
    __metadata("design:type", Object)
], PurchaseOrderDto.prototype, "overallStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PurchaseOrderDto.prototype, "notes", void 0);
//# sourceMappingURL=purchase-order.dto.js.map