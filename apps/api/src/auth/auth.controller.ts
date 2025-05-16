import { LoginDto } from "@lumo/core/dtos/auth/login.dto";
import { CreateUserRequestDto } from "@lumo/core/dtos/user/create-user-request.dto";
import { AuthService } from "@lumo/infrastructure/auth/auth.service";
import { Body, Controller, Post } from "@nestjs/common";

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(
    @Body() dto: LoginDto
  ) {
    return this.authService.login(dto);
  }

  @Post('register')
  register(
    @Body() dto: CreateUserRequestDto
  ) {
    return this.authService.register(dto);
  }
}