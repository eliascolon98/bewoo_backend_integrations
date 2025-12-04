import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('surveys')
export class Survey {
    @ApiProperty({ type: Number })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ type: Number })
    @Column()
    tenant_id: number;

    @ApiProperty({ type: Number })
    @Column()
    user_id: number;

    @ApiProperty({ type: Number })
    @Column()
    format_id: number;

    @ApiProperty({ type: Boolean })
    @Column()
    state_complete: boolean;

    @ApiProperty({ type: String })
    @Column()
    state: string;


    @ApiProperty({ type: Number, nullable: true })
    @Column({ nullable: true })
    module_task_id: number;
    @ApiProperty({ type: Number })
    @Column()
    survey_count: number;

    @ApiProperty({ type: Object })
    @Column({ type: 'jsonb' })
    data: Record<string, any>;

    @ApiProperty({ type: String, nullable: true })
    @Column({ nullable: true })
    token: string;

    @ApiProperty({ type: String, nullable: true })
    @Column({ nullable: true })
    auth_token: string;

    @ApiProperty({ type: String, nullable: true })
    @Column({ nullable: true })
    data_to_show: string;

    @ApiProperty({ type: String, nullable: true })
    @Column({ nullable: true })
    user_name: string;

    @ApiProperty({ type: Object })
    @Column({ type: 'jsonb' })
    data_matrix: Record<string, any>;
}
