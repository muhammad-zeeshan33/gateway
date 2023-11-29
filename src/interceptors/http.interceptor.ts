import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { responseData } from 'src/common/dtos/response/response.dto';

@Injectable()
export class HttpInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      map((data) => {
        if (typeof data == 'object') {
          return new responseData(data);
        } else {
          const response = new responseData({});
          response.success = false;
          response.message = data;
          return response;
        }
      }),
    );
  }
}
