import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();

  const app = await NestFactory.create(AppModule);

  // Validation global (DTOs)
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: false,
    }),
  );

  // Swagger
  const config = new DocumentBuilder()
    .setTitle('beewo API')
    .setDescription('Beewo backend API - documentación Swagger')
    .setVersion('0.1.0')
    .addTag('beewo')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`Server running on http://localhost:${port}`);
  console.log(`Swagger: http://localhost:${port}/api/docs`);
}
bootstrap().catch((err) => {
  console.error('Error during bootstrap:', err);
});
