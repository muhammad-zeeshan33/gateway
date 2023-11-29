import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosError, AxiosResponse } from 'axios';
import { Observable, catchError, map, throwError } from 'rxjs';
import { ErrorDataService } from './error-data.service';

@Injectable()
export class DataService {
  constructor(
    private readonly _httpService: HttpService,
    private readonly _errorDataService: ErrorDataService,
  ) {}

  private prepareRequestConfig(
    config?: Record<string, any>,
  ): Record<string, any> {
    const requestConfig: Record<string, any> = {};

    if (config) {
      requestConfig.headers = {
        authorization: config.authorization,
      };
    }

    return requestConfig;
  }

  get<T>(url: string): Observable<T> {
    return this._httpService.get<T>(url).pipe(
      map((response: AxiosResponse<T>) => response.data),
      catchError((error: AxiosError) =>
        this._errorDataService.handleError(error),
      ),
    );
  }

  post<T>(url: string, data: any, options?: any): Observable<T> {
    const requestConfig = this.prepareRequestConfig(options?.headers);
    return this._httpService.post<T>(url, data, requestConfig).pipe(
      map((response: AxiosResponse<T>) => response.data),
      catchError((error: AxiosError) =>
        this._errorDataService.handleError(error),
      ),
    );
  }

  put<T>(url: string, data: any): Observable<T> {
    return this._httpService.put<T>(url, data).pipe(
      map((response: AxiosResponse<T>) => response.data),
      catchError((error: AxiosError) =>
        this._errorDataService.handleError(error),
      ),
    );
  }

  delete<T>(url: string): Observable<T> {
    return this._httpService.delete<T>(url).pipe(
      map((response: AxiosResponse<T>) => response.data),
      catchError((error: AxiosError) =>
        this._errorDataService.handleError(error),
      ),
    );
  }

  patch<T>(url: string, data: any): Observable<T> {
    return this._httpService.patch<T>(url, data).pipe(
      map((response: AxiosResponse<T>) => response.data),
      catchError((error: AxiosError) =>
        this._errorDataService.handleError(error),
      ),
    );
  }
}
