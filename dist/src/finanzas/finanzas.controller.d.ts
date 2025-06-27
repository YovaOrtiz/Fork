import { FinanzasService } from './finanzas.service';
export declare class FinanzasController {
    private readonly finanzasService;
    constructor(finanzasService: FinanzasService);
    getFinanzas(): {
        id: number;
        concepto: string;
        monto: number;
        fecha: string;
        categoria: string;
        estado: string;
    }[];
    getFinanzaById(id: string): {
        id: number;
        concepto: string;
        monto: number;
        fecha: string;
        categoria: string;
        estado: string;
    };
    createFinanza(data: any): any;
    updateFinanza(id: string, data: any): {
        id: number;
        concepto: string;
        monto: number;
        fecha: string;
        categoria: string;
        estado: string;
    };
    deleteFinanza(id: string): {
        deleted: boolean;
    };
}
