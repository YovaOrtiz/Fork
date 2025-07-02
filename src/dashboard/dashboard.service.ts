import { Injectable } from '@nestjs/common';
import { ProjectsService } from '../projects/projects.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class DashboardService {
  constructor(private projectsService: ProjectsService) {}

  // 1. KPIs
  async getKpis() {
    const projects = await this.projectsService.getProjects();
    const now = new Date();
    const kpis = {
      active: projects.filter(p => p.status === 'active').length,
      atRisk: projects.filter(p => (p.overallProgress ?? 100) < 50).length,
      overdue: projects.filter(p => {
        const expectedEnd = p.expectedEndDate ? new Date(p.expectedEndDate) : null;
        return expectedEnd && expectedEnd < now && p.status !== 'completed';
      }).length,
      completed: projects.filter(p => p.status === 'completed').length,
    };
    return kpis;
  }

  // 2. Stats
  async getStats() {
    const projects = await this.projectsService.getProjects();
    const totalBudget = projects.reduce((sum, p) => sum + (p.budget ?? 0), 0);
    const totalSales = projects.reduce((sum, p) => sum + (p.salesPrice ?? 0), 0);
    const totalProfit = projects.reduce((sum, p) => sum + ((p.salesPrice ?? 0) - (p.budget ?? 0)), 0);
    const margin = totalSales > 0 ? (totalProfit / totalSales) * 100 : 0;
    // Metas simuladas
    const goals = {
      annualSales: 1000000,
      annualMargin: 25,
      annualProfit: 250000,
    };
    return {
      totalBudget,
      totalSales,
      totalProfit,
      margin,
      goals,
    };
  }

  // 3. Top Projects
  async getTopProjects() {
    const projects = await this.projectsService.getProjects();
    // Suponiendo que priority es un enum/string, ajusta si es necesario
    const top = [...projects]
      .sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0))
      .slice(0, 5)
      .map(p => {
        const now = new Date();
        const isOverdue = p.expectedEndDate && new Date(p.expectedEndDate) < now && p.status !== 'completed';
        const isAtRisk = (p.overallProgress ?? 100) < 50;
        return {
          name: p.name,
          client: p.client,
          description: p.description,
          progress: p.overallProgress,
          status: p.status,
          priority: p.priority,
          isOverdue,
          isAtRisk,
        };
      });
    return top;
  }

  // 4. Recent Activity
  async getRecentActivity() {
    const projects = await this.projectsService.getProjects();
    const recent = [...projects]
      .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
      .slice(0, 5)
      .map(p => {
        // Simulación de usuario y tipo de actividad
        const user = p.updatedBy ?? p.createdBy ?? 'user';
        let activityType = 'Actualización';
        if (p.status === 'completed') activityType = 'Finalización';
        else if ((p.overallProgress ?? 0) < 50) activityType = 'Riesgo';
        else if (p.status === 'active') activityType = 'Progreso';
        return {
          user,
          projectName: p.name,
          activityType,
          description: `El proyecto ${p.name} fue actualizado.`,
          date: p.updatedAt,
          areas: (p.areas ?? []).slice(0, 2).map(a => a.name),
        };
      });
    return recent;
  }

  // 5. Area Workload
  async getAreaWorkload() {
    const projects = await this.projectsService.getProjects();
    const areaMap: Record<string, { count: number; total: number; totalWorked: number; }> = {};
    projects.forEach(p => {
      (p.areas ?? []).forEach(a => {
        if (!areaMap[a.name]) areaMap[a.name] = { count: 0, total: 0, totalWorked: 0 };
        areaMap[a.name].count += 1;
        areaMap[a.name].total += a.estimatedHours ?? 0;
        areaMap[a.name].totalWorked += a.hoursWorked ?? 0;
      });
    });
    return Object.entries(areaMap).map(([name, v]) => ({
      area: name,
      projectCount: v.count,
      workload: v.total > 0 ? Math.round((v.totalWorked / v.total) * 100) : 0,
    }));
  }

  // 6. Sales Metrics
  async getSalesMetrics() {
    // Simulación de ventas y metas
    return {
      byExecutive: [
        { name: 'Ejecutivo 1', sales: 120000 },
        { name: 'Ejecutivo 2', sales: 95000 },
        { name: 'Ejecutivo 3', sales: 80000 },
      ],
      byNiche: [
        { niche: 'Retail', sales: 100000 },
        { niche: 'Industrial', sales: 90000 },
        { niche: 'Servicios', sales: 105000 },
      ],
      byQuarter: [
        { quarter: 'Q1', sales: 75000 },
        { quarter: 'Q2', sales: 85000 },
        { quarter: 'Q3', sales: 95000 },
        { quarter: 'Q4', sales: 110000 },
      ],
      byMonth: [
        { month: 'Enero', sales: 25000 },
        { month: 'Febrero', sales: 30000 },
        { month: 'Marzo', sales: 20000 },
        { month: 'Abril', sales: 35000 },
        { month: 'Mayo', sales: 30000 },
        { month: 'Junio', sales: 35000 },
      ],
      byBusinessUnit: [
        { unit: 'Unidad 1', sales: 120000 },
        { unit: 'Unidad 2', sales: 95000 },
      ],
      goalCompletion: 87,
    };
  }
}
