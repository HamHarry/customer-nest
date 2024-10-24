import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('user')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('user/calculate')
  getNameCalculate(
    @Query() query: { name: string; price: number; count: number },
  ): string {
    return this.appService.getNameCalculate(query);
  }

  // TODO: จำไว้ดีๆนะจ้ะ !!!
  @Get('user/query')
  getHelloByQuery(
    @Query() query: { name: string; price: number; count: number },
  ): string {
    return this.appService.getHelloByQuery(query);
  }

  @Get('user/:id')
  getHelloById(@Param('id') id: string): string {
    return this.appService.getHelloById(id);
  }

  @Post('user')
  getUserByname(
    @Body() body: { name: string; price: number; count: number },
  ): string {
    return this.appService.getUserByname(body);
  }
}
