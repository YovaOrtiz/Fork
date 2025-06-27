import { SolicitudesService } from './solicitudes.service';
export declare class SolicitudesController {
    private readonly solicitudesService;
    constructor(solicitudesService: SolicitudesService);
    getSolicitudes(): {
        id: number;
        tipo: string;
        solicitante: string;
        fecha: string;
        estado: string;
        motivo: string;
    }[];
    getSolicitudById(id: string): {
        id: number;
        tipo: string;
        solicitante: string;
        fecha: string;
        estado: string;
        motivo: string;
    };
    createSolicitud(data: any): any;
    updateSolicitud(id: string, data: any): {
        id: number;
        tipo: string;
        solicitante: string;
        fecha: string;
        estado: string;
        motivo: string;
    };
    deleteSolicitud(id: string): {
        deleted: boolean;
    };
}
