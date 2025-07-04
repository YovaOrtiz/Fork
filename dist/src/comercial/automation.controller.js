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
exports.AutomationController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const automation_dto_1 = require("./dto/automation.dto");
let AutomationController = class AutomationController {
    estimate(dto) {
        const { productType, quantity, designComplexity } = dto;
        const base = 1000;
        const complexityFactor = designComplexity === 'Alta' ? 2 : designComplexity === 'Media' ? 1.5 : 1;
        const estimatedPrice = base * quantity * complexityFactor;
        const prototypeUrl = `https://prototipos.com/${productType}-${Date.now()}`;
        return { estimatedPrice, prototypeUrl };
    }
};
exports.AutomationController = AutomationController;
__decorate([
    (0, common_1.Post)('estimate'),
    (0, swagger_1.ApiOperation)({ summary: 'Estimar precio y prototipo para un producto' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [automation_dto_1.EstimateDto]),
    __metadata("design:returntype", void 0)
], AutomationController.prototype, "estimate", null);
exports.AutomationController = AutomationController = __decorate([
    (0, swagger_1.ApiTags)('Comercial'),
    (0, common_1.Controller)('comercial/automation')
], AutomationController);
//# sourceMappingURL=automation.controller.js.map