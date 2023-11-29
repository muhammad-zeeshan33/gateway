import { Module } from '@nestjs/common';
import { DataService } from '../common/http/data.service';
import { ErrorDataService } from '../common/http/error-data.service';
import { HttpModule } from '@nestjs/axios';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    HttpModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [DataService, ErrorDataService],
  exports: [HttpModule, DataService, ErrorDataService, JwtModule],
})
export class SharedModule {}
