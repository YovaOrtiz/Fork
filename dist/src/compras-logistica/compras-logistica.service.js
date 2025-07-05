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
exports.ComprasLogisticaService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let ComprasLogisticaService = class ComprasLogisticaService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getComprasLogistica() {
        return this.prisma.purchaseOrder.findMany();
    }
    async getCompraLogisticaById(id) {
        return this.prisma.purchaseOrder.findUnique({ where: { id } });
    }
    async createCompraLogistica(data) {
        return this.prisma.purchaseOrder.create({ data });
    }
    async updateCompraLogistica(id, data) {
        try {
            return await this.prisma.purchaseOrder.update({ where: { id }, data });
        }
        catch (e) {
            return null;
        }
    }
    async deleteCompraLogistica(id) {
        try {
            await this.prisma.purchaseOrder.delete({ where: { id } });
            return { deleted: true };
        }
        catch (e) {
            return { deleted: false };
        }
    }
};
exports.ComprasLogisticaService = ComprasLogisticaService;
exports.ComprasLogisticaService = ComprasLogisticaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ComprasLogisticaService);
return { deleted: true };
//# sourceMappingURL=compras-logistica.service.js.map