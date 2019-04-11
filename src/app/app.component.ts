import { Component } from '@angular/core';
import { divTrigger, changeWithTrriger } from '../app.animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [divTrigger, changeWithTrriger]
})
export class AppComponent {

    isVisible = false;

    onAnimationStart(event: AnimationEffect) {
      console.log(event);
    }
    onAnimationDone(event: AnimationEffect) {
        console.log(event);
    }

}
