import { Injectable } from '@nestjs/common';
import { UserService } from './user/user.service';
import { CarService } from './car/car.service';
import { ProductService } from './product/product.service';

@Injectable()
export class AppService {
  constructor(
    private readonly userService: UserService,
    private readonly carService: CarService,
    private readonly productService: ProductService,
  ) {}
}
