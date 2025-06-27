export declare class BitacoraCambiosService {
    getBitacora(): {
        id: number;
        entidad: string;
        cambio: string;
        usuario: string;
        fecha: string;
        detalle: string;
    }[];
    getCambioById(id: string): {
        id: number;
        entidad: string;
        cambio: string;
        usuario: string;
        fecha: string;
        detalle: string;
    };
    createCambio(data: any): any;
    updateCambio(id: string, data: any): {
        id: number;
        entidad: string;
        cambio: string;
        usuario: string;
        fecha: string;
        detalle: string;
    };
    deleteCambio(id: string): {
        deleted: boolean;
    };
}
