import { SelectQueryBuilder, ObjectLiteral } from 'typeorm';
import { PaginationDto } from './pagination.dto';

export function applyPaginationFilters<T extends ObjectLiteral>(
    qb: SelectQueryBuilder<T>,
    pagination: PaginationDto,
    alias: string,
) {
    // 1. Filtros exactos (JSON)
    if (pagination.filters) {
        try {
            const filterObj = JSON.parse(pagination.filters);
            Object.entries(filterObj).forEach(([key, value]) => {
                qb.andWhere(`${alias}.${key} = :${key}`, { [key]: value });
            });
        } catch (error) {
            console.warn('Invalid filters JSON');
        }
    }

    // 2. Búsqueda LIKE
    if (pagination.search && pagination.searchBy) {
        qb.andWhere(`${alias}.${pagination.searchBy} ILIKE :search`, {
            search: `%${pagination.search}%`,
        });
    }

    // 3. Ordenamiento opcional
    const orderBy = pagination.orderBy || 'id';
    const orderDir = pagination.orderDir || 'ASC';

    qb.orderBy(`${alias}.${orderBy}`, orderDir);

    return qb;
}
