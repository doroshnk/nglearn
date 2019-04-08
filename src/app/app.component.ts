import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learning-ang';
  items  = [1, 2, 3, 4];
  hedaerText = 'create a directory';
  current = 1;
  onCLick(num: number) {
    this.current = num;
    console.log(this.current);
  }
}
