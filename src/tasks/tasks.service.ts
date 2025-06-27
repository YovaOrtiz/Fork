import { Injectable, HttpCode, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update.task.dto';

// Mock temporal para pruebas
const mockTasks = [
  {
    id: 1,
    title: 'Diseñar interfaz de usuario para módulo de proyectos',
    description: 'Crear mockups y prototipos para la nueva interfaz del módulo de proyectos, incluyendo wireframes y especificaciones de diseño.',
    status: 'in_progress',
    priority: 'high',
    assignedTo: 'María García',
    assignedBy: 'Carlos López',
    projectId: 1,
    dueDate: new Date().toISOString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    tags: ['diseño', 'ui/ux', 'frontend'],
    attachments: [],
    comments: [],
    estimatedHours: 16,
    actualHours: 12,
    subtasks: [],
  },
];

@Injectable()
export class TasksService {
  getTasks(filter: any) {
    // Aquí puedes aplicar filtros en el futuro
    return mockTasks;
  }

  getTask(id: number) {
    return mockTasks.find(t => t.id === id);
  }

  createTask(data: any) {
    const newTask = { id: mockTasks.length + 1, ...data };
    mockTasks.push(newTask);
    return newTask;
  }

  updateTask(id: number, data: any) {
    const idx = mockTasks.findIndex(t => t.id === id);
    if (idx === -1) return null;
    mockTasks[idx] = { ...mockTasks[idx], ...data };
    return mockTasks[idx];
  }

  deleteTask(id: number) {
    const idx = mockTasks.findIndex(t => t.id === id);
    if (idx === -1) return null;
    mockTasks.splice(idx, 1);
    return { deleted: true };
  }
}