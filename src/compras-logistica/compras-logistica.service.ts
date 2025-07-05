import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma, PurchaseOrder } from '@prisma/client';

@Injectable()
export class ComprasLogisticaService {
  constructor(private prisma: PrismaService) {}

  async getComprasLogistica(): Promise<PurchaseOrder[]> {
    return this.prisma.purchaseOrder.findMany();
  }

  async getCompraLogisticaById(id: string): Promise<PurchaseOrder | null> {
    return this.prisma.purchaseOrder.findUnique({ where: { id } });
  }

  async createCompraLogistica(data: Prisma.PurchaseOrderCreateInput): Promise<PurchaseOrder> {
    return this.prisma.purchaseOrder.create({ data });
  }

  async updateCompraLogistica(id: string, data: Prisma.PurchaseOrderUpdateInput): Promise<PurchaseOrder | null> {
    try {
      return await this.prisma.purchaseOrder.update({ where: { id }, data });
    } catch (e) {
      return null;
    }
  }

  async deleteCompraLogistica(id: string): Promise<{ deleted: boolean }> {
    try {
      await this.prisma.purchaseOrder.delete({ where: { id } });
      return { deleted: true };
    } catch (e) {
      return { deleted: false };
    }
  }
}
    return { deleted: true };
  }
}
