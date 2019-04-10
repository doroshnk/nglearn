import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';

// import {catch} from 'rxjs/add/operator/catch';

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
      return this.http
      .get('http://localhost:3000/cars', {headers: H})
      .pipe(
          retry(2),
          catchError(this.errorHandle)
      );
    //   .catchError(() => {
    //   });
    }
    getTitle() {
        return this.http.get('http://localhost:3000/title')
        .pipe(
            map((data: any) => data.name)
        );
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

    private errorHandle(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError('Something bad happened; please try again later.');
    }
}
