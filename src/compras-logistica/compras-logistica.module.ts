import { Module } from '@nestjs/common';
import { PurchaseOrdersController } from './compras-logistica.controller';
import { ComprasLogisticaService } from './compras-logistica.service';

@Module({
  controllers: [PurchaseOrdersController],
  providers: [ComprasLogisticaService],
})
export class ComprasLogisticaModule {}
