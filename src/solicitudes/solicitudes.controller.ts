import { Controller, Get, Post, Put, Delete, Param, Body, Query, HttpException, HttpStatus } from '@nestjs/common';
import { SolicitudesService } from './solicitudes.service';
import { CreateSolicitudSchema, CreateComentarioSchema, FilterSolicitudesSchema, SolicitudStatus } from './dto/solicitud.dto';

@Controller('solicitudes')
export class SolicitudesController {
  constructor(private readonly solicitudesService: SolicitudesService) {}

  @Get()
  getSolicitudes(@Query() query: any) {
    if (Object.keys(query).length === 0) {
      return this.solicitudesService.getSolicitudes();
    }
    const parsed = FilterSolicitudesSchema.safeParse(query);
    if (!parsed.success) throw new HttpException(parsed.error.format(), HttpStatus.BAD_REQUEST);
    return this.solicitudesService.getSolicitudesFiltradas(parsed.data);
  }

  @Get(':id')
  getSolicitudById(@Param('id') id: string) {
    return this.solicitudesService.getSolicitudById(id);
  }

  @Post()
  createSolicitud(@Body() data: any) {
    const parsed = CreateSolicitudSchema.safeParse(data);
    if (!parsed.success) throw new HttpException(parsed.error.format(), HttpStatus.BAD_REQUEST);
    return this.solicitudesService.createSolicitud(parsed.data);
  }

  @Put(':id')
  updateSolicitud(@Param('id') id: string, @Body() data: any) {
    return this.solicitudesService.updateSolicitud(id, data);
  }

  @Delete(':id')
  deleteSolicitud(@Param('id') id: string) {
    return this.solicitudesService.deleteSolicitud(id);
  }

  // --- Comentarios ---
  @Post(':id/comentarios')
  addComentario(@Param('id') id: string, @Body() data: any) {
    const parsed = CreateComentarioSchema.safeParse(data);
    if (!parsed.success) throw new HttpException(parsed.error.format(), HttpStatus.BAD_REQUEST);
    return this.solicitudesService.addComentario(id, parsed.data);
  }

  @Get(':id/comentarios')
  getComentarios(@Param('id') id: string) {
    return this.solicitudesService.getComentarios(id);
  }

  // --- Historial ---
  @Get('/historial')
  getHistorial(@Query('userId') userId?: string, @Query('area') area?: string) {
    return this.solicitudesService.getHistorial({ userId, area });
  }

  // --- Actualizar estado ---
  @Put(':id/estado')
  updateStatus(@Param('id') id: string, @Body() body: any) {
    const statusSchema = SolicitudStatus;
    const parsed = statusSchema.safeParse(body.status);
    if (!parsed.success) throw new HttpException(parsed.error.format(), HttpStatus.BAD_REQUEST);
    const updated = this.solicitudesService.updateStatus(id, parsed.data);
    if (!updated) throw new HttpException('Solicitud no encontrada', HttpStatus.NOT_FOUND);
    return updated;
  }
}
