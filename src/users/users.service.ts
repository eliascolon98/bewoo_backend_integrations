import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { PaginationDto } from './dto/pagination.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly repo: Repository<User>,
    ) { }

    async paginate(pagination: PaginationDto) {
        const page = Number(pagination.page) || 1;
        const limit = Number(pagination.limit) || 20;
        const skip = (page - 1) * limit;

        const [data, total] = await this.repo.findAndCount({
            skip,
            take: limit,
            order: {
                id: 'ASC',
            },
        });

        return {
            data,
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit),
        };
    }
}
