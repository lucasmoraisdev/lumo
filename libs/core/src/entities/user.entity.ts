import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Workspace } from './workspace.entity';
import { UserToWorkspaces } from './userWorkspace.entity';

@Entity('users')
export class User extends BaseEntity {
  @Column({ length: 100 })
  name: string;

  @Column({ unique: true })
  @IsEmail({}, { message: 'Invalid email format' })
  @IsNotEmpty({ message: 'The email is required' })
  email: string;

  @Column({ length: 100 })
  @IsNotEmpty({ message: 'The password is required' })
  @IsString({ message: 'Password needs to be a string' })
  password_hash: string;

  @Column({ type: 'boolean', default: false })
  @IsBoolean({ message: 'Is verified needs to be a string' })
  @IsOptional()
  is_verified?: boolean = false;

  @Column({ type: 'boolean', default: false })
  @IsBoolean({ message: 'MFA Enabled needs to be a string' })
  @IsOptional()
  mfa_enabled?: boolean = false;

  @OneToMany(() => Workspace, workspace => workspace.owner_id)
  workspaces: Workspace[];

  @OneToMany(() => UserToWorkspaces, userToWorkspaces => userToWorkspaces.user_id)
  user_workspaces: UserToWorkspaces[];
}