import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CarService } from './car.service';
import { CarRequest } from './requests/car.request';

@Controller('car')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Post()
  create(@Body() carRequest: CarRequest) {
    return this.carService.create(carRequest);
  }

  @Get()
  getCar() {
    return this.carService.getCar();
  }

  @Get(':carId')
  getCarById(@Param('carId') carId: string) {
    return this.carService.getCarById(carId);
  }

  @Put(':carId')
  updateCar(
    @Param('carId') carId: string,
    @Body() updateCarRequest: CarRequest,
  ) {
    return this.carService.updateCar(carId, updateCarRequest);
  }

  @Delete()
  deleteCar() {
    return this.carService.deleteCar();
  }

  @Delete(':carId')
  deleteCarById(@Param('carId') carId: string) {
    return this.carService.deleteCarById(carId);
  }
}
