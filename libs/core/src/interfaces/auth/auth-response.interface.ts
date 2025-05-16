import { User } from "../user/user.interface";

export interface AuthResponse {
  accessToken: string;
  refreshToken?: string;
  user: User;
}