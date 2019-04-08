import { Component } from '@angular/core';

@Component({
//   selector: '.app-cars',
  selector: 'app-cars1',
  templateUrl: './cars1.component.html',
  styleUrls: ['./cars1.component.css']
})
export class Cars1Component {
  canAddCars = false;
  addCarStatus = '';
  addCarStatusBolean = false;
  inputText = '';
  inputText2 = '';
  inputText3 = '';
  carName = '';

  cars1 = ['ford', 'bmw', 'audi', 'honda', 'mazda'];
  cars: {name: string, year: number}[] = [
    {
        name: 'Ford',
        year: 2015
    },
    {
        name: 'Mazda',
        year: 2011
    },
    {
        name: 'Audi',
        year: 2017
    },
  ];
  items = [{id: 4, name: 'item 1'}, {id: 6, name: 'item 6'}, {id: 9, name: 'item 9'}];
  itemsDate = [
      new Date(2015, 3, 17),
      new Date(2017, 8, 14),
      new Date(2013, 3, 23),
      new Date(2017, 4, 4),
  ];
  constructor() {
      // setTimeout(() => {
          //     this.canAddCars = true;
          // }, 4000);
        }
  addStatus() {
      this.addCarStatus = 'car is add';
      this.addCarStatusBolean = true;
    //   this.cars.push(this.carName);
      this.carName = '';
  }
  onKeyUp(event: Event) {
      console.log(event);
      this.inputText = ( event.target as HTMLInputElement ).value;
  }
  onKeyUpVal(val) {
      this.inputText2 = val;
  }
  onKeyUpEnter(event: KeyboardEvent) {
      console.log(event);
      if (event.keyCode === 13) {
        this.inputText3 = (event.target as HTMLInputElement).value;
      }
  }
  onKeyUpEnter2(event: KeyboardEvent) {
      console.log(event);
      this.inputText3 = (event.target as HTMLInputElement).value;
  }

  getLengthName(car: string) {
      return car.length > 4 ? true : false;
  }

}
