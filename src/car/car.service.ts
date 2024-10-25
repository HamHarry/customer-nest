import { Injectable, NotFoundException } from '@nestjs/common';
import { CarResponse } from './responses/car.response';
import { CarRequest } from './requests/car.request';

@Injectable()
export class CarService {
  create(carRequest: CarRequest) {
    return carRequest;
  }

  getCar(carId: string): CarResponse {
    const cars: CarResponse[] = [
      { id: '1', brand: 'Toyota' },
      { id: '2', brand: 'Honda' },
    ];

    if (!carId) throw new NotFoundException('Car Not found');

    const findedCar = cars.find((car) => {
      return car.id === carId;
    });
    return findedCar;
  }
}
