import { Module } from '@nestjs/common';
import { CarService } from './car.service';
import { CarController } from './car.controller';

@Module({
  imports: [],
  exports: [CarService],
  controllers: [CarController],
  providers: [CarService],
})
export class CarModule {}
