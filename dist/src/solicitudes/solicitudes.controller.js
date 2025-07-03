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
exports.SolicitudesController = void 0;
const common_1 = require("@nestjs/common");
const solicitudes_service_1 = require("./solicitudes.service");
const solicitud_dto_1 = require("./dto/solicitud.dto");
let SolicitudesController = class SolicitudesController {
    solicitudesService;
    constructor(solicitudesService) {
        this.solicitudesService = solicitudesService;
    }
    getSolicitudes(query) {
        if (Object.keys(query).length === 0) {
            return this.solicitudesService.getSolicitudes();
        }
        const parsed = solicitud_dto_1.FilterSolicitudesSchema.safeParse(query);
        if (!parsed.success)
            throw new common_1.HttpException(parsed.error.format(), common_1.HttpStatus.BAD_REQUEST);
        return this.solicitudesService.getSolicitudesFiltradas(parsed.data);
    }
    getSolicitudById(id) {
        return this.solicitudesService.getSolicitudById(id);
    }
    createSolicitud(data) {
        const parsed = solicitud_dto_1.CreateSolicitudSchema.safeParse(data);
        if (!parsed.success)
            throw new common_1.HttpException(parsed.error.format(), common_1.HttpStatus.BAD_REQUEST);
        return this.solicitudesService.createSolicitud(parsed.data);
    }
    updateSolicitud(id, data) {
        return this.solicitudesService.updateSolicitud(id, data);
    }
    deleteSolicitud(id) {
        return this.solicitudesService.deleteSolicitud(id);
    }
    addComentario(id, data) {
        const parsed = solicitud_dto_1.CreateComentarioSchema.safeParse(data);
        if (!parsed.success)
            throw new common_1.HttpException(parsed.error.format(), common_1.HttpStatus.BAD_REQUEST);
        return this.solicitudesService.addComentario(id, parsed.data);
    }
    getComentarios(id) {
        return this.solicitudesService.getComentarios(id);
    }
    getHistorial(userId, area) {
        return this.solicitudesService.getHistorial({ userId, area });
    }
    updateStatus(id, body) {
        const statusSchema = solicitud_dto_1.SolicitudStatus;
        const parsed = statusSchema.safeParse(body.status);
        if (!parsed.success)
            throw new common_1.HttpException(parsed.error.format(), common_1.HttpStatus.BAD_REQUEST);
        const updated = this.solicitudesService.updateStatus(id, parsed.data);
        if (!updated)
            throw new common_1.HttpException('Solicitud no encontrada', common_1.HttpStatus.NOT_FOUND);
        return updated;
    }
};
exports.SolicitudesController = SolicitudesController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SolicitudesController.prototype, "getSolicitudes", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SolicitudesController.prototype, "getSolicitudById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SolicitudesController.prototype, "createSolicitud", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], SolicitudesController.prototype, "updateSolicitud", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SolicitudesController.prototype, "deleteSolicitud", null);
__decorate([
    (0, common_1.Post)(':id/comentarios'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], SolicitudesController.prototype, "addComentario", null);
__decorate([
    (0, common_1.Get)(':id/comentarios'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SolicitudesController.prototype, "getComentarios", null);
__decorate([
    (0, common_1.Get)('/historial'),
    __param(0, (0, common_1.Query)('userId')),
    __param(1, (0, common_1.Query)('area')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], SolicitudesController.prototype, "getHistorial", null);
__decorate([
    (0, common_1.Put)(':id/estado'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], SolicitudesController.prototype, "updateStatus", null);
exports.SolicitudesController = SolicitudesController = __decorate([
    (0, common_1.Controller)('solicitudes'),
    __metadata("design:paramtypes", [solicitudes_service_1.SolicitudesService])
], SolicitudesController);
//# sourceMappingURL=solicitudes.controller.js.map