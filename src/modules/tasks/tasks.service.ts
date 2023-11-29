import { firstValueFrom } from 'rxjs';
import { Injectable } from '@nestjs/common';
import { DataService } from 'src/common/http/data.service';
import { CreateTaskDto } from 'src/common/dtos/tasks/tasks.dto';
import { AxiosResponse } from 'axios';

@Injectable()
export class TasksService {
  constructor(private readonly _dataService: DataService) {}
  private readonly _baseURL = process.env.TASK_MICRO_BASE_URL + '/tasks';

  findAll(): Promise<AxiosResponse<any>> {
    return firstValueFrom(this._dataService.get(this._baseURL));
  }

  findOne(id: string): Promise<AxiosResponse<any>> {
    return firstValueFrom(this._dataService.get(this._baseURL + '/' + id));
  }

  create(createTaskDto: CreateTaskDto): Promise<AxiosResponse<any>> {
    return firstValueFrom(this._dataService.post(this._baseURL, createTaskDto));
  }

  update(
    id: string,
    createTaskDto: CreateTaskDto,
  ): Promise<AxiosResponse<any>> {
    return firstValueFrom(
      this._dataService.post(this._baseURL + '/' + id, createTaskDto),
    );
  }

  remove(id: string): Promise<AxiosResponse<any>> {
    return firstValueFrom(this._dataService.delete(this._baseURL + '/' + id));
  }
}
