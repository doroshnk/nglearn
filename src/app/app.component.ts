import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
      input.ng-invalid.ng-touched {
        border: 1px solid red;
    }
`]
})
export class AppComponent {
    @ViewChild('form') viewChildForm: NgForm;
  answers = [{
    type: 'yes',
    text: 'Да'
  }, {
    type: 'no',
    text: 'Нет'
}];
defAnsw = 'no';
defCountry = 'ru';



  submitForm(form: NgForm) {
      console.log('sudmoit', form);
  }
}
