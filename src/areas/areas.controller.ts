import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { AreasService } from './areas.service';

@Controller('areas')
export class AreasController {
  constructor(private readonly areasService: AreasService) {}

  @Get()
  getAreas() {
    return this.areasService.getAreas();
  }

  @Get(':id')
  getAreaById(@Param('id') id: string) {
    return this.areasService.getAreaById(id);
  }

  @Post()
  createArea(@Body() data: any) {
    return this.areasService.createArea(data);
  }

  @Put(':id')
  updateArea(@Param('id') id: string, @Body() data: any) {
    return this.areasService.updateArea(id, data);
  }

  @Delete(':id')
  deleteArea(@Param('id') id: string) {
    return this.areasService.deleteArea(id);
  }
}
