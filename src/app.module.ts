import { Module } from '@nestjs/common';
import { ListModule } from './modules/list/list.module';
import { UserModule } from './modules/user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import authConfig from './core/config/auth.config';
import { AuthModule } from './core/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksModule } from './modules/books/books.module';
import { appConfig } from './core/config/app.config';

@Module({
  imports: [
    AuthModule,
    UserModule,
    BooksModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [authConfig, appConfig],
    }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('app.database.database_uri'),
      }),
    }),
  ],
})
export class AppModule {}
