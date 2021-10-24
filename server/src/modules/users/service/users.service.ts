import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { CreateUserInput } from '../dto/create-user.input';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  public async createUser(createUserInput: CreateUserInput): Promise<User> {
    return await this.prisma.user.create({
      data: createUserInput,
    });
  }

  public async findAll(): Promise<User[]> {
    return await this.prisma.user.findMany({});
  }

  public async findOne(id: number): Promise<User> {
    return await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  public async findByEmail(email: string): Promise<User> {
    return await this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  public async removeUser(id: number): Promise<User> {
    return await this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
