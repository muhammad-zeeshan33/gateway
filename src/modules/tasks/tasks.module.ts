import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { DataService } from 'src/common/http/data.service';
import { ErrorDataService } from 'src/common/http/error-data.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [TasksController],
  providers: [TasksService, DataService, ErrorDataService],
})
export class TasksModule {}
