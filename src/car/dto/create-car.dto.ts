import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { CarWithoutId, FuelTypes } from '../interfaces/car.interface';

export class CreateCarDto implements CarWithoutId {
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
