import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { SolicitudesService } from './solicitudes.service';

@Controller('solicitudes')
export class SolicitudesController {
  constructor(private readonly solicitudesService: SolicitudesService) {}

  @Get()
  getSolicitudes() {
    return this.solicitudesService.getSolicitudes();
  }

  @Get(':id')
  getSolicitudById(@Param('id') id: string) {
    return this.solicitudesService.getSolicitudById(id);
  }

  @Post()
  createSolicitud(@Body() data: any) {
    return this.solicitudesService.createSolicitud(data);
  }

  @Put(':id')
  updateSolicitud(@Param('id') id: string, @Body() data: any) {
    return this.solicitudesService.updateSolicitud(id, data);
  }

  @Delete(':id')
  deleteSolicitud(@Param('id') id: string) {
    return this.solicitudesService.deleteSolicitud(id);
  }
}
