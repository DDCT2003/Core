import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3001', // Permite solicitudes solo desde este origen
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos HTTP permitidos
    credentials: true, // Permite el envío de cookies o credenciales
  });
  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);

}
bootstrap();
