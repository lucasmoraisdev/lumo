import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { AuthService } from './auth.service';
import { UserMapper } from '@lumo/core/mappers/user.mapper';
import { JwtStrategy } from '../jwt/jwt.strategy';
import { UserRepository } from '../database/postgres/repositories/user.repository';
import { AuthController } from 'apps/api/src/auth/auth.controller';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '7d' },
    })
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    JwtStrategy,
    UserRepository,
    UserMapper,
  ],
})

export class AuthModule {};