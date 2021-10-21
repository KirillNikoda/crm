import { Controller, Inject } from '@nestjs/common';
import {
  ClientProxy,
  EventPattern,
  MessagePattern,
} from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor() {}

  @MessagePattern('second')
  async getHello(data: string) {
    console.log(data);
    console.log(12312321);

    return ' hello world baby world uuuh';
  }
}
