import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
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


  submitForm(form: NgForm) {
      console.log('sudmoit', form, this.viewChildForm);
  }
}
