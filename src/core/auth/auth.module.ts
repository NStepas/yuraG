import { AuthController } from './auth.controller';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { cacheConfig, redisConfig } from '../config/cache.config';
import { AppCacheModule } from '../cache/cache.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [redisConfig, cacheConfig],
    }),
    PassportModule,
    AppCacheModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          secret: config.get<string>('auth.key'),
          signOptions: {
            expiresIn: `${config.get('auth.accessTokenLifeTime')}m`,
          },
        };
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthModule],
})
export class AuthModule {}
