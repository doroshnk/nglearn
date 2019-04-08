import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
//   template: ``,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 @Input() carSearch: string;
  cars = [
      {name: 'bmw', descr: 'WDM 5'},
      {name: 'mazda', descr: 'WDM4'},
      {name: 'ford', descr: 'WDM 3'},
      {name: 'vw', descr: 'WDM 2'},
      {name: 'audi', descr: 'WDM 1'}
  ];
  num = 2;
  title = 'nglearn';
  name = 'My Name';
  pi = Math.PI;
  money = 350;
  date = new Date();
  amount = 0.45;
  object = {
    foo: 'bar',
    baz: 'qwe',
    nested: {
        xyz: 3,
        numbers: [1, 2, 3]
    },
  };
}
