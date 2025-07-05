import { ComprasLogisticaService } from './compras-logistica.service';
import { PurchaseOrderDto } from './dto/purchase-order.dto';
export declare class PurchaseOrdersController {
    private readonly comprasLogisticaService;
    constructor(comprasLogisticaService: ComprasLogisticaService);
    getAll(): {
        id: number;
        tipo: string;
        descripcion: string;
        proveedor: string;
        monto: number;
        fecha: string;
        estado: string;
    }[];
    getById(id: string): {
        id: number;
        tipo: string;
        descripcion: string;
        proveedor: string;
        monto: number;
        fecha: string;
        estado: string;
    };
    create(data: PurchaseOrderDto): any;
    update(id: string, data: PurchaseOrderDto): {
        id: number;
        tipo: string;
        descripcion: string;
        proveedor: string;
        monto: number;
        fecha: string;
        estado: string;
    };
    delete(id: string): {
        deleted: boolean;
    };
}
