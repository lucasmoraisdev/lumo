import { BaseEntity } from './base.entity';
import { User } from './user.entity';
import { UserToWorkspaces } from './userWorkspace.entity';
export declare class Workspace extends BaseEntity {
    name: string;
    owner_id: User;
    password_hash: string;
    user_workspaces: UserToWorkspaces[];
}
