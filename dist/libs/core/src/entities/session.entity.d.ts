import { BaseEntity } from './base.entity';
import { User } from './user.entity';
export declare class Session extends BaseEntity {
    refresh_token: string;
    user_agent: string;
    ip_address: string;
    expires_at: Date;
    user: User[];
}
