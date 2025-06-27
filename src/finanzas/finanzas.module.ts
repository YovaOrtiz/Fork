import { Module } from '@nestjs/common';
import { FinanzasController } from './finanzas.controller';
import { FinanzasService } from './finanzas.service';

@Module({
  controllers: [FinanzasController],
  providers: [FinanzasService],
})
export class FinanzasModule {}
