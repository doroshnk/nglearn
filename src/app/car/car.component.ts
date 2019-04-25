import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  // templateUrl: './car.component.html',
  template: `<h2> single car</h2>`,
  // styleUrls: ['./car.component.css']
  styles: [`
      h2 {
        color: red;
      }
    `]
})
export class CarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
