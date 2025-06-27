import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { BitacoraCambiosService } from './bitacora-cambios.service';

@Controller('bitacora-cambios')
export class BitacoraCambiosController {
  constructor(private readonly bitacoraCambiosService: BitacoraCambiosService) {}

  @Get()
  getBitacora() {
    return this.bitacoraCambiosService.getBitacora();
  }

  @Get(':id')
  getCambioById(@Param('id') id: string) {
    return this.bitacoraCambiosService.getCambioById(id);
  }

  @Post()
  createCambio(@Body() data: any) {
    return this.bitacoraCambiosService.createCambio(data);
  }

  @Put(':id')
  updateCambio(@Param('id') id: string, @Body() data: any) {
    return this.bitacoraCambiosService.updateCambio(id, data);
  }

  @Delete(':id')
  deleteCambio(@Param('id') id: string) {
    return this.bitacoraCambiosService.deleteCambio(id);
  }
}
