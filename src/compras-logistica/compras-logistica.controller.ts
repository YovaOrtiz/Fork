import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ComprasLogisticaService } from './compras-logistica.service';

@Controller('compras-logistica')
export class ComprasLogisticaController {
  constructor(private readonly comprasLogisticaService: ComprasLogisticaService) {}

  @Get()
  getComprasLogistica() {
    return this.comprasLogisticaService.getComprasLogistica();
  }

  @Get(':id')
  getCompraLogisticaById(@Param('id') id: string) {
    return this.comprasLogisticaService.getCompraLogisticaById(id);
  }

  @Post()
  createCompraLogistica(@Body() data: any) {
    return this.comprasLogisticaService.createCompraLogistica(data);
  }

  @Put(':id')
  updateCompraLogistica(@Param('id') id: string, @Body() data: any) {
    return this.comprasLogisticaService.updateCompraLogistica(id, data);
  }

  @Delete(':id')
  deleteCompraLogistica(@Param('id') id: string) {
    return this.comprasLogisticaService.deleteCompraLogistica(id);
  }
}
