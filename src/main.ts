import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('API Gateway')
    .setDescription('API Gateway Documentation')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-gateway', app, document);
  await app.listen(3000).then(() => {
    console.log('api-gateway is running on port:3000');
  });
}
bootstrap();
