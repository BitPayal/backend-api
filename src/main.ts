import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable validation globally
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,          // strips properties not in DTO
      forbidNonWhitelisted: true, // throws error if extra properties are passed
      transform: true,           // auto-transform types (e.g., string → number)
    }),
  );

  await app.listen(3000);
}
bootstrap();
