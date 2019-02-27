import 'dotenv/config';
import * as request from 'supertest';
import { app } from './constants';

describe('ROOT', () => {
  it('should ping', () => {
    return request(app)
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});
