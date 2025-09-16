import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from './../src/app.module';

describe('Auth API (e2e)', () => {
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

  let jwtToken = '';

  it('/auth/login (POST)', async () => {
    const res = await request(app.getHttpServer() as any)
      .post('/auth/login')
      .send({ email: 'alice@example.com', password: 'password123' })
      .expect(200);

    jwtToken = res.body.access_token;
    expect(jwtToken).toBeDefined();
  });

  it('/users (GET) with JWT', () => {
    return request(app.getHttpServer() as any)
      .get('/users')
      .set('Authorization', `Bearer ${jwtToken}`)
      .expect(200);
  });
});
