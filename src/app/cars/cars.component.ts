import { Component,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CarsComponent {


  cars: {name: string, year: number}[] = [
    {name: 'Ford', year: 2011},
    // {name: 'Mazda', year: 2015},
    // {name: 'BMW', year: 1999}
  ];
  constructor(){

  }

  updateCarList(car: {name: string, year: number}){
    this.cars.push({name: car.name, year: car.year});
  }
  changeCN(){
    this.cars[0].name = 'lada';
  }

  deleteCar() {
    this.cars.splice(0,1);
  }


}
