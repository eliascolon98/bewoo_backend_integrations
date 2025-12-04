import { Module } from '@nestjs/common';
import { PaginationInterceptor } from './interceptors/pagination.interceptor';

@Module({
    controllers: [],
    providers: [PaginationInterceptor],
    exports: [],
})
export class UtilsModule { }
