"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolicitudesService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const solicitudes = [];
const comentarios = [];
let SolicitudesService = class SolicitudesService {
    getSolicitudes() {
        return solicitudes;
    }
    getSolicitudById(id) {
        return solicitudes.find(s => s.id === id);
    }
    createSolicitud(data) {
        const nueva = {
            ...data,
            id: (0, uuid_1.v4)(),
            status: 'pending',
            createdAt: new Date().toISOString(),
            comments: [],
        };
        solicitudes.push(nueva);
        return nueva;
    }
    updateSolicitud(id, data) {
        const idx = solicitudes.findIndex(s => s.id === id);
        if (idx === -1)
            return null;
        solicitudes[idx] = { ...solicitudes[idx], ...data };
        return solicitudes[idx];
    }
    deleteSolicitud(id) {
        const idx = solicitudes.findIndex(s => s.id === id);
        if (idx === -1)
            return null;
        solicitudes.splice(idx, 1);
        return { deleted: true };
    }
    addComentario(solicitudId, { text, userId }) {
        const user = { id: userId, name: 'Usuario Demo' };
        const comentario = {
            id: (0, uuid_1.v4)(),
            solicitudId,
            text,
            createdAt: new Date().toISOString(),
            user,
        };
        comentarios.push(comentario);
        const solicitud = solicitudes.find(s => s.id === solicitudId);
        if (solicitud)
            solicitud.comments = [...(solicitud.comments || []), comentario];
        return comentario;
    }
    getComentarios(solicitudId) {
        return comentarios.filter(c => c.solicitudId === solicitudId);
    }
    getSolicitudesFiltradas(filters) {
        return solicitudes.filter(s => {
            if (filters.status && s.status !== filters.status)
                return false;
            if (filters.priority && s.priority !== filters.priority)
                return false;
            if (filters.fromArea && s.fromArea !== filters.fromArea)
                return false;
            if (filters.toArea && s.toArea !== filters.toArea)
                return false;
            if (filters.dateFrom && new Date(s.createdAt) < new Date(filters.dateFrom))
                return false;
            if (filters.dateTo && new Date(s.createdAt) > new Date(filters.dateTo))
                return false;
            if (filters.q && !(s.title.includes(filters.q) || s.description.includes(filters.q)))
                return false;
            return true;
        });
    }
    getHistorial({ userId, area }) {
        return solicitudes
            .filter(s => (userId && s.createdBy.id === userId) ||
            (area && (s.fromArea === area || s.toArea === area)))
            .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }
    updateStatus(id, status) {
        const solicitud = solicitudes.find(s => s.id === id);
        if (!solicitud)
            return null;
        solicitud.status = status;
        if (status === 'completed' || status === 'rejected') {
            solicitud.resolvedAt = new Date().toISOString();
            solicitud.resolvedBy = solicitud.assignedTo || null;
        }
        return solicitud;
    }
};
exports.SolicitudesService = SolicitudesService;
exports.SolicitudesService = SolicitudesService = __decorate([
    (0, common_1.Injectable)()
], SolicitudesService);
//# sourceMappingURL=solicitudes.service.js.map