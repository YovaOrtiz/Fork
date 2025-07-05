import { ComprasLogisticaService } from './compras-logistica.service';
import { PurchaseOrderDto } from './dto/purchase-order.dto';
export declare class PurchaseOrdersController {
    private readonly comprasLogisticaService;
    constructor(comprasLogisticaService: ComprasLogisticaService);
    getAll(): Promise<{
        id: string;
        createdBy: number;
        createdAt: Date;
        updatedAt: Date;
        projectId: string | null;
        productName: string;
        quantity: number;
        unitPrice: number;
        origin: string;
        destination: string | null;
        originStatus: string;
        internalStatus: string;
        externalShippingStatus: string;
        overallStatus: string;
        notes: string | null;
    }[]>;
    getById(id: string): Promise<{
        id: string;
        createdBy: number;
        createdAt: Date;
        updatedAt: Date;
        projectId: string | null;
        productName: string;
        quantity: number;
        unitPrice: number;
        origin: string;
        destination: string | null;
        originStatus: string;
        internalStatus: string;
        externalShippingStatus: string;
        overallStatus: string;
        notes: string | null;
    }>;
    create(data: PurchaseOrderDto): Promise<{
        id: string;
        createdBy: number;
        createdAt: Date;
        updatedAt: Date;
        projectId: string | null;
        productName: string;
        quantity: number;
        unitPrice: number;
        origin: string;
        destination: string | null;
        originStatus: string;
        internalStatus: string;
        externalShippingStatus: string;
        overallStatus: string;
        notes: string | null;
    }>;
    update(id: string, data: PurchaseOrderDto): Promise<{
        id: string;
        createdBy: number;
        createdAt: Date;
        updatedAt: Date;
        projectId: string | null;
        productName: string;
        quantity: number;
        unitPrice: number;
        origin: string;
        destination: string | null;
        originStatus: string;
        internalStatus: string;
        externalShippingStatus: string;
        overallStatus: string;
        notes: string | null;
    }>;
    delete(id: string): Promise<{
        deleted: boolean;
    }>;
}
