"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComercialModule = void 0;
const common_1 = require("@nestjs/common");
const leads_controller_1 = require("./leads.controller");
const quotes_controller_1 = require("./quotes.controller");
const orders_controller_1 = require("./orders.controller");
const prices_controller_1 = require("./prices.controller");
const automation_controller_1 = require("./automation.controller");
const overview_controller_1 = require("./overview.controller");
let ComercialModule = class ComercialModule {
};
exports.ComercialModule = ComercialModule;
exports.ComercialModule = ComercialModule = __decorate([
    (0, common_1.Module)({
        controllers: [
            leads_controller_1.LeadsController,
            quotes_controller_1.QuotesController,
            orders_controller_1.OrdersController,
            prices_controller_1.PricesController,
            automation_controller_1.AutomationController,
            overview_controller_1.OverviewController,
        ],
        providers: [],
    })
], ComercialModule);
//# sourceMappingURL=comercial.module.js.map