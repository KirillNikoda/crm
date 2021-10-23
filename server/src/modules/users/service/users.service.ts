import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from 'src/graphql';
import { PrismaService } from 'src/modules/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  public async createUser(createUserDTO: CreateUserDTO) {
    return await this.prisma.user.create({
      data: createUserDTO,
    });
  }

  public async getAllUsers() {
    return await this.prisma.user.findMany({});
  }

  public async getUser(id: string) {
    return await this.prisma.user.findUnique({
      where: {
        id: parseInt(id),
      },
    });
  }

  public async deleteUser(id: string) {
    return await this.prisma.user.delete({
      where: {
        id: parseInt(id),
      },
    });
  }
}
