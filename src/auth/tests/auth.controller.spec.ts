import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from '../auth.controller';
import { AuthService } from '../auth.service';
import { LoginDto } from '../dto/login.dto';

describe('AuthController', () => {
  let controller: AuthController;
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: AuthService,
          useValue: {
            validateUser: jest.fn().mockResolvedValue({ id: 1, email: 'test@example.com' }),
            login: jest.fn().mockResolvedValue({ access_token: 'mockJwtToken' }),
          },
        },
      ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should login a user and return JWT', async () => {
    const dto: LoginDto = { email: 'test@example.com', password: '123456' };

    expect(await controller.login(dto))
      .toEqual({ access_token: 'mockJwtToken' });

    expect(service.validateUser).toHaveBeenCalledWith('test@example.com', '123456');
    expect(service.login).toHaveBeenCalledWith({ id: 1, email: 'test@example.com' });
  });
});
