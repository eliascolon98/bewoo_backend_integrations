import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags, ApiQuery } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { PaginationDto } from './dto/pagination.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get()
    @ApiOperation({ summary: 'Obtener usuarios con paginación' })
    @ApiQuery({ name: 'page', required: false, example: 1 })
    @ApiQuery({ name: 'limit', required: false, example: 20 })
    @ApiResponse({
        status: 200,
        description: 'Usuarios paginados',
        schema: {
            example: {
                data: [
                    { id: 1, name: 'Elias', email: 'elias@beewo.com' },
                    { id: 2, name: 'Juan', email: 'juan@example.com' }
                ],
                page: 1,
                limit: 20,
                total: 2000,
                totalPages: 100
            }
        }
    })
    async findAll(@Query() pagination: PaginationDto) {
        return this.usersService.paginate(pagination);
    }
}
