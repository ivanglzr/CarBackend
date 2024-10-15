import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Car } from '../schemas/car.schema';
import { FuelTypes } from '../interfaces/fuel-types.interface';

export class CreateCarDto implements Car {
  @IsString()
  @IsNotEmpty()
  brand: string;

  @IsString()
  @IsNotEmpty()
  model: string;

  @IsNumber()
  year: number;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  color?: string;

  @IsBoolean()
  isElectric: boolean;

  @IsEnum(FuelTypes)
  fuelType: FuelTypes;
}
