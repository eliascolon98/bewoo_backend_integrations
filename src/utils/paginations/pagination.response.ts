import { PaginationResult } from './pagination.interface';

export function buildPaginationResponse<T>(
    data: T[],
    total: number,
    page: number,
    limit: number,
): PaginationResult<T> {
    return {
        data,
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
    };
}