import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  UseGuards,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/common/dtos/users/createUserDto.dto';
import { ApiTags, ApiBody, ApiParam } from '@nestjs/swagger';
import { LoginDto } from 'src/common/dtos/auth/loginDto.dto';
import { UpdatePasswordDto } from 'src/common/dtos/users/updatePasswordDto.dto';
import { AuthGuard } from 'src/guards/auth.guard';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly _authService: AuthService) {}

  @ApiBody({ type: LoginDto })
  @Post()
  login(@Body() loginDto: LoginDto): Promise<any> {
    return this._authService.login(loginDto);
  }

  @ApiBody({ type: CreateUserDto })
  @Post('register')
  register(@Body() createUserDto: CreateUserDto): Promise<any> {
    return this._authService.register(createUserDto);
  }

  @UseGuards(AuthGuard)
  @Post('update-password')
  @ApiBody({ type: UpdatePasswordDto })
  updatePassword(
    @Body() updatePasswordDto: UpdatePasswordDto,
    @Req() req: any,
  ): Promise<any> {
    return this._authService.updatePassword(updatePasswordDto, req);
  }
}
