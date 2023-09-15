import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Observable } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('payment')
  getPayment(): Observable<string> {
    return this.appService.getPayment();
  }

  @Get('order')
  getOrder(): Observable<string> {
    return this.appService.getOrder();
  }

  @Get('cart')
  getCart(): Observable<string> {
    return this.appService.getCart();
  }
}
