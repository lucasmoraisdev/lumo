import { BaseEntity } from './base.entity';
import { Workspace } from './workspace.entity';
import { UserToWorkspaces } from './userWorkspace.entity';
export declare class Role extends BaseEntity {
    name: string;
    is_system?: boolean;
    workspaces: Workspace[];
    user_workspaces: UserToWorkspaces[];
}
