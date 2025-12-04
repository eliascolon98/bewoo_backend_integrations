import { Controller, Get, Query, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags, ApiQuery } from '@nestjs/swagger';
import { FormatsService } from './formats.service';
import { PaginationDto } from '../../utils/paginations/pagination.dto';
import { Format } from '../../models/formats/formats.entity';

@ApiTags('formats')
@Controller('formats')
export class FormatsController {
    constructor(private readonly formatsService: FormatsService) { }

    @Get()
    @ApiOperation({ summary: 'Obtener formatos con paginación' })
    @ApiQuery({ name: 'page', required: false, example: 1 })
    @ApiQuery({ name: 'limit', required: false, example: 20 })
    @ApiResponse({
        status: 200,
        description: 'Formatos paginados',
        schema: {
            example: {
                data: [
                    { id: 1, email: 'elias@beewo.com' },
                    { id: 2, email: 'juan@example.com' }
                ],
                page: 1,
                limit: 20,
                total: 2000,
                totalPages: 100
            }
        }
    })
    async findAll(@Query() pagination: PaginationDto) {
        return this.formatsService.paginate(pagination);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Obtener un formato por ID' })
    @ApiResponse({ status: 200, type: Format })
    @ApiResponse({ status: 404, description: 'Survey not found' })
    async findOne(@Param('id') id: number) {
        return this.formatsService.findOne(id);
    }
}
