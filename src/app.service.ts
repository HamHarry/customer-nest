import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHelloById(id: string): string {
    return `Hello ${id}!`;
  }

  getUserByname(body: {
    name: string;
    price: number;
    car: string;
    date: string;
    count: number;
  }): string {
    const { name = '', price = 0, count = 0, car = '', date = '' } = body;
    return `name: ${name}, car is ${car}, price: ${price}, date: ${date} count: ${count}`;
  }

  getNameCalculate(query: {
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
}
