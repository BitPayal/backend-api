import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],  // ✅ only modules here
  providers: [UsersService],                   // ✅ service goes here
  controllers: [UsersController],              // ✅ controller goes here
  exports: [UsersService],                     // optional if used elsewhere
})
export class UsersModule {}
