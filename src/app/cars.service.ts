import { Injectable } from '@angular/core';

@Injectable()
export class CarsService {
  cars = [
    {
      name: 'Ford',
      id: 1,
      year: 2010,
      color: 'yellow'
    },
    {
      name: 'Audi',
      id: 2,
      year: 2017,
      color: 'white'
    },
    {
      name: 'BMW',
      id: 3,
      year: 2015,
      color: 'red'
    },
    {
      name: 'Mercedes',
      id: 4,
      year: 2013,
      color: 'blue'
    }
  ];
}
