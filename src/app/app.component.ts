import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  answers = [{
    type: 'yes',
    text: 'Да'
  }, {
    type: 'no',
    text: 'Нет'
  }];

  form: FormGroup;
  maxPasswLenth = 5;
   ngOnInit() {
       this.form = new FormGroup({
            user: new FormGroup({
                email: new FormControl('', [Validators.required, Validators.email]),
                pass: new FormControl('', [Validators.required, this.checkPassword.bind(this)]),
            }),
            country: new FormControl('ru'),
            answer: new FormControl('no')
       });
  }
  onSubmit() {
      console.log('sudmit', this.form);
  }
  checkPassword(control: FormControl) {
    if (control.value.length < this.maxPasswLenth) {
        return {lengthEror: true};
    }
  }
}
