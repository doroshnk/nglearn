import { Component, EventEmitter, Output } from '@angular/core';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css'],
//   providers: [CarsService]
})
export class CarAddComponent {

//   @Output() onCarAdd = new EventEmitter<string>();
  carName = '';

  constructor(private service: CarsService) {}
  addCar() {
    // this.onCarAdd.emit(this.carName);
    this.service.addCar(this.carName);
    this.carName = '';
  }

}
