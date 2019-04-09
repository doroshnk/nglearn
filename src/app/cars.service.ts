import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CarsService {
  constructor(private http: HttpClient ) {}
  getCars() {
      const H  = new HttpHeaders(
          {
              'Content-Type': 'application/json; charset=utf-8'
          }
      );
    //   H.set('Content-Type', 'application/json; charset=utf-8');
      return this.http.get('http://localhost:3000/cars', {headers: H});
    }
    addCar(carName: string) {
      const data = {
        name: carName,
        color: 'blue'
      };
      return this.http.post('http://localhost:3000/cars', data);
    }

    changeColor(car: any) {
        return this.http.put(`http://localhost:3000/cars/${car.id}`, car);
    }
    delCar(car: any) {
        return this.http.delete(`http://localhost:3000/cars/${car.id}`);
    }
}
