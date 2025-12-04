import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('formats')
export class Format {
    @ApiProperty({ type: Number })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ type: Number })
    @Column()
    tenant_id: number;

    @ApiProperty({ type: Number })
    @Column()
    user_id: number;

    @ApiProperty({ type: String })
    @Column()
    state_db: string;

    @ApiProperty({ type: Date, nullable: true })
    @Column({ type: 'timestamp', nullable: true })
    date_delete: Date;

    @ApiProperty({ type: Date })
    @Column({ type: 'timestamp' })
    created_at: Date;

    @ApiProperty({ type: Date })
    @Column({ type: 'timestamp' })
    updated_at: Date;

    @ApiProperty({ type: String })
    @Column()
    type_format: string;

    @ApiProperty({ type: Number })
    @Column()
    format_category_id: number;

    @ApiProperty({ type: Boolean })
    @Column()
    has_taks: boolean;

    @ApiProperty({ type: Boolean })
    @Column()
    has_comments: boolean;

    @ApiProperty({ type: String, nullable: true })
    @Column({ nullable: true })
    header_image: string;

    @ApiProperty({ type: Boolean })
    @Column()
    was_edited: boolean;

    @ApiProperty({ type: String, nullable: true })
    @Column({ nullable: true })
    custom_view: string;

    @ApiProperty({ type: Boolean })
    @Column()
    show_custom: boolean;

    @ApiProperty({ type: Number, nullable: true })
    @Column({ nullable: true })
    task_board_id: number;

    @ApiProperty({ type: Number, nullable: true })
    @Column({ nullable: true })
    user_delete_id: number;

    @ApiProperty({ type: String, nullable: true })
    @Column({ nullable: true })
    format_alias: string;

    @ApiProperty({ type: String, nullable: true })
    @Column({ nullable: true })
    token: string;

    @ApiProperty({ type: String, nullable: true })
    @Column({ nullable: true })
    auth_token: string;

    @ApiProperty({ type: Boolean })
    @Column()
    cache_survey: boolean;


    @ApiProperty({ type: Boolean })
    @Column()
    has_error: boolean;

    @ApiProperty({ type: String, nullable: true })
    @Column({ nullable: true })
    last_excel_url: string;

    @ApiProperty({ type: Number, nullable: true })
    @Column({ nullable: true })
    max_width_image: number;
}
