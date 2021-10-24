import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from '../dto/create-user.input';
import { UsersService } from '../service/users.service';
import { User } from '../entities/user.entity';

@Resolver((of) => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query((returns) => [User], { name: 'users' })
  async findAll(): Promise<User[]> {
    return this.usersService.getAllUsers();
  }

  @Query((returns) => User, { name: 'user' })
  async findOne(@Args('id', { type: () => Int }) id: number): Promise<User> {
    return this.usersService.getUser(id);
  }

  @Mutation((returns) => User)
  async createUser(
    @Args('input') createUserInput: CreateUserInput
  ): Promise<User> {
    return this.usersService.createUser(createUserInput);
  }

  @Mutation((returns) => User)
  async removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.deleteUser(id);
  }
}
