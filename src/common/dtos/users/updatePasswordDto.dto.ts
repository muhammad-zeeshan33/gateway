import { IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePasswordDto {
  @ApiProperty({ example: '12345678', description: 'The password of the User' })
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  readonly password: string;
}
