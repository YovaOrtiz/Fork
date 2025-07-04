import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreateOrderDto, UpdateOrderDto, OrderStatus } from './dto/order.dto';
import { Order } from './entities/order.entity';
import { v4 as uuidv4 } from 'uuid';

@ApiTags('Comercial')
@Controller('comercial/orders')
export class OrdersController {
  private orders: Order[] = [];

  @Get()
  @ApiOperation({ summary: 'Obtener todos los pedidos' })
  findAll(): Order[] {
    return this.orders;
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un pedido por ID' })
  findOne(@Param('id') id: string): Order {
    return this.orders.find(o => o.id === id);
  }

  @Post()
  @ApiOperation({ summary: 'Crear un pedido' })
  create(@Body() dto: CreateOrderDto): Order {
    const total = dto.items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
    const order: Order = { ...dto, id: uuidv4(), createdAt: new Date().toISOString(), total };
    this.orders.push(order);
    return order;
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un pedido' })
  update(@Param('id') id: string, @Body() dto: UpdateOrderDto): Order {
    const idx = this.orders.findIndex(o => o.id === id);
    if (idx === -1) return null;
    const merged = { ...this.orders[idx], ...dto };
    const total = merged.items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
    this.orders[idx] = { ...merged, total };
    return this.orders[idx];
  }

  @Put(':id/status')
  @ApiOperation({ summary: 'Actualizar el estatus de un pedido' })
  updateStatus(@Param('id') id: string, @Body('status') status: OrderStatus): Order {
    const order = this.orders.find(o => o.id === id);
    if (!order) return null;
    order.status = status;
    return order;
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un pedido' })
  remove(@Param('id') id: string) {
    const idx = this.orders.findIndex(o => o.id === id);
    if (idx === -1) return { deleted: false };
    this.orders.splice(idx, 1);
    return { deleted: true };
  }
}
