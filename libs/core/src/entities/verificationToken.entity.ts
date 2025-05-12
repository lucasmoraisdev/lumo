import { IsBoolean, IsDate, IsIP, IsJWT, IsOptional, IsString } from 'class-validator';
import { Column, CreateDateColumn, Entity, ManyToOne} from 'typeorm';
import { BaseEntity } from './base.entity';
import { User } from './user.entity';

@Entity('tokens')
export class VerificationToken extends BaseEntity {
  @Column({ length: 100 })
  @IsJWT({ message: 'Invalid refresh token' })
  refresh_token: string;

  @Column({ length: 100 })
  @IsJWT({ message: 'Token needs to be a JWT token' })
  token: string;

  @Column({ length: 100 })
  @IsString({ message: 'Type needs to be a string' })
  type: string;

  @CreateDateColumn({ name: 'expires_at' })
  @IsDate()
  expires_at: Date;

  @Column({ type: 'boolean', default: false })
  @IsBoolean({ message: 'Is system needs to be a boolean' })
  @IsOptional()
  is_system?: boolean = false;

  @ManyToOne(() => User, user => user.id)
  user: User[];
}