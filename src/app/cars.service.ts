import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getLocalRefs } from '@angular/core/src/render3/discovery_utils';

@Injectable()
export class CarsService {
  constructor(private http: HttpClient ) {}
    getCars() {
      return this.http.get('http://localhost:3000/cars');
    }
}
