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
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  cars: Cars[];

  constructor(private carsService: CarsService ) {}
  ngOnInit() {}
    loadCars() {
        this.carsService.getCars().subscribe((response: Cars[]) => {
          console.log(response);
          this.cars = response;
        });
    }
}
