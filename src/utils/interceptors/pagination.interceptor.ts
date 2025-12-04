import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';

@Injectable()
export class PaginationInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(
            map((response) => {
                if (
                    response &&
                    typeof response === 'object' &&
                    'data' in response &&
                    'total' in response &&
                    'page' in response &&
                    'limit' in response
                ) {
                    return {
                        ...response,
                        status: 'success',
                    };
                }
                return response;
            }),
        );
    }
}
