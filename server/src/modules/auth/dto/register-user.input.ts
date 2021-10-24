import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, MinLength } from 'class-validator';

@InputType()
export class RegisterUserInput {
  @IsEmail()
  @Field()
  email: string;

  @MinLength(4)
  @Field()
  password: string;

  @Field({ nullable: true })
  name?: string;
}
