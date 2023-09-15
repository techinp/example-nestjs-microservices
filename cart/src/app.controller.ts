import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'get/cart' })
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('get_all')
  getHelloEvent(): string {
    return this.appService.getHello();
  }
}
