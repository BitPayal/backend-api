import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from '../users.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from '../user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';

describe('UsersService', () => {
  let service: UsersService;
  let repo: Repository<User>;

  beforeEach(async () => {
    const mockRepository = {
      create: jest.fn(),
      save: jest.fn(),
      find: jest.fn(),
      findOneBy: jest.fn(),
      update: jest.fn(),
      remove: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    repo = module.get<Repository<User>>(getRepositoryToken(User));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a user', async () => {
    const createUserDto: CreateUserDto = {
      name: 'Test',
      email: 'test@example.com',
      password: 'password123'
    };
    const savedUser = { 
      id: '123e4567-e89b-12d3-a456-426614174000', 
      name: 'Test', 
      email: 'test@example.com',
      createdAt: new Date()
    } as User;
    
    jest.spyOn(repo, 'create').mockReturnValue(savedUser);
    jest.spyOn(repo, 'save').mockResolvedValue(savedUser);

    expect(await service.create(createUserDto)).toEqual(savedUser);
  });
});
