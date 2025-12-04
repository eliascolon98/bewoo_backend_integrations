import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Survey } from '../../models/surveys/surveys.entity';
import { buildPaginationResponse } from '../../utils/paginations/pagination.response';
import { applyPaginationFilters } from '../../utils/paginations/pagination-query-builder';
import { PaginationDto } from '../../utils/paginations/pagination.dto';

@Injectable()
export class SurveysService {
    constructor(
        @InjectRepository(Survey)
        private readonly repo: Repository<Survey>,
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
        if (!survey) throw new NotFoundException(`Survey ${id} not found`);
        return survey;
    }
}
