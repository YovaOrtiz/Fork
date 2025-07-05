import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiOperation, ApiParam, ApiBody } from '@nestjs/swagger';
import { ComprasLogisticaService } from './compras-logistica.service';
import { PurchaseOrderDto } from './dto/purchase-order.dto';

@ApiTags('PurchaseOrders')
@Controller('purchase-orders')
export class PurchaseOrdersController {
  constructor(private readonly comprasLogisticaService: ComprasLogisticaService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener todos los pedidos de compra' })
  @ApiResponse({ status: 200, description: 'Lista de pedidos de compra' })
  getAll() {
    return this.comprasLogisticaService.getComprasLogistica();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un pedido de compra por ID' })
  @ApiParam({ name: 'id', type: String })
  @ApiResponse({ status: 200, description: 'Pedido encontrado' })
  @ApiResponse({ status: 404, description: 'Pedido no encontrado' })
  getById(@Param('id') id: string) {
    return this.comprasLogisticaService.getCompraLogisticaById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Crear un pedido de compra' })
  @ApiBody({ type: PurchaseOrderDto })
  @ApiResponse({ status: 201, description: 'Pedido creado' })
  @ApiResponse({ status: 400, description: 'Error de validación' })
  create(@Body() data: PurchaseOrderDto) {
    return this.comprasLogisticaService.createCompraLogistica(data);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un pedido de compra' })
  @ApiParam({ name: 'id', type: String })
  @ApiBody({ type: PurchaseOrderDto })
  @ApiResponse({ status: 200, description: 'Pedido actualizado' })
  @ApiResponse({ status: 400, description: 'Error de validación' })
  @ApiResponse({ status: 404, description: 'Pedido no encontrado' })
  update(@Param('id') id: string, @Body() data: PurchaseOrderDto) {
    return this.comprasLogisticaService.updateCompraLogistica(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un pedido de compra' })
  @ApiParam({ name: 'id', type: String })
  @ApiResponse({ status: 200, description: 'Pedido eliminado' })
  @ApiResponse({ status: 404, description: 'Pedido no encontrado' })
  delete(@Param('id') id: string) {
    return this.comprasLogisticaService.deleteCompraLogistica(id);
  }
}
