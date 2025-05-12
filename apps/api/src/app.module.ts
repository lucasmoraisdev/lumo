import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { PostgresModule } from '@lumo/infrastructure/database/postgres/postgres.module';
import { MongoModule } from '@lumo/infrastructure/database/mongodb/mongodb.module';
import { RedisModule } from '@lumo/infrastructure/database/redis/redis.module';
import { JwtAuthModule } from '@lumo/infrastructure/auth/jwt/jwt.module';
import { RabbitMQModule } from '@lumo/infrastructure/messaging/rabbitmq/rabbitmq.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),

    PostgresModule,
    MongoModule,
    RedisModule,
    JwtAuthModule,
    RabbitMQModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
