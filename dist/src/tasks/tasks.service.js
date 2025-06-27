"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
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
let TasksService = class TasksService {
    getTasks(filter) {
        return mockTasks;
    }
    getTask(id) {
        return mockTasks.find(t => t.id === id);
    }
    createTask(data) {
        const newTask = { id: mockTasks.length + 1, ...data };
        mockTasks.push(newTask);
        return newTask;
    }
    updateTask(id, data) {
        const idx = mockTasks.findIndex(t => t.id === id);
        if (idx === -1)
            return null;
        mockTasks[idx] = { ...mockTasks[idx], ...data };
        return mockTasks[idx];
    }
    deleteTask(id) {
        const idx = mockTasks.findIndex(t => t.id === id);
        if (idx === -1)
            return null;
        mockTasks.splice(idx, 1);
        return { deleted: true };
    }
};
exports.TasksService = TasksService;
exports.TasksService = TasksService = __decorate([
    (0, common_1.Injectable)()
], TasksService);
//# sourceMappingURL=tasks.service.js.map