import { AxiosResponse } from 'axios';
import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from 'src/common/dtos/tasks/tasks.dto';
import { ApiTags, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('tasks')
@Controller('tasks')
export class TasksController {
  constructor(private readonly _tasksService: TasksService) {}

  @Get()
  findAll(): Promise<AxiosResponse<any>> {
    return this._tasksService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: String })
  findOne(@Param('id') id: string): Promise<AxiosResponse<any>> {
    return this._tasksService.findOne(id);
  }

  @Post()
  @ApiBody({ type: CreateTaskDto })
  create(@Body() createTaskDto: CreateTaskDto): Promise<AxiosResponse<any>> {
    return this._tasksService.create(createTaskDto);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', type: String })
  remove(@Param('id') id: string): Promise<AxiosResponse<any>> {
    return this._tasksService.remove(id);
  }
}
