import { Module } from '@nestjs/common';
import { BitacoraCambiosController } from './bitacora-cambios.controller';
import { BitacoraCambiosService } from './bitacora-cambios.service';

@Module({
  controllers: [BitacoraCambiosController],
  providers: [BitacoraCambiosService],
})
export class BitacoraCambiosModule {}
