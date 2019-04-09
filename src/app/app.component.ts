import { Component, OnInit } from '@angular/core';
import { CarsService } from './cars.service';
// import { Response } from '@angular/common/http';

interface Cars {
    name: string;
    color: string;
    id: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  preserveWhitespaces: true
})
export class AppComponent implements OnInit {
  cars: Cars[];
  carName = '';
  constructor(private carsService: CarsService ) {}
  addCar() {
      this.carsService
      .addCar(this.carName)
      .subscribe((car: Cars) => {
        console.log(car);
        this.cars.push(car);
      });
      this.carName = '';
  }
  ngOnInit() {}
    loadCars() {
        this.carsService.getCars().subscribe((response: Cars[]) => {
          console.log(response);
          this.cars = response;
        });
    }
}
