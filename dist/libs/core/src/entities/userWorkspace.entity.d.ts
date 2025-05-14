import { User } from './user.entity';
import { Workspace } from './workspace.entity';
import { Role } from './role.entity';
export declare class UserToWorkspaces {
    id: string;
    user_id: string;
    workspace_id: string;
    role_id: string;
    joined_at: Date;
    left_at?: Date | null;
    user: User;
    workspace: Workspace;
    role: Role;
}
