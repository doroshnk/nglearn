import { Component, Input, ContentChild, ElementRef,
OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements
OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy  {

  @Input('carItem') car: {name: string, year: number};
  @Input('name') name: string;
  @ContentChild('carHeading') carHeading: ElementRef;
  carItem = false;

  constructor() {
    console.log('constructor');
  }
  ngOnInit(){
    console.log('ngOnInit')
  }
  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges',changes)
  }
  ngDoCheck(){
    console.log('ngDoCheck')
  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit')
  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked')
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit')
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked')
  }
  ngOnDestroy(){
    console.log('ngOnDestroy')
  }
}
