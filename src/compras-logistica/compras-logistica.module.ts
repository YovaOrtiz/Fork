import { Module } from '@nestjs/common';
import { ComprasLogisticaController } from './compras-logistica.controller';
import { ComprasLogisticaService } from './compras-logistica.service';

@Module({
  controllers: [ComprasLogisticaController],
  providers: [ComprasLogisticaService],
})
export class ComprasLogisticaModule {}
