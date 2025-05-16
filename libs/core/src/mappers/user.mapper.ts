import { Injectable } from "@nestjs/common";
import { CreateUserRequestDto } from "../dtos/user/create-user-request.dto";
import { CreateUserDto } from "../dtos/user/create-user.dto";
import { RoleEnum } from "../enums/role.enum";
import { BaseMapper } from "./base.mapper";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserMapper extends BaseMapper<CreateUserRequestDto, CreateUserDto> {
  async map(source: CreateUserRequestDto, passwordHash?: string): Promise<CreateUserDto> {
    const now = new Date();

    const password_hash = passwordHash ||
      await bcrypt.hash(source.password, 10);

    return {
      email: source.email,
      name: source.name,
      password_hash,
      is_verified: source.is_verified || false,
      mfa_enabled: source.mfa_enabled || false,
      created_at: now,
      updated_at: now,
      role: RoleEnum.USER_ADMIN
    };
  }

  async mapList(sources: CreateUserRequestDto[]): Promise<CreateUserDto[]> {
    const mappedItems: CreateUserDto[] = [];

    for (const source of sources) {
      const destination = await this.map(source);
      mappedItems.push(destination);
    }
    return mappedItems;
  }
}