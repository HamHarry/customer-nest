import { Injectable } from '@nestjs/common';
import { CarRequest } from './requests/car.request';
import { InjectModel } from '@nestjs/mongoose';
import { Car, CarDocument } from './schemas/car.schema';
import { Model } from 'mongoose';

@Injectable()
export class CarService {
  constructor(
    @InjectModel(Car.name) private readonly carModel: Model<CarDocument>,
  ) {}

  async create(carRequest: CarRequest) {
    const createCar = await new this.carModel(carRequest).save();
    return createCar;
  }

  async getCar() {
    const findedCar = await this.carModel.find();
    return findedCar;
  }

  async getCarById(carId: string) {
    const findedCarByID = await this.carModel.findById(carId);
    return findedCarByID;
  }

  async updateCar(carId: string, updateCarRequest: CarRequest) {
    const updateCar = await this.carModel.findByIdAndUpdate(
      carId,
      updateCarRequest,
    );
    return updateCar;
  }

  async deleteCar() {
    return await this.carModel.deleteMany();
  }

  async deleteCarById(carId: string) {
    const deletedCar = await this.carModel.findByIdAndDelete(carId);
    return deletedCar;
  }
}
