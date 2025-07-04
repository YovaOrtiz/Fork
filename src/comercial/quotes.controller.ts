import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreateQuoteDto, UpdateQuoteDto, QuoteStatus } from './dto/quote.dto';
import { Quote } from './entities/quote.entity';
import { v4 as uuidv4 } from 'uuid';

@ApiTags('Comercial')
@Controller('comercial/quotes')
export class QuotesController {
  private quotes: Quote[] = [];

  @Get()
  @ApiOperation({ summary: 'Obtener todas las cotizaciones' })
  findAll(): Quote[] {
    return this.quotes;
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una cotización por ID' })
  findOne(@Param('id') id: string): Quote {
    return this.quotes.find(q => q.id === id);
  }

  @Post()
  @ApiOperation({ summary: 'Crear una cotización' })
  create(@Body() dto: CreateQuoteDto): Quote {
    const total = dto.items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
    const quote: Quote = { ...dto, id: uuidv4(), total, createdAt: new Date().toISOString() };
    this.quotes.push(quote);
    return quote;
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar una cotización' })
  update(@Param('id') id: string, @Body() dto: UpdateQuoteDto): Quote {
    const idx = this.quotes.findIndex(q => q.id === id);
    if (idx === -1) return null;
    this.quotes[idx] = { ...this.quotes[idx], ...dto };
    return this.quotes[idx];
  }

  @Put(':id/status')
  @ApiOperation({ summary: 'Actualizar el estatus de una cotización' })
  updateStatus(@Param('id') id: string, @Body('status') status: QuoteStatus): Quote {
    const quote = this.quotes.find(q => q.id === id);
    if (!quote) return null;
    quote.status = status;
    if (status === QuoteStatus.ENVIADA) quote.sentAt = new Date().toISOString();
    if (status === QuoteStatus.ACEPTADA) quote.approvedAt = new Date().toISOString();
    if (status === QuoteStatus.RECHAZADA) quote.rejectedAt = new Date().toISOString();
    return quote;
  }

  @Get(':id/pdf')
  @ApiOperation({ summary: 'Obtener PDF mock de la cotización' })
  getPdf(@Param('id') id: string) {
    return { url: `https://fakepdf.com/quote/${id}.pdf` };
  }

  @Post(':id/convert-to-order')
  @ApiOperation({ summary: 'Convertir cotización a pedido (mock)' })
  convertToOrder(@Param('id') id: string) {
    const quote = this.quotes.find(q => q.id === id);
    if (!quote) return null;
    return { orderId: uuidv4(), fromQuoteId: id, createdAt: new Date().toISOString() };
  }
}
