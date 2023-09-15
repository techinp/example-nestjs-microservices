import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    @Inject('PAYMENT_SERVICE') private readonly paymentClient: ClientProxy,
    @Inject('ORDER_SERVICE') private readonly orderClient: ClientProxy,
    @Inject('CART_SERVICE') private readonly cartClient: ClientProxy,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  getPayment(): Observable<string> {
    return this.paymentClient.send({ cmd: 'get/payment' }, {});
  }

  getOrder(): Observable<string> {
    return this.orderClient.send({ cmd: 'get/order' }, {});
  }

  getCart(): Observable<string> {
    return this.cartClient.send({ cmd: 'get/cart' }, {});
  }
}
