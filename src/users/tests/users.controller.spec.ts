import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from '../users.controller';
import { UsersService } from '../users.service';
import { CreateUserDto } from '../dto/create-user.dto';

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: {
            create: jest.fn().mockResolvedValue({ id: 1, name: 'John' }),
            findAll: jest.fn().mockResolvedValue([{ id: 1, name: 'John' }]),
          },
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a user', async () => {
    const createUserDto: CreateUserDto = {
      name: 'John',
      email: 'john@example.com',
      password: 'password123'
    };
    expect(await controller.create(createUserDto)).toEqual({ id: 1, name: 'John' });
  });

  it('should return all users', async () => {
    expect(await controller.findAll()).toEqual([{ id: 1, name: 'John' }]);
  });
});
