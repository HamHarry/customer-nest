import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('profile/:userid/:carid/:productid')
  getProfileById(
    @Param('userid') userId: string,
    @Param('carid') carId: string,
    @Param('productid') productId: string,
  ) {
    return this.appService.getProfileById(userId, carId, productId);
  }

  // TODO: อัพเดตข้อมูล
  @Post('profile/update')
  getProfileByname(
    @Body()
    body: {
      name: string;
      car: string;
      price: number;
      date: string;
      count: number;
    },
  ): string {
    return this.appService.getProfileByname(body);
  }

  // TODO: ค้นหา
  @Get('profile/calculate')
  getProfileCalculate(
    @Query() query: { name: string; price: number; count: number },
  ): string {
    return this.appService.getProfileCalculate(query);
  }
}
