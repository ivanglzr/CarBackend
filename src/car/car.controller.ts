import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';

import { CAR_ROUTES } from './car.routes';

import { CarService } from './car.service';

import type { SearchCar } from './interfaces/search-car.interface';
import type { Response } from 'src/common/interfaces/responses.interface';
import type {
  GetCarResponse,
  GetCarsResponse,
} from './interfaces/responses.interface';
import { CreateCarDto } from './dto/create-car.dto';

@Controller(CAR_ROUTES.BASE)
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Get()
  getCars(@Query() query: SearchCar): GetCarsResponse {
    return {
      statusCode: 200,
      message: 'Cars found',
      cars: this.carService.getCars(query),
    };
  }

  @Get(':id')
  getCar(@Param('id', ParseIntPipe) id: number): GetCarResponse {
    return {
      statusCode: 200,
      message: 'Car found',
      car: this.carService.getCar(id),
    };
  }

  @Post()
  postCar(@Body() car: CreateCarDto): Response {
    this.carService.postCar(car);

    return {
      statusCode: 201,
      message: 'Car created',
    };
  }
}
