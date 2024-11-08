import { Body, Controller, Get, Post } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartRequest } from './requests/cart.request';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  create(@Body() createCartRequest: CreateCartRequest) {
    return this.cartService.createCart(createCartRequest);
  }

  @Get()
  get() {
    return this.cartService.getCarts();
  }
}
