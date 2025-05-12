import { Module } from '@nestjs/common';
import { RedisModule as RedisIoModule } from '@liaoliaots/nestjs-redis';

@Module({
  imports: [
    RedisIoModule.forRootAsync({
      useFactory: () => ({
        config: {
          host: process.env.REDIS_HOST,
          port: parseInt(process.env.REDIS_PORT || '6379'),
        },
      }),
    }),
  ],
  exports: [RedisIoModule],
})
export class RedisModule {}
