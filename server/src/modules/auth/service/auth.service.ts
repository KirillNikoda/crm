import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from 'src/modules/users/service/users.service';
import { LoginUserInput } from '../dto/login-user.input';
import { RegisterUserInput } from '../dto/register-user.input';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from 'src/modules/users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  public async register(registerUserInput: RegisterUserInput): Promise<User> {
    const isEmailBusy = await this.validateEmail(registerUserInput.email);

    if (isEmailBusy) {
      throw new BadRequestException('Email is already taken');
    }

    const createdUser = await this.usersService.createUser(registerUserInput);

    return createdUser;
  }

  public async login(loginUserInput: LoginUserInput) {
    const user = (await this.validateEmail(loginUserInput.email)) as User;

    if (!user) {
      throw new UnauthorizedException('Invalid email');
    }

    const isPassValid = await this.validatePass(
      loginUserInput.password,
      user.password
    );

    if (!isPassValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const token = await this.jwtService.sign({ id: user.id });

    const { password, ...rest } = user;

    return {
      ...rest,
      access_token: token,
    };
  }

  private async validateEmail(email: string): Promise<boolean | User> {
    const user = await this.usersService.findByEmail(email);

    if (user) {
      return user;
    }

    return false;
  }

  private async validatePass(password: string, hashedPass: string) {
    return await bcrypt.compare(password, hashedPass);
  }
}
