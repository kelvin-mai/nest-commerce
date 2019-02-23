import { HttpStatus } from '@nestjs/common';
import 'dotenv/config';
import * as request from 'supertest';

// test constants
process.env.MONGO_URI = 'mongodb://localhost/nest_test';

describe('AppController (e2e)', () => {
  let app = 'http://localhost:3000';

  // beforeEach(async () => {
  //   const moduleFixture: TestingModule = await Test.createTestingModule({
  //     imports: [AppModule],
  //   }).compile();

  //   app = moduleFixture.createNestApplication();
  //   await app.init();
  // });

  it('/ (GET)', () => {
    return request(app)
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('/auth (GET)', () => {
    return request(app)
      .get('/auth')
      .expect(HttpStatus.UNAUTHORIZED);
  });
});
