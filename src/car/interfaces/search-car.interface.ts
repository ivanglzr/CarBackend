import { Car } from './car.interface';

export type SearchCar = Partial<Omit<Car, 'id'>>;
