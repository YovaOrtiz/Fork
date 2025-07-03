import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateSolicitudDto, CreateComentarioDto, FilterSolicitudesDto } from './dto/solicitud.dto';

// Simulación de base de datos en memoria
const solicitudes: any[] = [];
const comentarios: any[] = [];

@Injectable()
export class SolicitudesService {
  // --- CRUD básico ---
  getSolicitudes() {
    return solicitudes;
  }

  getSolicitudById(id: string) {
    return solicitudes.find(s => s.id === id);
  }

  createSolicitud(data: CreateSolicitudDto) {
    const nueva = {
      ...data,
      id: uuidv4(),
      status: 'pending',
      createdAt: new Date().toISOString(),
      comments: [],
    };
    solicitudes.push(nueva);
    return nueva;
  }

  updateSolicitud(id: string, data: Partial<CreateSolicitudDto>) {
    const idx = solicitudes.findIndex(s => s.id === id);
    if (idx === -1) return null;
    solicitudes[idx] = { ...solicitudes[idx], ...data };
    return solicitudes[idx];
  }

  deleteSolicitud(id: string) {
    const idx = solicitudes.findIndex(s => s.id === id);
    if (idx === -1) return null;
    solicitudes.splice(idx, 1);
    return { deleted: true };
  }

  // --- Comentarios ---
  addComentario(solicitudId: string, { text, userId }: CreateComentarioDto) {
    const user = { id: userId, name: 'Usuario Demo' };
    const comentario = {
      id: uuidv4(),
      solicitudId,
      text,
      createdAt: new Date().toISOString(),
      user,
    };
    comentarios.push(comentario);
    const solicitud = solicitudes.find(s => s.id === solicitudId);
    if (solicitud) solicitud.comments = [...(solicitud.comments || []), comentario];
    return comentario;
  }

  getComentarios(solicitudId: string) {
    return comentarios.filter(c => c.solicitudId === solicitudId);
  }

  // --- Filtrado avanzado ---
  getSolicitudesFiltradas(filters: FilterSolicitudesDto) {
    return solicitudes.filter(s => {
      if (filters.status && s.status !== filters.status) return false;
      if (filters.priority && s.priority !== filters.priority) return false;
      if (filters.fromArea && s.fromArea !== filters.fromArea) return false;
      if (filters.toArea && s.toArea !== filters.toArea) return false;
      if (filters.dateFrom && new Date(s.createdAt) < new Date(filters.dateFrom)) return false;
      if (filters.dateTo && new Date(s.createdAt) > new Date(filters.dateTo)) return false;
      if (filters.q && !(s.title.includes(filters.q) || s.description.includes(filters.q))) return false;
      return true;
    });
  }

  // --- Historial ---
  getHistorial({ userId, area }: { userId?: string; area?: string }) {
    return solicitudes
      .filter(s =>
        (userId && s.createdBy.id === userId) ||
        (area && (s.fromArea === area || s.toArea === area))
      )
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  // --- Actualizar estado ---
  updateStatus(id: string, status: string) {
    const solicitud = solicitudes.find(s => s.id === id);
    if (!solicitud) return null;
    solicitud.status = status;
    if (status === 'completed' || status === 'rejected') {
      solicitud.resolvedAt = new Date().toISOString();
      solicitud.resolvedBy = solicitud.assignedTo || null;
    }
    return solicitud;
  }
}
