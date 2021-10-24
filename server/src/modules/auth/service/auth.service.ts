import { Injectable } from '@nestjs/common';
import { LoginUserInput } from '../dto/login-user.input';
import { RegisterUserInput } from '../dto/register-user.input';

@Injectable()
export class AuthService {
  public register(registerUserInput: RegisterUserInput) {
    return `This action returns all auth`;
  }

  public login(loginUserInput: LoginUserInput) {
    return 'This action adds a new auth';
  }

  public logout() {
    return `This action returns a # auth`;
  }
}
