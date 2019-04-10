import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsPageComponent } from './cars-page.component';
import { CarPageComponent } from './car-page/car-page.component';
import { CarsService } from '../cars.service';
import { CarsRoutingModule } from './cars-routing.module';

@NgModule({
    declarations: [CarsPageComponent, CarPageComponent],
    providers: [CarsService],
    imports: [CommonModule, CarsRoutingModule]
})
export class CarsModule {

}
