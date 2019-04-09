import { ConsoleService } from './console.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CarsService {
    constructor(private consoloService: ConsoleService) {}

    cars = [
        {
        name: 'Ford',
        isSold: false
        },
        {
        name: 'Mazda',
        isSold: true
        },
        {
        name: 'Mercedes',
        isSold: false
        }
    ];

    addCar(name: string) {
      this.cars.push({isSold: false, name});
      this.consoloService.log(`car ${name} has benn add`);
    }
}
