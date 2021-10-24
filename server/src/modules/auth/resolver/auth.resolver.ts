import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { User } from 'src/modules/users/entities/user.entity';
import { LoginUserInput } from '../dto/login-user.input';
import { RegisterUserInput } from '../dto/register-user.input';
import { Login } from '../entities/login.entity';
import { AuthService } from '../service/auth.service';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => User)
  register(@Args('registerUserInput') registerUserInput: RegisterUserInput) {
    return this.authService.register(registerUserInput);
  }

  @Mutation(() => Login)
  login(@Args('loginUserInput') loginUserInput: LoginUserInput) {
    return this.authService.login(loginUserInput);
  }
}
