import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CentralUpdated } from 'src/app/models/exports';
import { CentralService } from 'src/app/services/central.service';
import { Central } from 'src/app/models/central';

@Component({
  selector: 'app-update-count',
  templateUrl: './update-count.component.html',
  styleUrls: ['./update-count.component.css']
})
export class UpdateCountComponent implements OnInit {

  form: FormGroup;
  user: CentralUpdated;

  constructor(private centralService: CentralService) {
    this.form = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'rate': new FormControl(null, Validators.required),
      'manager_name': new FormControl(null, Validators.required),
      'manager_telephone': new FormControl(null, Validators.required),
      'town': new FormControl(null, Validators.required)
    });
  }

  ngOnInit() {
  }

  updateData() {
    const email: any = JSON.parse(localStorage.getItem('user')).email;
    const password: any = JSON.parse(localStorage.getItem('user')).password;
    this.user = {
      name: this.form.controls['name'].value,
      rate: this.form.controls['rate'].value,
      attendant: {
        name: this.form.controls['manager_name'].value,
        telephone: this.form.controls['manager_telephone'].value
      },
      town: this.form.controls['town'].value
    };

    this.centralService.patchUser(this.user).subscribe(
      data => {
        const newUser: Central = {
          name: this.user.name,
          rate: this.user.rate,
          attendant: this.user.attendant,
          town: this.user.town,
          password: password,
          email: email
        };

        localStorage.removeItem('user');
        localStorage.setItem('user', JSON.stringify(newUser));
        console.log(data);
        location.reload();
      },
      error => {
        console.log(error);
      }
    );
    this.resetForm();
  }

  resetForm() {
    this.form.markAsPristine();
    this.form.markAsUntouched();
  }
}
