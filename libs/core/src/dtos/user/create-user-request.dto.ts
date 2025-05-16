import { IsBoolean, IsEmail, IsOptional, IsString, MinLength } from "class-validator";

export class CreateUserRequestDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(3)
  name: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsBoolean()
  @IsOptional()
  is_verified?: boolean = false;

  @IsBoolean()
  @IsOptional()
  mfa_enabled?: boolean = false;
}



