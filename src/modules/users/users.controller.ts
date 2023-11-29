import { UpdateUserDto } from './../../common/dtos/users/updateUserDto.dt';
import { UpdatePasswordDto } from './../../common/dtos/users/updatePasswordDto.dto';
import { AxiosResponse } from 'axios';
import {
  Controller,
  Post,
  Get,
  Delete,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiParam, ApiBody } from '@nestjs/swagger';
import { CreateUserDto } from 'src/common/dtos/users/createUserDto.dto';
import { UsersService } from './users.service';
import { AuthGuard } from 'src/guards/auth.guard';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly _usersService: UsersService) {}

  @UseGuards(AuthGuard)
  @Get()
  findAll(): Promise<AxiosResponse<any>> {
    return this._usersService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  @ApiParam({ name: 'id', type: String })
  findOne(@Param('id') id: string): Promise<AxiosResponse<any>> {
    return this._usersService.findOne(id);
  }

  @UseGuards(AuthGuard)
  @Post(':id')
  @ApiParam({ name: 'id', type: String })
  @ApiBody({ type: UpdateUserDto })
  update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<AxiosResponse<any>> {
    return this._usersService.update(id, updateUserDto);
  }

  @UseGuards(AuthGuard)
  @Post()
  @ApiBody({ type: CreateUserDto })
  create(@Body() createUserDto: CreateUserDto): Promise<AxiosResponse<any>> {
    return this._usersService.create(createUserDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  @ApiParam({ name: 'id', type: String })
  remove(@Param('id') id: string): Promise<AxiosResponse<any>> {
    return this._usersService.remove(id);
  }
}
