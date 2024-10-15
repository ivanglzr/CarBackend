import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

import { FuelTypes } from '../interfaces/fuel-types.interface';

@Schema({ timestamps: true })
export class Car {
  @Prop({ required: true, trim: true, minlength: 2 })
  brand: string;

  @Prop({ required: true, trim: true, minLength: 2 })
  model: string;

  @Prop({ required: true })
  year: number;

  @Prop({ trim: true, minlength: 2 })
  color?: string;

  @Prop({ required: true })
  isElectric: boolean;

  @Prop({ required: true, enum: FuelTypes })
  fuelType: FuelTypes;
}

export const CarSchema = SchemaFactory.createForClass(Car);
