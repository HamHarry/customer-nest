import { Type } from 'class-transformer';
import { IsNotEmpty, ValidateNested } from 'class-validator';

export class ProductRequest {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  size: string;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  type: string;
}

export class CreateProductRequest {
  @Type(() => ProductRequest)
  @ValidateNested()
  @IsNotEmpty()
  productData: ProductRequest;
}
