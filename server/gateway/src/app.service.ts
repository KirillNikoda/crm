import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('GATEWAY') private client: ClientProxy) {
    console.log(client);
    console.log(process.env.NODE_ENV);
  }
  getHello(): string {
    return 'Superior update';
  }
}
