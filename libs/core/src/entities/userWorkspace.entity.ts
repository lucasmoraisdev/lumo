import { IsBoolean, IsDate, IsEmail, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { User } from './user.entity';
import { Workspace } from './workspace.entity';
import { Role } from './role.entity';

@Entity('userWorkspaces')
export class UserToWorkspaces {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  user_id: string;

  @Column({ length: 100 })
  workspace_id: string;

  @Column({ length: 100 })
  role_id: string;

  @CreateDateColumn({ name: 'joined_at', default: () => 'CURRENT_TIMESTAMP' })
  @IsDate()
  joined_at: Date;

  @CreateDateColumn()
  @IsDate()
  @IsOptional()
  left_at?: Date | null;

  @ManyToOne(() => User, user => user.user_workspaces, { nullable: false })
  user: User;

  @ManyToOne(() => Workspace, workspace => workspace.user_workspaces, { nullable: false })
  workspace: Workspace;

  @ManyToOne(() => Role, role => role.id, { nullable: false })
  @JoinColumn({ name: 'role_id' })
  role: Role;
}