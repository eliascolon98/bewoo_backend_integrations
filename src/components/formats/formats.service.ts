import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Format } from '../../models/formats/formats.entity';
import { PaginationDto } from '../../utils/paginations/pagination.dto';
import { buildPaginationResponse } from '../../utils/paginations/pagination.response';
import { applyPaginationFilters } from '../../utils/paginations/pagination-query-builder';

@Injectable()
export class FormatsService {
    constructor(
        @InjectRepository(Format)
        private readonly repo: Repository<Format>,
    ) { }

    async paginate(pagination: PaginationDto) {
        const page = Number(pagination.page) || 1;
        const limit = Number(pagination.limit) || 20;

        const qb = this.repo.createQueryBuilder('s');

        // Filtros, búsqueda y ordenamiento
        applyPaginationFilters(qb, pagination, 's');

        // Paginación
        qb.skip((page - 1) * limit).take(limit);

        const [data, total] = await qb.getManyAndCount();

        return buildPaginationResponse(data, total, page, limit);
    }

    async findOne(id: number) {
        const survey = await this.repo.findOne({ where: { id } });
        if (!survey) throw new NotFoundException(`Format ${id} not found`);
        return survey;
    }
}
