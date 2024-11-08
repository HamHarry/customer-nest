import { Type } from 'class-transformer';
import { IsNotEmpty, ValidateNested } from 'class-validator';
import { ProductRequest } from 'src/product/requests/product.request';

export class CartRequest {
  @IsNotEmpty()
  products: ProductRequest[];
}

export class CreateCartRequest {
  @Type(() => CartRequest)
  @ValidateNested()
  @IsNotEmpty()
  cartData: CartRequest;
}
