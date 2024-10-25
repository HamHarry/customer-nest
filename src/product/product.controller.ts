import { Controller, Post, Body } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductRequest } from './requests/product.request';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() productRequest: ProductRequest) {
    return this.productService.create(productRequest);
  }
}
