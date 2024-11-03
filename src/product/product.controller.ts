import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ProductService } from './product.service';
import {
  CreateProductRequest,
  ProductRequest,
} from './requests/product.request';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() createProductRequest: CreateProductRequest) {
    return this.productService.create(createProductRequest);
  }

  @Get()
  getProduct() {
    return this.productService.getProducts();
  }

  @Get(':productId')
  getProductById(@Param('productId') productId: string) {
    return this.productService.getProductById(productId);
  }

  @Put(':productId')
  updateProductById(
    @Param('productId') productId: string,
    @Body() updateProductRequest: ProductRequest,
  ) {
    return this.productService.updateProductById(
      productId,
      updateProductRequest,
    );
  }

  @Delete()
  deleteProduct() {
    return this.productService.deleteProduct();
  }

  @Delete(':productId')
  deleteProductById(@Param('productId') productId: string) {
    return this.productService.deleteProductById(productId);
  }
}
