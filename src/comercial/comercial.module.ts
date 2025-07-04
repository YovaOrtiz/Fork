import { Module } from '@nestjs/common';
import { LeadsController } from './leads.controller';
import { QuotesController } from './quotes.controller';
import { OrdersController } from './orders.controller';
import { PricesController } from './prices.controller';
import { AutomationController } from './automation.controller';
import { OverviewController } from './overview.controller';

@Module({
  controllers: [
    LeadsController,
    QuotesController,
    OrdersController,
    PricesController,
    AutomationController,
    OverviewController,
  ],
  providers: [],
})
export class ComercialModule {}
