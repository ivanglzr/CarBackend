import { Injectable } from '@nestjs/common';

import type { SearchCar } from './interfaces/search-car.interface';
import type { CreateCarDto } from './dto/create-car.dto';
import type { Model } from 'mongoose';
import type { UpdateCarDto } from './dto/update-car.dto';

import { InjectModel } from '@nestjs/mongoose';

import { Car } from './schemas/car.schema';

@Injectable()
export class CarService {
  constructor(@InjectModel(Car.name) private carModel: Model<Car>) {}

  async getCars(query: SearchCar): Promise<Car[]> {
    return await this.carModel.find({ ...query });
  }

  async getCar(id: string): Promise<Car> {
    return await this.carModel.findById(id);
  }

  async postCar(car: CreateCarDto) {
    const newCar = new this.carModel(car);

    await newCar.save();

    return newCar;
  }

  async putCar(id: string, car: UpdateCarDto) {
    const updatedCar = await this.carModel.findByIdAndUpdate(id, car);

    return updatedCar;
  }
}
