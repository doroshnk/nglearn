import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  carYear = 2000;
  carName = '';

  cars: {name: string, year: number}[] = [
    {name: 'Ford', year: 2011},
    {name: 'Mazda', year: 2015},
    {name: 'BMW', year: 1999}
  ];
  constructor(){

  }

  addCar() {
    this.cars.push({name: this.carName, year: this.carYear});
    this.carName = '';
    this.carYear = 2000;
  }
}
