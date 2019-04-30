import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  headerText = 'create directive ';
  items = [1,2,3,4,5]
  cur = 1;

  onCLick(item: number) {
    this.cur = item;
  }
}
