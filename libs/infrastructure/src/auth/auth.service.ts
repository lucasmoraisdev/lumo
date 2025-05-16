import { ConflictException, Injectable, UnauthorizedException } from "@nestjs/common";
import * as bcrypt from 'bcrypt';
import { UserRepository } from "../database/postgres/repositories/user.repository";
import { JwtService } from "@nestjs/jwt";
import { CreateUserDto } from "@lumo/core/dtos/user/create-user.dto";
import { User } from "@lumo/core";
import { CreateUserRequestDto } from "@lumo/core/dtos/user/create-user-request.dto";
import { UserMapper } from "@lumo/core/mappers/user.mapper";
import { LoginDto } from "@lumo/core/dtos/auth/login.dto";
import { JwtPayload } from "@lumo/core/interfaces/auth/jwt-payload.interface";

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly userMapper: UserMapper,
    private readonly jwtService: JwtService
  ) {}

  async register(createUserRequestDto: CreateUserRequestDto): Promise<User> {
    const userExists = await this.userRepository.findByEmail(createUserRequestDto.email);

    if (userExists) {
      throw new ConflictException('User already exists');
    }

    const hashedPassword = await bcrypt.hash(createUserRequestDto.password, 10);

    const userDto: CreateUserDto = await this.userMapper.map(
      createUserRequestDto,
      hashedPassword
    );

    const user = await this.userRepository.create(userDto);

    return user;
  }

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      return null;
    }
    
    const isPasswordValid = await bcrypt.compare(password, user.password_hash);

    if (!isPasswordValid) {
      return null;
    }

    return user;
  }

  async login(loginDto: LoginDto): Promise<{ accessToken: string }>{
    const user = await this.validateUser(loginDto.email, loginDto.password);

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // add role e workspaceId
    const payload: JwtPayload = {
      sub: user.id,
      email: user.email
    };

    const accessToken = await this.jwtService.signAsync(payload);

    return { accessToken };
  }
}