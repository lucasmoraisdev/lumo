import { RoleEnum } from "@lumo/core/enums/role.enum";
import { IsBoolean, IsDate, IsEmail, IsEnum, IsString, MinLength } from "class-validator";

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(3)
  name: string;

  @IsString()
  @MinLength(8)
  password_hash: string;

  @IsBoolean()
  is_verified: boolean;

  @IsBoolean()
  mfa_enabled: boolean;

  @IsDate()
  created_at: Date;

  @IsDate()
  updated_at: Date;

  @IsEnum(RoleEnum, { each: true })
  role: RoleEnum;
}