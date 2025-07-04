import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreateLeadDto, UpdateLeadDto } from './dto/lead.dto';
import { Lead } from './entities/lead.entity';
import { v4 as uuidv4 } from 'uuid';

@ApiTags('Comercial')
@Controller('comercial/leads')
export class LeadsController {
  private leads: Lead[] = [];

  @Get()
  @ApiOperation({ summary: 'Obtener todos los leads' })
  findAll(): Lead[] {
    return this.leads;
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un lead por ID' })
  findOne(@Param('id') id: string): Lead {
    return this.leads.find(l => l.id === id);
  }

  @Post()
  @ApiOperation({ summary: 'Crear un lead' })
  create(@Body() dto: CreateLeadDto): Lead {
    const lead: Lead = { ...dto, id: uuidv4(), createdAt: new Date().toISOString() };
    this.leads.push(lead);
    return lead;
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un lead' })
  update(@Param('id') id: string, @Body() dto: UpdateLeadDto): Lead {
    const idx = this.leads.findIndex(l => l.id === id);
    if (idx === -1) return null;
    this.leads[idx] = { ...this.leads[idx], ...dto };
    return this.leads[idx];
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un lead' })
  remove(@Param('id') id: string) {
    const idx = this.leads.findIndex(l => l.id === id);
    if (idx === -1) return { deleted: false };
    this.leads.splice(idx, 1);
    return { deleted: true };
  }
}
