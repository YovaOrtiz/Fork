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
exports.OverviewController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const overview_dto_1 = require("./dto/overview.dto");
let OverviewController = class OverviewController {
    getOverview() {
        const totalQuotes = Math.floor(Math.random() * 100);
        const totalOrders = Math.floor(Math.random() * 80);
        const projectedProfit = Math.floor(Math.random() * 100000);
        const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
        const quotesPerMonth = months.map(() => Math.floor(Math.random() * 10) + 1);
        const ordersPerMonth = months.map(() => Math.floor(Math.random() * 8) + 1);
        return { totalQuotes, totalOrders, projectedProfit, quotesPerMonth, ordersPerMonth, months };
    }
};
exports.OverviewController = OverviewController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'KPIs y gráficas del módulo comercial' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", overview_dto_1.ComercialOverviewDto)
], OverviewController.prototype, "getOverview", null);
exports.OverviewController = OverviewController = __decorate([
    (0, swagger_1.ApiTags)('Comercial'),
    (0, common_1.Controller)('comercial/overview')
], OverviewController);
//# sourceMappingURL=overview.controller.js.map