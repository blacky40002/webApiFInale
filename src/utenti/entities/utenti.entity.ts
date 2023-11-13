import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('login')
export class LoginEntity {
  @IsNotEmpty()
  @IsString()
  @Column()
  @PrimaryColumn()
  Username: string;

  @IsNotEmpty()
  @IsString()
  @Column()
  Password: string;
}
