export declare class ComprasLogisticaService {
    getComprasLogistica(): {
        id: number;
        tipo: string;
        descripcion: string;
        proveedor: string;
        monto: number;
        fecha: string;
        estado: string;
    }[];
    getCompraLogisticaById(id: string): {
        id: number;
        tipo: string;
        descripcion: string;
        proveedor: string;
        monto: number;
        fecha: string;
        estado: string;
    };
    createCompraLogistica(data: any): any;
    updateCompraLogistica(id: string, data: any): {
        id: number;
        tipo: string;
        descripcion: string;
        proveedor: string;
        monto: number;
        fecha: string;
        estado: string;
    };
    deleteCompraLogistica(id: string): {
        deleted: boolean;
    };
}
