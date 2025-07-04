import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';


@Controller('comercial')
export class ComercialController {


  @Get()
  getComercial() {
    // Aquí irá la lógica modularizada para leads, quotes, etc.
  }

  @Get(':id')
  getComercialById(@Param('id') id: string) {
    // Aquí irá la lógica modularizada para leads, quotes, etc.
  }

  @Post()
  createComercial(@Body() data: any) {
    // Aquí irá la lógica modularizada para leads, quotes, etc.
  }

  @Put(':id')
  updateComercial(@Param('id') id: string, @Body() data: any) {
    // Aquí irá la lógica modularizada para leads, quotes, etc.
  }

  @Delete(':id')
  deleteComercial(@Param('id') id: string) {
    // Aquí irá la lógica modularizada para leads, quotes, etc.
  }
}
