import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { SurveysService } from './surveys.service';
import { Survey } from '../../models/surveys/surveys.entity';
import { PaginationDto } from '../../utils/paginations/pagination.dto';

@ApiTags('surveys')
@Controller('surveys')
export class SurveysController {
    constructor(private readonly surveysService: SurveysService) { }

    @Get()
    @ApiOperation({ summary: 'Obtener encuestas (surveys) con paginación' })
    @ApiQuery({ name: 'page', required: false, example: 1 })
    @ApiQuery({ name: 'limit', required: false, example: 20 })
    @ApiResponse({
        status: 200,
        description: 'Lista paginada de encuestas',
        schema: {
            example: {
                data: [
                    { id: 1, tenant_id: 10, format_id: 100, state: "OK" },
                    { id: 2, tenant_id: 10, format_id: 101, state: "PENDING" }
                ],
                page: 1,
                limit: 20,
                total: 2000,
                totalPages: 100
            }
        }
    })
    async findAll(@Query() pagination: PaginationDto) {
        return this.surveysService.paginate(pagination);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Obtener una encuesta por ID' })
    @ApiResponse({ status: 200, type: Survey })
    @ApiResponse({ status: 404, description: 'Survey not found' })
    async findOne(@Param('id') id: number) {
        return this.surveysService.findOne(id);
    }
}
