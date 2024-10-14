import { Injectable } from '@nestjs/common';

import { FuelTypes, type Car } from './interfaces/car.interface';
import type { SearchCar } from './interfaces/search-car.interface';
import { CreateCarDto } from './dto/create-car.dto';

@Injectable()
export class CarService {
  private cars: Car[] = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Corolla',
      year: 2020,
      color: 'blue',
      isElectric: false,
      fuelType: FuelTypes.gasoline,
    },
    {
      id: 2,
      brand: 'Tesla',
      model: 'Model 3',
      year: 2021,
      isElectric: true,
      fuelType: FuelTypes.electric,
    },
    {
      id: 3,
      brand: 'Ford',
      model: 'F-150',
      year: 2019,
      color: 'red',
      isElectric: false,
      fuelType: FuelTypes.gasoline,
    },
    {
      id: 4,
      brand: 'Nissan',
      model: 'Leaf',
      year: 2022,
      isElectric: true,
      fuelType: FuelTypes.electric,
    },
    {
      id: 5,
      brand: 'Chevrolet',
      model: 'Bolt',
      year: 2021,
      color: 'yellow',
      isElectric: true,
      fuelType: FuelTypes.electric,
    },
    {
      id: 6,
      brand: 'Honda',
      model: 'Civic',
      year: 2020,
      color: 'black',
      isElectric: false,
      fuelType: FuelTypes.gasoline,
    },
    {
      id: 7,
      brand: 'BMW',
      model: 'X3',
      year: 2021,
      isElectric: false,
      fuelType: FuelTypes.diesel,
    },
    {
      id: 8,
      brand: 'Audi',
      model: 'A4',
      year: 2022,
      color: 'white',
      isElectric: false,
      fuelType: FuelTypes.gasoline,
    },
    {
      id: 9,
      brand: 'Hyundai',
      model: 'Kona',
      year: 2021,
      color: 'green',
      isElectric: true,
      fuelType: FuelTypes.electric,
    },
    {
      id: 10,
      brand: 'Volkswagen',
      model: 'ID.4',
      year: 2022,
      isElectric: true,
      fuelType: FuelTypes.electric,
    },
    {
      id: 11,
      brand: 'Kia',
      model: 'Niro',
      year: 2020,
      color: 'blue',
      isElectric: true,
      fuelType: FuelTypes.electric,
    },
    {
      id: 12,
      brand: 'Mazda',
      model: 'CX-5',
      year: 2020,
      color: 'red',
      isElectric: false,
      fuelType: FuelTypes.gasoline,
    },
    {
      id: 13,
      brand: 'Subaru',
      model: 'Outback',
      year: 2021,
      isElectric: false,
      fuelType: FuelTypes.gasoline,
    },
    {
      id: 14,
      brand: 'Porsche',
      model: 'Taycan',
      year: 2022,
      isElectric: true,
      fuelType: FuelTypes.electric,
    },
    {
      id: 15,
      brand: 'Mercedes-Benz',
      model: 'C-Class',
      year: 2020,
      color: 'silver',
      isElectric: false,
      fuelType: FuelTypes.gasoline,
    },
    {
      id: 16,
      brand: 'Volvo',
      model: 'XC40',
      year: 2021,
      color: 'black',
      isElectric: false,
      fuelType: FuelTypes.diesel,
    },
    {
      id: 17,
      brand: 'Jaguar',
      model: 'I-PACE',
      year: 2022,
      isElectric: true,
      fuelType: FuelTypes.electric,
    },
    {
      id: 18,
      brand: 'Chrysler',
      model: 'Pacifica',
      year: 2021,
      isElectric: false,
      fuelType: FuelTypes.gasoline,
    },
    {
      id: 19,
      brand: 'Land Rover',
      model: 'Range Rover',
      year: 2020,
      color: 'green',
      isElectric: false,
      fuelType: FuelTypes.diesel,
    },
    {
      id: 20,
      brand: 'Lincoln',
      model: 'Navigator',
      year: 2022,
      isElectric: false,
      fuelType: FuelTypes.gasoline,
    },
    {
      id: 21,
      brand: 'Buick',
      model: 'Enclave',
      year: 2021,
      color: 'purple',
      isElectric: false,
      fuelType: FuelTypes.gasoline,
    },
  ];

  getCars(query: SearchCar): Car[] {
    return this.filterCars(query);
  }

  getCar(id: number): Car {
    return this.cars.find((car) => car.id === id);
  }

  postCar(car: CreateCarDto) {
    const newCar = {
      ...car,
      id: this.cars.length + 1,
    } as Car;

    this.cars.push(newCar);
  }

  private filterCars(query: SearchCar): Car[] {
    return this.cars.filter((car) => {
      return Object.entries(query).every(([key, value]) => {
        return (
          car[key as keyof Car]?.toString().toLowerCase() ===
          value.toString().toLowerCase()
        );
      });
    });
  }
}
