import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Workspace } from './workspace.entity';
import { UserToWorkspaces } from './userWorkspace.entity';
import { RoleEnum } from '../enums/role.enum';

@Entity('roles')
export class Role extends BaseEntity {
  @Column({ length: 100, type: 'enum', enum: RoleEnum })
  @IsNotEmpty({ message: 'Role name is required' })
  name: string;

  @Column({ type: 'boolean', default: false })
  @IsBoolean({ message: 'Is system needs to be a boolean' })
  @IsOptional()
  is_system?: boolean = false;

  @OneToMany(() => Workspace, workspace => workspace.owner_id)
  workspaces: Workspace[];

  @OneToMany(() => UserToWorkspaces, userToWorkspaces => userToWorkspaces.user_id)
  user_workspaces: UserToWorkspaces[];
}