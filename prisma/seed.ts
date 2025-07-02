import { PrismaClient, ProjectStatus, ProjectPriority } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.area.deleteMany();
  await prisma.project.deleteMany();

  const projects = [
    {
      name: 'Plataforma E-commerce',
      client: 'Cliente A',
      description: 'Desarrollo de plataforma de ventas online.',
      startDate: new Date('2025-01-10'),
      expectedEndDate: new Date('2025-07-10'),
      priority: ProjectPriority.high,
      status: ProjectStatus.active,
      budget: 120000,
      salesPrice: 180000,
      profitability: 0.5,
      internalCost: 60000,
      overallProgress: 70,
      currentStage: 'Desarrollo',
      createdBy: 'admin',
      updatedBy: 'admin',
      areas: {
        create: [
          {
            name: 'Frontend',
            status: 'active',
            progress: 80,
            responsible: 'Dev1',
            dueDate: new Date('2025-06-15'),
            estimatedHours: 400,
            hoursWorked: 350,
          },
          {
            name: 'Backend',
            status: 'active',
            progress: 60,
            responsible: 'Dev2',
            dueDate: new Date('2025-07-01'),
            estimatedHours: 500,
            hoursWorked: 250,
          },
        ],
      },
    },
    {
      name: 'App Móvil',
      client: 'Cliente B',
      description: 'Aplicación móvil para servicios.',
      startDate: new Date('2025-02-01'),
      expectedEndDate: new Date('2025-05-20'),
      priority: ProjectPriority.critical,
      status: ProjectStatus.active,
      budget: 90000,
      salesPrice: 140000,
      profitability: 0.55,
      internalCost: 40000,
      overallProgress: 45,
      currentStage: 'QA',
      createdBy: 'admin',
      updatedBy: 'manager',
      areas: {
        create: [
          {
            name: 'API',
            status: 'active',
            progress: 50,
            responsible: 'Dev3',
            dueDate: new Date('2025-05-01'),
            estimatedHours: 300,
            hoursWorked: 150,
          },
        ],
      },
    },
    {
      name: 'Sistema ERP',
      client: 'Cliente C',
      description: 'Implementación de ERP.',
      startDate: new Date('2024-07-01'),
      expectedEndDate: new Date('2025-01-20'),
      priority: ProjectPriority.medium,
      status: ProjectStatus.completed,
      budget: 200000,
      salesPrice: 300000,
      profitability: 0.4,
      internalCost: 120000,
      overallProgress: 100,
      currentStage: 'Cierre',
      createdBy: 'admin',
      updatedBy: 'admin',
      areas: {
        create: [
          {
            name: 'Consultoría',
            status: 'completed',
            progress: 100,
            responsible: 'Consultor',
            dueDate: new Date('2025-01-10'),
            estimatedHours: 200,
            hoursWorked: 210,
          },
        ],
      },
    },
    {
      name: 'Rediseño Web',
      client: 'Cliente D',
      description: 'Rediseño de sitio web institucional.',
      startDate: new Date('2025-03-01'),
      expectedEndDate: new Date('2025-04-15'),
      priority: ProjectPriority.low,
      status: ProjectStatus.on_hold,
      budget: 40000,
      salesPrice: 60000,
      profitability: 0.35,
      internalCost: 25000,
      overallProgress: 20,
      currentStage: 'Diseño',
      createdBy: 'admin',
      updatedBy: 'admin',
      areas: {
        create: [
          {
            name: 'UI/UX',
            status: 'on_hold',
            progress: 20,
            responsible: 'Diseñador',
            dueDate: new Date('2025-04-10'),
            estimatedHours: 80,
            hoursWorked: 10,
          },
        ],
      },
    },
    {
      name: 'Integración CRM',
      client: 'Cliente E',
      description: 'Integración de CRM con sistemas internos.',
      startDate: new Date('2025-01-15'),
      expectedEndDate: new Date('2025-07-01'),
      priority: ProjectPriority.medium,
      status: ProjectStatus.active,
      budget: 60000,
      salesPrice: 90000,
      profitability: 0.33,
      internalCost: 40000,
      overallProgress: 55,
      currentStage: 'Integración',
      createdBy: 'admin',
      updatedBy: 'manager',
      areas: {
        create: [
          {
            name: 'Integraciones',
            status: 'active',
            progress: 60,
            responsible: 'Dev4',
            dueDate: new Date('2025-06-30'),
            estimatedHours: 150,
            hoursWorked: 90,
          },
        ],
      },
    },
  ];

  for (const p of projects) {
    await prisma.project.create({ data: p });
  }
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
