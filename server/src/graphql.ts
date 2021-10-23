/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateUserDTO {
  email: string;
  password: string;
}

export class UpdateUserDTO {
  id: string;
  email?: Nullable<string>;
  name?: Nullable<string>;
  password?: Nullable<string>;
}

export class User {
  id: string;
  email: string;
  name?: Nullable<string>;
}

export abstract class IQuery {
  abstract users(): User[] | Promise<User[]>;

  abstract user(id: string): User | Promise<User>;
}

export abstract class IMutation {
  abstract createUser(input?: Nullable<CreateUserDTO>): User | Promise<User>;

  abstract updateUser(
    input?: Nullable<UpdateUserDTO>
  ): Nullable<User> | Promise<Nullable<User>>;

  abstract deleteUser(id: string): Nullable<User> | Promise<Nullable<User>>;
}

type Nullable<T> = T | null;
