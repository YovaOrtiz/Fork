export declare class PreciosService {
    getPrecios(): {
        id: number;
        producto: string;
        precio: number;
        moneda: string;
        fecha: string;
        estado: string;
    }[];
    getPrecioById(id: string): {
        id: number;
        producto: string;
        precio: number;
        moneda: string;
        fecha: string;
        estado: string;
    };
    createPrecio(data: any): any;
    updatePrecio(id: string, data: any): {
        id: number;
        producto: string;
        precio: number;
        moneda: string;
        fecha: string;
        estado: string;
    };
    deletePrecio(id: string): {
        deleted: boolean;
    };
}
