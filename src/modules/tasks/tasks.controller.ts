import { AxiosResponse } from 'axios';
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from 'src/common/dtos/tasks/tasks.dto';
import { ApiTags, ApiParam, ApiBody } from '@nestjs/swagger';
import { AuthGuard } from 'src/guards/auth.guard';
@ApiTags('tasks')
@Controller('tasks')
export class TasksController {
  constructor(private readonly _tasksService: TasksService) {}

  @UseGuards(AuthGuard)
  @Get()
  findAll(): Promise<AxiosResponse<any>> {
    return this._tasksService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  @ApiParam({ name: 'id', type: String })
  findOne(@Param('id') id: string): Promise<AxiosResponse<any>> {
    return this._tasksService.findOne(id);
  }

  @UseGuards(AuthGuard)
  @Post()
  @ApiBody({ type: CreateTaskDto })
  create(@Body() createTaskDto: CreateTaskDto): Promise<AxiosResponse<any>> {
    return this._tasksService.create(createTaskDto);
  }

  @UseGuards(AuthGuard)
  @Post(':id')
  @ApiParam({ name: 'id', type: String })
  @ApiBody({ type: CreateTaskDto })
  update(
    @Param('id') id: string,
    @Body() createTaskDto: CreateTaskDto,
  ): Promise<AxiosResponse<any>> {
    return this._tasksService.update(id, createTaskDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  @ApiParam({ name: 'id', type: String })
  remove(@Param('id') id: string): Promise<AxiosResponse<any>> {
    return this._tasksService.remove(id);
  }
}
