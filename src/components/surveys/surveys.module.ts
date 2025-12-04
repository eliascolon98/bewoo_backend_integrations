import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Survey } from '../../models/surveys/surveys.entity';
import { SurveysService } from './surveys.service';
import { SurveysController } from './surveys.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Survey])],
  providers: [SurveysService],
  controllers: [SurveysController],
})
export class SurveysModule { }
