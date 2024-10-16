import {
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

import { CAR_ROUTES } from './car.routes';

import { CarService } from './car.service';

import type { SearchCar } from './interfaces/search-car.interface';
import { CreateCarDto } from './dto/create-car.dto';

import { ValidateIdPipe } from 'src/common/pipes/validate-id.pipe';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller(CAR_ROUTES.BASE)
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Get()
  async getCars(@Query() query: SearchCar) {
    const cars = await this.carService.getCars(query);

    const message =
      cars.length === 0
        ? "There isn't any cars"
        : `Car${cars.length === 1 ? '' : 's'} found`;

    return {
      statusCode: 200,
      message,
      cars,
    };
  }

  @Get(':id')
  async getCar(@Param('id', ValidateIdPipe) id: string) {
    const car = await this.carService.getCar(id);

    if (!car) throw new NotFoundException('Car not found');

    return {
      statusCode: 200,
      message: 'Car found',
      car,
    };
  }

  @Post()
  async postCar(@Body() car: CreateCarDto) {
    const newCar = await this.carService.postCar(car);

    if (!newCar) throw new ConflictException('Car already exists');

    return {
      statusCode: 201,
      message: 'Car created',
    };
  }

  @Put(':id')
  async putCar(
    @Param('id', ValidateIdPipe) id: string,
    @Body() car: UpdateCarDto,
  ) {
    const updatedCar = await this.carService.putCar(id, car);

    if (!updatedCar) throw new NotFoundException('Car not found');

    return {
      statusCode: 200,
      message: 'Car updated',
    };
  }

  @Delete(':id')
  async deleteCar(@Param('id', ValidateIdPipe) id: string) {
    const deletedCar = await this.carService.deleteCar(id);

    if (!deletedCar) throw new NotFoundException();

    return {
      statusCode: 200,
      message: 'Car deleted',
    };
  }
}
