import { Module } from '@nestjs/common';
import { ListModule } from './modules/list/list.module';
import { UserModule } from './modules/user/user.module';
import { ConfigModule } from '@nestjs/config';
import authConfig from './core/config/auth.config';
import { AuthModule } from './core/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksModule } from './modules/books/books.module';

@Module({
  imports: [
    ListModule,
    AuthModule,
    UserModule,
    BooksModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [authConfig],
    }),
    MongooseModule.forRoot(
      'mongodb+srv://nadiyastepas6:fK3XZO0QxceZfH3a@clasteryurag.eyjklbw.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
