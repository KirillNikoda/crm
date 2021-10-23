import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserDTO } from 'src/graphql';
import { UsersService } from './service/users.service';

@Resolver('User')
export class UsersResolvers {
  constructor(private usersService: UsersService) {}

  @Query('users')
  async users() {
    return this.usersService.getAllUsers();
  }

  @Query('user')
  async user(@Args('id') id: string) {
    return this.usersService.getUser(id);
  }

  @Mutation('createUser')
  async create(@Args('input') createUserDTO: CreateUserDTO) {
    return this.usersService.createUser(createUserDTO);
  }

  @Mutation('deleteUser')
  async delete(@Args('id') id: string) {
    return this.usersService.deleteUser(id);
  }
}
