import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { CreateUserInput } from '../dto/create-user.input';
import { User } from '../user.entity';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  public async createUser(createUserInput: CreateUserInput): Promise<User> {
    return await this.prisma.user.create({
      data: createUserInput,
    });
  }

  public async getAllUsers(): Promise<User[]> {
    return await this.prisma.user.findMany({});
  }

  public async getUser(id: number): Promise<User> {
    return await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  public async deleteUser(id: number): Promise<User> {
    return await this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
