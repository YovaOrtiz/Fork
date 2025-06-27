import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ComercialService } from './comercial.service';

@Controller('comercial')
export class ComercialController {
  constructor(private readonly comercialService: ComercialService) {}

  @Get()
  getComercial() {
    return this.comercialService.getComercial();
  }

  @Get(':id')
  getComercialById(@Param('id') id: string) {
    return this.comercialService.getComercialById(id);
  }

  @Post()
  createComercial(@Body() data: any) {
    return this.comercialService.createComercial(data);
  }

  @Put(':id')
  updateComercial(@Param('id') id: string, @Body() data: any) {
    return this.comercialService.updateComercial(id, data);
  }

  @Delete(':id')
  deleteComercial(@Param('id') id: string) {
    return this.comercialService.deleteComercial(id);
  }
}
