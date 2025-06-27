import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update.task.dto';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    getTasks(filter: any): {
        id: number;
        title: string;
        description: string;
        status: string;
        priority: string;
        assignedTo: string;
        assignedBy: string;
        projectId: number;
        dueDate: string;
        createdAt: string;
        updatedAt: string;
        tags: string[];
        attachments: any[];
        comments: any[];
        estimatedHours: number;
        actualHours: number;
        subtasks: any[];
    }[];
    getTask(id: string): {
        id: number;
        title: string;
        description: string;
        status: string;
        priority: string;
        assignedTo: string;
        assignedBy: string;
        projectId: number;
        dueDate: string;
        createdAt: string;
        updatedAt: string;
        tags: string[];
        attachments: any[];
        comments: any[];
        estimatedHours: number;
        actualHours: number;
        subtasks: any[];
    };
    createTask(task: CreateTaskDto): any;
    updateTask(id: string, task: UpdateTaskDto): {
        id: number;
        title: string;
        description: string;
        status: string;
        priority: string;
        assignedTo: string;
        assignedBy: string;
        projectId: number;
        dueDate: string;
        createdAt: string;
        updatedAt: string;
        tags: string[];
        attachments: any[];
        comments: any[];
        estimatedHours: number;
        actualHours: number;
        subtasks: any[];
    };
    deleteTask(id: string): {
        deleted: boolean;
    };
}
