import { Controller, Get, Post, Put, Delete, Param, Body, Query } from '@nestjs/common';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  getProjects(@Query() filters: any) {
    return this.projectsService.getProjects(filters);
  }

  @Get(':id')
  getProjectById(@Param('id') id: string) {
    return this.projectsService.getProjectById(id);
  }

  @Post()
  createProject(@Body() data: any) {
    return this.projectsService.createProject(data);
  }

  @Put(':id')
  updateProject(@Param('id') id: string, @Body() data: any) {
    return this.projectsService.updateProject(id, data);
  }

  @Delete(':id')
  deleteProject(@Param('id') id: string) {
    return this.projectsService.deleteProject(id);
  }
}
