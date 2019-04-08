import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  addCarStatus = false;
  carName = '';

  cars = ['Ford','BMW','Audi','Lada','Mazda'];

  dates = [
    new Date(2015,3,10),
    new Date(2007,23,1),
    new Date(2011,4,8),
    new Date(2014,1,1),
  ]
  constructor(){}

  addCar() {
    this.addCarStatus = true;
    this.cars.push(this.carName);
    this.carName = '';
  }
}
