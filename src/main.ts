import { NestFactory } from '@nestjs/core';
import 'dotenv/config';
import { AppModule } from './app.module';

if (process.env.NODE_ENV === 'test') {
  console.log('TESTING IN PROCESS');
  console.log('production database', process.env.MONGO_URI);
  process.env.MONGO_URI = process.env.MONGO_URI_TEST;
  console.log('using database', process.env.MONGO_URI);
}

export async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
