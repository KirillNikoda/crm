import { Controller, Inject } from '@nestjs/common';
import {
  ClientProxy,
  EventPattern,
  MessagePattern,
} from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(@Inject('MAIL_SERVICE') private client: ClientProxy) {}

  @MessagePattern('second')
  async getHello(data: string) {
    console.log(data);
    console.log(12312321);

    return 'baby world super puper uuuuhhhh';
  }
}
