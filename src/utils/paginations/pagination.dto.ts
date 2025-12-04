import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumberString, IsOptional, IsString } from 'class-validator';

export class PaginationDto {
    @ApiPropertyOptional({ example: 1 })
    @IsOptional()
    @IsNumberString()
    page?: number;

    @ApiPropertyOptional({ example: 20 })
    @IsOptional()
    @IsNumberString()
    limit?: number;

    @ApiPropertyOptional({
        example: 'id',
        description: 'Campo por el cual ordenar'
    })
    @IsOptional()
    @IsString()
    orderBy?: string;

    @ApiPropertyOptional({
        example: 'ASC',
        description: 'Dirección del ordenamiento: ASC | DESC'
    })
    @IsOptional()
    @IsString()
    orderDir?: 'ASC' | 'DESC';

    @ApiPropertyOptional({
        example: '{"tenant_id":10,"state":"ACTIVE"}',
        description: 'Filtros exactos. Enviar como JSON string.'
    })
    @IsOptional()
    @IsString()
    filters?: string;

    @ApiPropertyOptional({
        example: 'juan',
        description: 'Texto a buscar'
    })
    @IsOptional()
    @IsString()
    search?: string;

    @ApiPropertyOptional({
        example: 'user_name',
        description: 'Campo donde se aplicará el search'
    })
    @IsOptional()
    @IsString()
    searchBy?: string;
}
