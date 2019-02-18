import { Test, TestingModule } from '@nestjs/testing';
import 'dotenv/config';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

// test constants
process.env.MONGO_URI = 'mongodb://localhost/nest_test';

describe('AppController (e2e)', () => {
  let app;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});
