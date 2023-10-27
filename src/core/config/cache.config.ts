import { registerAs } from '@nestjs/config';

export interface IRedisConfig {
  host: string;
  port: number;
  db?: number;
  user?: string;
  password?: string;
  prefix: string;
}

export interface ICacheConfig {
  driver: string;
  db: number;
  ttl?: string;
}

export const cfgRedis: IRedisConfig = {
  host: 'localhost',
  port: 6379,
  db: parseInt(process.env.REDIS_DB, 10) || undefined,
  user: process.env.REDIS_USER || undefined,
  password: process.env.REDIS_PASSWORD || undefined,
  prefix: process.env.REDIS_PREFIX || 'lead-engine',
};

export const cfgCache: ICacheConfig = {
  driver: process.env.CACHE_DRIVER || 'memory', // redis | memory
  db: parseInt(process.env.REDIS_CACHE_DB, 10) || 1,
  ttl: process.env.CACHE_TTL || undefined, // in seconds
};

export const redisConfig = registerAs('redis', () => cfgRedis);
export const cacheConfig = registerAs('cache', () => cfgCache);
