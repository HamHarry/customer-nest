import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('user')
  getHello(): string {
    return this.appService.getHello();
  }

  // TODO: อัพเดตข้อมูล
  @Post('user/update')
  getUserByname(
    @Body()
    body: {
      name: string;
      car: string;
      price: number;
      date: string;
      count: number;
    },
  ): string {
    return this.appService.getUserByname(body);
  }

  // TODO: ค้นหา
  @Get('user/calculate')
  getNameCalculate(
    @Query() query: { name: string; price: number; count: number },
  ): string {
    return this.appService.getNameCalculate(query);
  }

  // TODO: ค้นหาด้วย param
  @Get('user/:id')
  getHelloById(@Param('id') id: string): string {
    return this.appService.getHelloById(id);
  }
}
