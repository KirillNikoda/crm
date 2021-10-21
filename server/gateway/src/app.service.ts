import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('USERS_SERVICE') private client: ClientProxy) {}
  async getHello() {
    const res = await this.client.send('test', 123);

    return res;
  }
}
