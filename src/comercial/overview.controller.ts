import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ComercialOverviewDto } from './dto/overview.dto';

@ApiTags('Comercial')
@Controller('comercial/overview')
export class OverviewController {
  @Get()
  @ApiOperation({ summary: 'KPIs y gráficas del módulo comercial' })
  getOverview(): ComercialOverviewDto {
    const totalQuotes = Math.floor(Math.random() * 100);
    const totalOrders = Math.floor(Math.random() * 80);
    const projectedProfit = Math.floor(Math.random() * 100000);
    const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const quotesPerMonth = months.map(() => Math.floor(Math.random() * 10) + 1);
    const ordersPerMonth = months.map(() => Math.floor(Math.random() * 8) + 1);
    return { totalQuotes, totalOrders, projectedProfit, quotesPerMonth, ordersPerMonth, months };
  }
}
