import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    example: 'abc@gmail.com',
    description: 'The email of the User',
  })
  @IsNotEmpty()
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty({ example: '12345678', description: 'The password of the User' })
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  readonly password: string;
}
