import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
      trigger('clickedDiv', [
          state('start', style({
              backgroundColor: 'blue',
              width: '150px',
              height: '150px',
          })),
          state('end', style({
              backgroundColor: 'red',
              width: '300px',
              height: '300px',
          })),
          state('active', style({
              backgroundColor: 'yellow',
              width: '170px',
              height: '170px',
          })),
          transition('start <=> end', animate('1000ms ease-in')),
        //   transition('end => start', animate('800ms 500ms ease-out')),
          transition('start => active', animate(400)),
          transition('active => end', animate(400))
      ]),
      trigger('multi', [
          state('start', style({
              border: '5px solid black',
              width: '150px',
              height: '150px',
          })),
          state('end', style({
              backgroundColor: 'blue',
              width: '170px',
              height: '170px',
          })),
           transition('start <=> end', [
               style({backgroundColor: 'red'}),
               animate('1500ms ease-in', style({
                   backgroundColor: 'yellow'
               })),
               animate('1500ms ease-in', style({
                   backgroundColor: 'green',
                   width: '200px',
                   height: '200px',
               })),
                animate(1000)
           ]),
      ])
  ]
})
export class AppComponent {
  clickedDivState = 'start';
  multiState = 'start';
  changeDivState() {
    this.clickedDivState = 'end';
    setTimeout(() => {
        this.clickedDivState = 'start';
    }, 2000);
  }
}
