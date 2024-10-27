import { Expose, Type } from 'class-transformer';

export class ProductResponse {
  @Expose()
  _id: string;

  @Expose()
  name: string;

  @Expose()
  size: string;

  @Expose()
  price: number;
}

export class ProductResponseList {
  @Type(() => ProductResponse)
  @Expose()
  data: ProductResponse[];
}
