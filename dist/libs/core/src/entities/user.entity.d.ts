import { BaseEntity } from './base.entity';
import { Workspace } from './workspace.entity';
import { UserToWorkspaces } from './userWorkspace.entity';
export declare class User extends BaseEntity {
    name: string;
    email: string;
    password_hash: string;
    is_verified?: boolean;
    mfa_enabled?: boolean;
    workspaces: Workspace[];
    user_workspaces: UserToWorkspaces[];
}
