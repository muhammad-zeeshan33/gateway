import { Injectable } from '@nestjs/common';
import { LoginDto } from 'src/common/dtos/auth/loginDto.dto';
import { CreateUserDto } from 'src/common/dtos/users/createUserDto.dto';
import { firstValueFrom } from 'rxjs';
import { DataService } from 'src/common/http/data.service';
import { AxiosResponse } from 'axios';
import { UpdatePasswordDto } from 'src/common/dtos/users/updatePasswordDto.dto';

@Injectable()
export class AuthService {
  constructor(private readonly _dataService: DataService) {}

  private readonly _baseURL = process.env.AUTH_MICRO_BASE_URL;

  login(loginDto: LoginDto): Promise<AxiosResponse<any>> {
    return firstValueFrom(
      this._dataService.post(this._baseURL + '/login', loginDto),
    );
  }

  register(createUserDto: CreateUserDto): Promise<AxiosResponse<any>> {
    return firstValueFrom(
      this._dataService.post(this._baseURL + '/register', createUserDto),
    );
  }

  updatePassword(
    updatePasswordDto: UpdatePasswordDto,
    req: any,
  ): Promise<AxiosResponse<any>> {
    return firstValueFrom(
      this._dataService.post(
        this._baseURL + '/updatePassword',
        updatePasswordDto,
        req,
      ),
    );
  }
}
