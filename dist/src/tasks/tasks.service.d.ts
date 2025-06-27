export declare class TasksService {
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
    getTask(id: number): {
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
    createTask(data: any): any;
    updateTask(id: number, data: any): {
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
    deleteTask(id: number): {
        deleted: boolean;
    };
}
