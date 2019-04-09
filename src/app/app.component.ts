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
    formData = {};
    forIsSubmited = false;

    addRandEmail() {
        const randEmail = 'dskljqlasd@daqw.com';
        console.log(123);
        // this.viewChildForm.setValue({
        //     user: {
        //         pass: '',
        //         email: randEmail
        //     },
        //    country: '',
        //    ans: ''
        // });
        this.viewChildForm.form.patchValue({
            user: {email: randEmail}
        });
    }

  submitForm(form: NgForm) {
      console.log('sudmoit', form);
      this.forIsSubmited = true;
      this.formData = this.viewChildForm.form.value;
      form.form.reset();
  }
}
