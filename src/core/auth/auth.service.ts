import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Cache } from 'cache-manager';

@Injectable()
export class AuthService {
  protected readonly logger: Logger = new Logger(AuthService.name);
  constructor(
    private readonly jwtService: JwtService,
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
  ) {}

  async login(email: string) {
    this.logger.log('Generating tokens...');
    const tokens = this.generateAccessTokens(email);
    console.log(tokens);
    await this.cacheManager.set(`${email}`, tokens.refreshToken);
    return {
      ...tokens,
      email,
    };
  }

  protected generateAccessTokens(email: string) {
    return {
      accessToken: this.getAccessToken(email),
      refreshToken: this.generateRefreshToken(email),
    };
  }

  protected getAccessToken(email: string) {
    return this.jwtService.sign({ email }, { expiresIn: '1m' });
  }

  protected generateRefreshToken(email: string) {
    return this.jwtService.sign({ email }, { expiresIn: '1h' });
  }

  async validate(email: string, password: string) {
    console.log(email, password);
    return true;
  }
}
