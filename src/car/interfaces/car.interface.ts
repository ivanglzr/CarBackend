export enum FuelTypes {
  gasoline = 'gasoline',
  diesel = 'diesel',
  electric = 'electric',
}

export interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
  color?: string;
  isElectric: boolean;
  fuelType: FuelTypes;
}

export type CarWithoutId = Omit<Car, 'id'>;
