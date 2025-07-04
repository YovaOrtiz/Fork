import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreatePriceDto, UpdatePriceDto } from './dto/price.dto';
import { Price } from './entities/price.entity';
import { v4 as uuidv4 } from 'uuid';

@ApiTags('Comercial')
@Controller('comercial/prices')
export class PricesController {
  private prices: Price[] = [];

  @Get()
  @ApiOperation({ summary: 'Obtener todos los precios' })
  findAll(): Price[] {
    return this.prices;
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un precio por ID' })
  findOne(@Param('id') id: string): Price {
    return this.prices.find(p => p.id === id);
  }

  @Post()
  @ApiOperation({ summary: 'Crear un precio' })
  create(@Body() dto: CreatePriceDto): Price {
    const price: Price = { ...dto, id: uuidv4(), lastUpdated: new Date().toISOString() };
    this.prices.push(price);
    return price;
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un precio' })
  update(@Param('id') id: string, @Body() dto: UpdatePriceDto): Price {
    const idx = this.prices.findIndex(p => p.id === id);
    if (idx === -1) return null;
    this.prices[idx] = { ...this.prices[idx], ...dto, lastUpdated: new Date().toISOString() };
    return this.prices[idx];
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un precio' })
  remove(@Param('id') id: string) {
    const idx = this.prices.findIndex(p => p.id === id);
    if (idx === -1) return { deleted: false };
    this.prices.splice(idx, 1);
    return { deleted: true };
  }
}
