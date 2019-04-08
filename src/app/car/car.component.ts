import { Component, OnInit, Input, ContentChild, ElementRef, ViewChild,
       OnChanges, SimpleChanges, DoCheck, AfterContentChecked, AfterContentInit,
    AfterViewInit, AfterViewChecked, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
//   template: `
//   <h2>Single car</h2>
//   <p>parhgaraf</p>
//   `,
  styleUrls: ['./car.component.css']
//   styles: [`
//   h2{color: red;}
//   `]
})
export class CarComponent implements
  OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
    @Input('carItem') car: {name: string, year: number};
    @ContentChild('itemHead') itemHead: ElementRef;
    @ViewChild('alertInfo') alertInfo: ElementRef;
    private carItem = false;
    carName = 'Frod';
    carYear = 2015;

    constructor() {
        console.log('constructor');
    }
    ngOnInit() {
        console.log('ngOnInit');
    }
    ngOnChanges(changes: SimpleChanges): void {
        console.log('ngOnChanges', changes);
    }
    ngDoCheck() {
        console.log('ngDoCheck');
    }
    ngAfterContentInit() {
        console.log('ngAfterContentInit');
    }
    ngAfterContentChecked() {
        console.log('ngAfterContentChecked');
    }
    ngAfterViewtInit() {
        console.log('ngAfterViewtInit');
    }
    ngAfterViewtChecked() {
        console.log('ngAfterViewtChecked');
    }
    ngOnDestroy() {
        console.log('ngOnDestroy');
    }

    // ngAfterViewInit() {
    //     console.log(this.alertInfo);
    //     console.log(this.itemHead);
    // }

    // getName() {
    //     return this.carName;
    // }
}
