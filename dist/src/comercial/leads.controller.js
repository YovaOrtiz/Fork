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
exports.LeadsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const lead_dto_1 = require("./dto/lead.dto");
const lead_entity_1 = require("./entities/lead.entity");
const uuid_1 = require("uuid");
let LeadsController = class LeadsController {
    leads = [];
    findAll() {
        return this.leads;
    }
    findOne(id) {
        return this.leads.find(l => l.id === id);
    }
    create(dto) {
        const lead = { ...dto, id: (0, uuid_1.v4)(), createdAt: new Date().toISOString() };
        this.leads.push(lead);
        return lead;
    }
    update(id, dto) {
        const idx = this.leads.findIndex(l => l.id === id);
        if (idx === -1)
            return null;
        this.leads[idx] = { ...this.leads[idx], ...dto };
        return this.leads[idx];
    }
    remove(id) {
        const idx = this.leads.findIndex(l => l.id === id);
        if (idx === -1)
            return { deleted: false };
        this.leads.splice(idx, 1);
        return { deleted: true };
    }
};
exports.LeadsController = LeadsController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todos los leads' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], LeadsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener un lead por ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", lead_entity_1.Lead)
], LeadsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Crear un lead' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [lead_dto_1.CreateLeadDto]),
    __metadata("design:returntype", lead_entity_1.Lead)
], LeadsController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar un lead' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, lead_dto_1.UpdateLeadDto]),
    __metadata("design:returntype", lead_entity_1.Lead)
], LeadsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar un lead' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LeadsController.prototype, "remove", null);
exports.LeadsController = LeadsController = __decorate([
    (0, swagger_1.ApiTags)('Comercial'),
    (0, common_1.Controller)('comercial/leads')
], LeadsController);
//# sourceMappingURL=leads.controller.js.map