import { InputType, PartialType } from '@nestjs/graphql';
import { RegisterUserInput } from './register-user.input';

@InputType()
export class LoginUserInput extends PartialType(RegisterUserInput) {}
