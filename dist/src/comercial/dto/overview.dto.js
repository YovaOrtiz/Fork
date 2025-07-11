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
exports.ComercialOverviewDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class ComercialOverviewDto {
    totalQuotes;
    totalOrders;
    projectedProfit;
    quotesPerMonth;
    ordersPerMonth;
    months;
}
exports.ComercialOverviewDto = ComercialOverviewDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ComercialOverviewDto.prototype, "totalQuotes", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ComercialOverviewDto.prototype, "totalOrders", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ComercialOverviewDto.prototype, "projectedProfit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [Number] }),
    __metadata("design:type", Array)
], ComercialOverviewDto.prototype, "quotesPerMonth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [Number] }),
    __metadata("design:type", Array)
], ComercialOverviewDto.prototype, "ordersPerMonth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [String] }),
    __metadata("design:type", Array)
], ComercialOverviewDto.prototype, "months", void 0);
//# sourceMappingURL=overview.dto.js.map