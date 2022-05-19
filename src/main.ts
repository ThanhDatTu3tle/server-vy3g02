import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // const configService = app.get(ConfigService);
  // app.enableCors({
  //   origin: configService.get('FRONTEND_URL'),
  //   credentials: true,
  // });
  // app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
  .setTitle('SERVER VY3-G02 API')
  .setDescription('The description of the API')
  .setVersion('1.0.0')
  .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/', app, document);

  await app.listen(3001);
}
bootstrap();
