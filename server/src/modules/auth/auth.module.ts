import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { AuthResolver } from './resolver/auth.resolver';
import { AuthService } from './service/auth.service';
import { CustomJwtModule } from '../jwt/jwt.module';

@Module({
  imports: [UsersModule, CustomJwtModule],
  providers: [AuthResolver, AuthService],
})
export class AuthModule {}
