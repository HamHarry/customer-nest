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

  getHello(): string {
    return 'Hello World!';
  }

  getProfileByname(body: {
    name: string;
    price: number;
    car: string;
    date: string;
    count: number;
  }): string {
    const { name = '', price = 0, count = 0, car = '', date = '' } = body;
    return `name: ${name}, car is ${car}, price: ${price}, date: ${date} count: ${count}`;
  }

  getProfileCalculate(query: {
    name: string;
    price: number;
    count: number;
  }): string {
    return `Hello ${this.getName(query.name)} summary is ${this.getCalculate(query.price, query.count)}`;
  }
  getName(name: string): string {
    return name;
  }
  getCalculate(price: number, count: number): number {
    return price * count;
  }

  getProfileById(userId: string, carId: string, productId: string) {
    try {
      const user = this.userService.getUser(userId);
      const car = this.carService.getCar(carId);
      const product = this.productService.getProduct(productId);

      return `User: ${user.fname} ${user.lname} has car: ${car.brand} use: ${product.name} size: ${product.size} price: ${product.price} Baht`;
    } catch (error) {
      console.log(error);
    }
  }
}
