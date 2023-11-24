import { AxiosResponse } from 'axios';
import { Controller, Post, Get, Delete, Body, Param } from '@nestjs/common';
import { ApiTags, ApiParam, ApiBody } from '@nestjs/swagger';
import { CreateUserDto } from 'src/common/dtos/users/createUserDto.dto';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly _usersService: UsersService) {}

  @Get()
  findAll(): Promise<AxiosResponse<any>> {
    return this._usersService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: String })
  findOne(@Param('id') id: string): Promise<AxiosResponse<any>> {
    return this._usersService.findOne(id);
  }

  @Post()
  @ApiBody({ type: CreateUserDto })
  create(@Body() createUserDto: CreateUserDto): Promise<AxiosResponse<any>> {
    return this._usersService.create(createUserDto);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', type: String })
  remove(@Param('id') id: string): Promise<AxiosResponse<any>> {
    return this._usersService.remove(id);
  }
}
