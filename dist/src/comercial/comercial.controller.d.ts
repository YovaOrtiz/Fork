import { ComercialService } from './comercial.service';
export declare class ComercialController {
    private readonly comercialService;
    constructor(comercialService: ComercialService);
    getComercial(): {
        id: number;
        cliente: string;
        contacto: string;
        oportunidad: string;
        estado: string;
        monto: number;
    }[];
    getComercialById(id: string): {
        id: number;
        cliente: string;
        contacto: string;
        oportunidad: string;
        estado: string;
        monto: number;
    };
    createComercial(data: any): any;
    updateComercial(id: string, data: any): {
        id: number;
        cliente: string;
        contacto: string;
        oportunidad: string;
        estado: string;
        monto: number;
    };
    deleteComercial(id: string): {
        deleted: boolean;
    };
}
