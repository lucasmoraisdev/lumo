import { IsBoolean, IsDate, IsIP, IsJWT, IsOptional, IsString } from 'class-validator';
import { Column, CreateDateColumn, Entity, ManyToOne} from 'typeorm';
import { BaseEntity } from './base.entity';
import { User } from './user.entity';

@Entity('sessions')
export class Session extends BaseEntity {
  @Column({ length: 100 })
  @IsJWT({ message: 'Invalid refresh token' })
  refresh_token: string;

  @Column({ length: 100 })
  @IsString({ message: 'User agent needs to be a string' })
  user_agent: string;

  @Column({ length: 100 })
  @IsIP(4 , { message: 'Invalid IP address' })
  ip_address: string;

  @CreateDateColumn({ name: 'expires_at' })
  @IsDate()
  expires_at: Date;

  @ManyToOne(() => User, user => user.id)
  user: User[];
}