import { Controller, Get } from '@nestjs/common';
import { DashboardService } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get('kpis')
  getKpis() {
    return this.dashboardService.getKpis();
  }

  @Get('stats')
  getStats() {
    return this.dashboardService.getStats();
  }

  @Get('top-projects')
  getTopProjects() {
    return this.dashboardService.getTopProjects();
  }

  @Get('recent-activity')
  getRecentActivity() {
    return this.dashboardService.getRecentActivity();
  }

  @Get('area-workload')
  getAreaWorkload() {
    return this.dashboardService.getAreaWorkload();
  }

  @Get('sales-metrics')
  getSalesMetrics() {
    return this.dashboardService.getSalesMetrics();
  }
}
