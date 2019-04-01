import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CentralService } from 'src/app/services/central.service';
import { showMessage } from 'src/app/models/exports';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {
  [x: string]: any;

  form: FormGroup;

  constructor( private centralService: CentralService, private snackBar: MatSnackBar ) {
    this.form = new FormGroup({
      'current': new FormControl(null, Validators.required),
      'new': new FormControl(null),
      'confirm': new FormControl(null)
    });

    this.form.controls['new'].setValidators([Validators.required, this.length]);
    this.form.controls['confirm'].setValidators([Validators.required, this.confirm.bind(this.form)]);
  }

  ngOnInit() {
  }

  length(control: FormControl): {[s: string]: boolean} {
    const value = '' + control.value + '';
    if (value.length < 8) {
      return {
        noCumple: true
      };
    }

    return null;
  }

  confirm(control: FormControl): {[s: string]: boolean} {
    const form = this;

    if (control.value !== form.controls['new'].value) {
      return {
        distinct: true
      };
    }

    return null;
  }

  updatePassword() {
    this.centralService.changePassword(this.form.controls['current'].value, this.form.controls['confirm'].value)
    .subscribe(
      data => {
        console.log(data);
        this.resetForm();
        showMessage('Contraseña actualizada', this.snackBar);
      },
      error => {
        console.log(error);
        this.resetForm();
        showMessage(error, this.snackBar);
      }
    );
  }

  resetForm() {
    this.form.markAsPristine();
    this.form.markAsUntouched();
  }
}
