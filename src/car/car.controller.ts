import { Controller, Post, Body } from '@nestjs/common';
import { CarService } from './car.service';
import { CarRequest } from './requests/car.request';

@Controller('car')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Post()
  create(@Body() carRequest: CarRequest) {
    return this.carService.create(carRequest);
  }
}
