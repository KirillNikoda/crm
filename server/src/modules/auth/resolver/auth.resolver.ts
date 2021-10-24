import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { LoginUserInput } from '../dto/login-user.input';
import { RegisterUserInput } from '../dto/register-user.input';
import { Auth } from '../entities/auth.entity';
import { AuthService } from '../service/auth.service';

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => Auth)
  register(@Args('registerUserInput') registerUserInput: RegisterUserInput) {
    return this.authService.register(registerUserInput);
  }

  @Mutation(() => Auth)
  login(@Args('loginUserInput') loginUserInput: LoginUserInput) {
    return this.authService.login(loginUserInput);
  }

  @Mutation(() => Auth)
  logout() {}
}
