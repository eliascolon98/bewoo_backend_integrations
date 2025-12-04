import { Module } from '@nestjs/common';
import { FormatsService } from './formats.service';
import { FormatsController } from './formats.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Format } from '../../models/formats/formats.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Format])],
  providers: [FormatsService],
  controllers: [FormatsController]
})
export class FormatsModule { }
