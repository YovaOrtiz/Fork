import { PrismaService } from '../prisma.service';
import { Prisma, PurchaseOrder } from '@prisma/client';
export declare class ComprasLogisticaService {
    private prisma;
    constructor(prisma: PrismaService);
    getComprasLogistica(): Promise<PurchaseOrder[]>;
    getCompraLogisticaById(id: string): Promise<PurchaseOrder | null>;
    createCompraLogistica(data: Prisma.PurchaseOrderCreateInput): Promise<PurchaseOrder>;
    updateCompraLogistica(id: string, data: Prisma.PurchaseOrderUpdateInput): Promise<PurchaseOrder | null>;
    deleteCompraLogistica(id: string): Promise<{
        deleted: boolean;
    }>;
}
