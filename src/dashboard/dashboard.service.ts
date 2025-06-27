import { Injectable } from '@nestjs/common';

@Injectable()
export class DashboardService {
  getDashboard() {
    // Mock de KPIs y resumen
    return {
      totalUsers: 15,
      totalProjects: 7,
      totalTasks: 34,
      completedTasks: 18,
      pendingTasks: 10,
      inProgressTasks: 6,
      notifications: 4,
      lastLogin: '2025-06-24T19:55:00-07:00',
      systemStatus: 'OK',
    };
  }
}
