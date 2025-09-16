import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from './../src/app.module';

describe('Users API (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/users (POST)', () => {
    return request(app.getHttpServer() as any)
      .post('/users')
      .send({ name: 'Alice', email: 'alice@example.com' })
      .expect(201);
  });

  it('/users (GET)', () => {
    return request(app.getHttpServer() as any)
      .get('/users')
      .expect(200);
  });
});
