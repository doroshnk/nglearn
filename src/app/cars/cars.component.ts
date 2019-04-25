import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  addCarStatus = '';
  inputText = '';
  inputTextRef = '';
  inputTextEnter = '';

  constructor(){}

  addCar() {
    this.addCarStatus = 'cars added';
  }

  keyUp(event: Event) {
    this.inputText = (<HTMLInputElement>event.target).value;
  }

  keyUpEnter(event: Event) {
    this.inputTextEnter = (<HTMLInputElement>event.target).value;
  }

  keyUpRef(val: string) {
    this.inputTextRef = val;
  }
}
