import { NestFactory } from '@nestjs/core';

import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({
      ignoreTrailingSlash: true,
    }),
  );

  const configService = app.select(AppModule).get(ConfigService);

  const PORT = configService.get<string>('PORT') ?? 3900;

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(PORT);
}

bootstrap();
