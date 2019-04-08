import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { Cars1Component } from './cars1/cars1.component';
import { CarComponent } from './car/car.component';
import { BackgorundDirective } from './directives/background.directive';
import { MyDirectiveDirective } from './directives/my-directive.directive';

import { FormsModule } from '@angular/forms';
import { AddCarComponent } from './add-car/add-car.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    Cars1Component,
    CarComponent,
    AddCarComponent,
    BackgorundDirective,
    MyDirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
