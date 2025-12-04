import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    @ApiProperty({ description: 'Unique identifier for the user' })
    id: number;

    @Column()
    @ApiProperty({ description: 'Email address of the user' })
    email: string;


    @Column({ nullable: true })
    @ApiProperty({ description: 'Username of the user', required: false })
    username?: string;

    @Column({ nullable: true })
    @ApiProperty({ description: 'Secondary email of the user', required: false })
    second_email?: string;

    @Column({ nullable: true })
    @ApiProperty({ description: 'First name of the user', required: false })
    first_name?: string;

    @Column({ nullable: true })
    @ApiProperty({ description: 'Second name of the user', required: false })
    second_name?: string;

    @Column({ nullable: true })
    @ApiProperty({ description: 'Last name of the user', required: false })
    second_last_name?: string;

    @Column({ type: 'date', nullable: true })
    @ApiProperty({ description: 'Birthday of the user', required: false })
    birthday?: Date;

    @Column({ type: 'int', nullable: true })
    @ApiProperty({ description: 'Age of the user', required: false })
    age?: number;

    @Column({ nullable: true })
    @ApiProperty({ description: 'Active field status', required: false })
    active_state?: string;

    @Column({ nullable: true })
    @ApiProperty({ description: 'Contact number of the user', required: false })
    contact_number?: string;
}
