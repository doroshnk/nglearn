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
  colors = [
      'red',
      'blue',
      'green',
      'pink',
      'yellow',
      'grey',
  ];
  carName = '';
  appTitle;
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
  ngOnInit() {
    const a =  this.carsService.getTitle();
    console.log(a);
    this.appTitle = a;
//    .subscribe(
//        (data: any) => {
//            this.appTitle = data.name;
//        }
//    );
  }
    loadCars() {
        this.carsService.getCars().subscribe(
            (response: Cars[]) => {
                console.log(response);
                this.cars = response;
            },
            (error) => {
                 console.log(error);
            }
        );
    }
    randomColor() {
        const inx = Math.round(Math.random() * (this.colors.length - 1));
        return this.colors[inx];
    }

    newColor(car: Cars) {
        car.color = this.randomColor();
        this.carsService.changeColor(car).subscribe((d) => {
            console.log(d);
        });
    }
    delCar(car: Cars) {
        this.carsService.delCar(car).subscribe((d) => {
            console.log(d);
            this.cars = this.cars.filter((c) => {
               return c.id !== car.id;
            });
        });
    }
}
