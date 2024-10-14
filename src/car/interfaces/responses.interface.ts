import { Response } from 'src/common/interfaces/responses.interface';

import { Car } from './car.interface';

export interface GetCarResponse extends Response {
  car: Car;
}

export interface GetCarsResponse extends Response {
  cars: Car[];
}
