import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

import * as dotenv from 'dotenv';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  dotenv.config();
  const port = 5000;
  app.useGlobalPipes(new ValidationPipe());
  const config = app.get(ConfigService);
  await app.listen(port, () => {
    return config.get('general.port');
  });
}
bootstrap();
