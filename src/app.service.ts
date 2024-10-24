import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getHelloById(id: string): string {
    return `Hello ${id}!`;
  }
  getHelloByQuery(query: {
    name: string;
    price: number;
    count: number;
  }): string {
    const { name = '', price = 0, count = 0 } = query;
    const sum = price + count;
    return `Hello ${name} ${sum}`;
  }
  getUserByname(body: { name: string; price: number; count: number }): string {
    const { name = '', price = 0, count = 0 } = body;
    const sum = price * count;
    return `Hello ${name} summary is ${sum}`;
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
