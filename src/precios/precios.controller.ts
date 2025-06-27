import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { PreciosService } from './precios.service';

@Controller('precios')
export class PreciosController {
  constructor(private readonly preciosService: PreciosService) {}

  @Get()
  getPrecios() {
    return this.preciosService.getPrecios();
  }

  @Get(':id')
  getPrecioById(@Param('id') id: string) {
    return this.preciosService.getPrecioById(id);
  }

  @Post()
  createPrecio(@Body() data: any) {
    return this.preciosService.createPrecio(data);
  }

  @Put(':id')
  updatePrecio(@Param('id') id: string, @Body() data: any) {
    return this.preciosService.updatePrecio(id, data);
  }

  @Delete(':id')
  deletePrecio(@Param('id') id: string) {
    return this.preciosService.deletePrecio(id);
  }
}
