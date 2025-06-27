import { Controller, Get, Put, Body, Param } from '@nestjs/common';
import { ConfiguracionService } from './configuracion.service';

@Controller('configuracion')
export class ConfiguracionController {
  constructor(private readonly configuracionService: ConfiguracionService) {}

  @Get(':id')
  getConfiguracion(@Param('id') id: string) {
    return this.configuracionService.getConfiguracion(id);
  }

  @Put(':id')
  updateConfiguracion(@Param('id') id: string, @Body() data: any) {
    return this.configuracionService.updateConfiguracion(id, data);
  }
}
