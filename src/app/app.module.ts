import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PovPipe } from './pov.pipe';
import { CarFilterPipe } from './car-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PovPipe,
    CarFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
