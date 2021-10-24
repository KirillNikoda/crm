import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
      signOptions: {
        expiresIn: process.env.JWT_LIFE_DURATION,
      },
    }),
  ],
  exports: [JwtModule],
})
export class CustomJwtModule {}
