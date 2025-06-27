import { Controller, Get, Post, Put, Delete, Param, Body, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update.task.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('tasks')
@ApiTags('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  @ApiOperation({ summary: 'Get all tasks' })
  @ApiResponse({ status: 200, description: 'Get all tasks' })
  @ApiResponse({ status: 404, description: 'Tasks not found' })
  @Get()
  @ApiOperation({ summary: 'Get all tasks' })
  @ApiResponse({ status: 200, description: 'Get all tasks' })
  @ApiResponse({ status: 404, description: 'Tasks not found' })
  getTasks(@Query() filter: any) {
    return this.tasksService.getTasks(filter);
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Get task by id' })
  @ApiResponse({ status: 200, description: 'Get task by id' })
  @ApiResponse({ status: 404, description: 'Task not found' })
  getTask(@Param('id') id: string) {
    return this.tasksService.getTask(parseInt(id));
  }

  @Post()
  @ApiOperation({ summary: 'Create a task' })
  @ApiResponse({ status: 201, description: 'Task created' })
  createTask(@Body() task: CreateTaskDto) {
    return this.tasksService.createTask(task);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a task' })
  @ApiResponse({ status: 200, description: 'Task updated' })
  updateTask(@Param('id') id: string, @Body() task: UpdateTaskDto) {
    return this.tasksService.updateTask(parseInt(id), task);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a task' })
  @ApiResponse({ status: 200, description: 'Task deleted' })
  deleteTask(@Param('id') id: string) {
    return this.tasksService.deleteTask(parseInt(id));
  }


}