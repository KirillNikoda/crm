import { Module } from '@nestjs/common';
import { UsersController } from './controller/users.controller';
import { UsersService } from './service/users.service';

@Module({
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
