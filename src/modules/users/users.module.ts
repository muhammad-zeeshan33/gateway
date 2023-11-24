import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { DataService } from 'src/common/http/data.service';
import { ErrorDataService } from 'src/common/http/error-data.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, DataService, ErrorDataService],
})
export class UsersModule {}
