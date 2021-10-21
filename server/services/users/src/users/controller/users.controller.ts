import { Controller, Inject } from '@nestjs/common';
import {
  ClientProxy,
  EventPattern,
  MessagePattern,
} from '@nestjs/microservices';

@Controller('users')
export class UsersController {
  constructor(@Inject('EMAIL_SERVICE') private client: ClientProxy) {}

  @MessagePattern('test')
  async test(data: number) {
    console.log('hit users service', `data is ${data}`);

    const test = await this.client.send('second', 'hello mail service');
    console.log(test);
    return test;
  }
}
