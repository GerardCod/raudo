import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  [x: string]: any;

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      'newPassword': new FormControl(null),
      'confirm': new FormControl(null)
    });

    this.form.controls['newPassword'].setValidators([Validators.required, this.length]);
    this.form.controls['confirm'].setValidators([Validators.required, this.validate.bind(this.form)]);
  }

  ngOnInit() {
  }

  length (control: FormControl): {[s: string]: boolean} {
    let value = '' + control.value + '';
    if (value.length < 8) {
      return {
        isMinus: true
      };
    }
    return null;
  }

  validate (control: FormControl): {[s: string]: boolean} {
    let form = this;
    if (control.value !== form.controls['newPassword'].value) {
      return {
        unEquals: true
      };
    }

    return null;
  }

}
