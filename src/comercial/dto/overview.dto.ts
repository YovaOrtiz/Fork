import { ApiProperty } from '@nestjs/swagger';

export class ComercialOverviewDto {
  @ApiProperty() totalQuotes: number;
  @ApiProperty() totalOrders: number;
  @ApiProperty() projectedProfit: number;
  @ApiProperty({ type: [Number] }) quotesPerMonth: number[];
  @ApiProperty({ type: [Number] }) ordersPerMonth: number[];
  @ApiProperty({ type: [String] }) months: string[];
}
