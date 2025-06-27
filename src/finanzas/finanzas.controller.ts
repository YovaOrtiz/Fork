import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { FinanzasService } from './finanzas.service';

@Controller('finanzas')
export class FinanzasController {
  constructor(private readonly finanzasService: FinanzasService) {}

  @Get()
  getFinanzas() {
    return this.finanzasService.getFinanzas();
  }

  @Get(':id')
  getFinanzaById(@Param('id') id: string) {
    return this.finanzasService.getFinanzaById(id);
  }

  @Post()
  createFinanza(@Body() data: any) {
    return this.finanzasService.createFinanza(data);
  }

  @Put(':id')
  updateFinanza(@Param('id') id: string, @Body() data: any) {
    return this.finanzasService.updateFinanza(id, data);
  }

  @Delete(':id')
  deleteFinanza(@Param('id') id: string) {
    return this.finanzasService.deleteFinanza(id);
  }
}
