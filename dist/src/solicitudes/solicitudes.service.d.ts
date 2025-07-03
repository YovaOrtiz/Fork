import { CreateSolicitudDto, CreateComentarioDto, FilterSolicitudesDto } from './dto/solicitud.dto';
export declare class SolicitudesService {
    getSolicitudes(): any[];
    getSolicitudById(id: string): any;
    createSolicitud(data: CreateSolicitudDto): {
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
    updateSolicitud(id: string, data: Partial<CreateSolicitudDto>): any;
    deleteSolicitud(id: string): {
        deleted: boolean;
    };
    addComentario(solicitudId: string, { text, userId }: CreateComentarioDto): {
        id: string;
        solicitudId: string;
        text: string;
        createdAt: string;
        user: {
            id: string;
            name: string;
        };
    };
    getComentarios(solicitudId: string): any[];
    getSolicitudesFiltradas(filters: FilterSolicitudesDto): any[];
    getHistorial({ userId, area }: {
        userId?: string;
        area?: string;
    }): any[];
    updateStatus(id: string, status: string): any;
}
