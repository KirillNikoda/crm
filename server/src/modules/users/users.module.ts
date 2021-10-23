import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { UsersService } from './service/users.service';
import { UsersResolvers } from './users.resolver';

@Module({
  imports: [PrismaModule],
  providers: [UsersService, UsersResolvers],
})
export class UsersModule {}
