import { IsNotEmpty, IsString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { User } from './user.entity';
import { UserToWorkspaces } from './userWorkspace.entity';

@Entity('workspaces')
export class Workspace extends BaseEntity {
  @Column({ length: 100 })
  name: string;

  @ManyToOne(() => User, user => user.id, { nullable: false})
  owner_id: User;

  @OneToMany(() => UserToWorkspaces, userToWorkspaces => userToWorkspaces.workspace_id)
  user_workspaces: UserToWorkspaces[];
}