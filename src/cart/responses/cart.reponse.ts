import { Expose, Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

export class CartResponse {
  @Expose()
  _id: string;

  @Expose()
  products: string;

  @Expose()
  totalPrice: number;

  @Expose()
  totalItem: number;
}

export class CartListResponse {
  @Type(() => CartResponse)
  @ValidateNested()
  @Expose()
  data: CartResponse[];
}
