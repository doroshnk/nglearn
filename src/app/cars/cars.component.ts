import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  addCarStatus = false;
  carName = '';

  cars = ['Ford','BMW','Audi'];
  items = [
    {id:1,name:'item1'},
    {id:7,name:'item7'},
    {id:3,name:'item3'},
    {id:5,name:'item5'}
];
  constructor(){}

  addCar() {
    this.addCarStatus = true;
    this.cars.push(this.carName);
    this.carName = '';
  }
}
