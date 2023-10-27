import { Module } from '@nestjs/common';
import { CacheModule, CacheModuleOptions } from '@nestjs/cache-manager';
import redisStore from 'cache-manager-ioredis';
import type { RedisOptions } from 'ioredis';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    CacheModule.registerAsync<CacheModuleOptions<RedisOptions>>({
      isGlobal: true,
      useFactory: async (configService: ConfigService) => {
        if (configService.get('cache.driver') === 'redis') {
          return {
            store: redisStore,
            keyPrefix: configService.get('redis.prefix'),
            host: configService.get('redis.host'),
            port: configService.get('redis.port'),
            username: configService.get('redis.user'),
            password: configService.get('redis.password'),
            db: configService.get('cache.db'),
            ttl: configService.get('cache.ttl') ?? 0,
          };
        }
        return {
          ttl: configService.get('cache.ttl') ?? 0,
        } as CacheModuleOptions;
      },
      inject: [ConfigService],
    }),
  ],
})
export class AppCacheModule {}
