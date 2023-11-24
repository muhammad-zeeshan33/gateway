import { Injectable } from '@nestjs/common';
import { DataService } from 'src/common/http/data.service';
import { CreateUserDto } from 'src/common/dtos/users/createUserDto.dto';
import { AxiosResponse } from 'axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class UsersService {
  constructor(private readonly _dataService: DataService) {}

  private readonly _baseURL = process.env.USER_MICRO_BASE_URL + '/users';

  findAll(): Promise<AxiosResponse<any>> {
    // return this._baseURL as any;
    return firstValueFrom(this._dataService.get(this._baseURL));
  }

  findOne(id: string): Promise<AxiosResponse<any>> {
    return firstValueFrom(this._dataService.get(this._baseURL + '/' + id));
  }

  create(createUserDto: CreateUserDto): Promise<AxiosResponse<any>> {
    return firstValueFrom(this._dataService.post(this._baseURL, createUserDto));
  }

  remove(id: string): Promise<AxiosResponse<any>> {
    return firstValueFrom(this._dataService.delete(this._baseURL + '/' + id));
  }
}
