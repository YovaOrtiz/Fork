import { SolicitudesService } from './solicitudes.service';
export declare class SolicitudesController {
    private readonly solicitudesService;
    constructor(solicitudesService: SolicitudesService);
    getSolicitudes(query: any): any[];
    getSolicitudById(id: string): any;
    createSolicitud(data: any): {
        id: string;
        status: string;
        createdAt: string;
        comments: any[];
        description?: string;
        priority?: "high" | "medium" | "low" | "urgent";
        createdBy?: {
            id?: string;
            name?: string;
        };
        dueDate?: string;
        projectId?: string;
        title?: string;
        projectName?: string;
        fromArea?: string;
        toArea?: string;
        assignedTo?: {
            id?: string;
            name?: string;
        };
    };
    updateSolicitud(id: string, data: any): any;
    deleteSolicitud(id: string): {
        deleted: boolean;
    };
    addComentario(id: string, data: any): {
        id: string;
        solicitudId: string;
        text: string;
        createdAt: string;
        user: {
            id: string;
            name: string;
        };
    };
    getComentarios(id: string): any[];
    getHistorial(userId?: string, area?: string): any[];
    updateStatus(id: string, body: any): any;
}
