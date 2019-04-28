import { Component, Input, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent  {

  @Input('carItem') car: {name: string, year: number};
  @ContentChild('carHeading') carHeading: ElementRef;
  carItem = false;

  constructor() {
  }
  ngAfterViewInit(){
    console.log(this.carHeading)
  }
}
