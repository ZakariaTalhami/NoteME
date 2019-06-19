import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from './api-interceptor';
import { Provider } from '@angular/core';

export const httpInterceptorProviders: Provider[] = [
    {provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true}
]