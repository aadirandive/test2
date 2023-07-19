import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule , DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('email')
  .setDescription('send email details')
  .setVersion('1.0')
  .addTag('contact')
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/contact', app, document);


  await app.listen(8005);
}
bootstrap();
