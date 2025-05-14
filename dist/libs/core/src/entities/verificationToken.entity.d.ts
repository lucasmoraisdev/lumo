import { BaseEntity } from './base.entity';
import { User } from './user.entity';
export declare class VerificationToken extends BaseEntity {
    refresh_token: string;
    token: string;
    type: string;
    expires_at: Date;
    is_system?: boolean;
    user: User[];
}
