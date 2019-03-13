import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormControlDirective } from '@angular/forms';
import { Router } from '@angular/router';
import { DriversService } from 'src/app/services/drivers.service';

@Component({
  selector: 'app-agregar-conductor',
  templateUrl: './agregar-conductor.component.html',
  styleUrls: ['./agregar-conductor.component.css']
})
export class AgregarConductorComponent implements OnInit {

  form: FormGroup;

  constructor(private router: Router, private service: DriversService) {
    this.formInit();
  }

  ngOnInit() {
  }

  formInit(){
    this.form = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'lastName': new FormControl(null, Validators.required),
      'phone': new FormControl(null, Validators.required),
      'plate': new FormControl(null, Validators.required),
      'model': new FormControl(null, Validators.required),
      'year': new FormControl(null, Validators.required)
    });

    console.log(this.form.controls);
  }

  saveDriver() {
    const driver: Driver = {
      driver: {
        name: this.form.controls['name'].value,
        last_name: this.form.controls['lastName'].value,
        telephone: this.form.controls['phone'].value
      },
      unit: {
        plates: this.form.controls['plate'].value,
        model: this.form.controls['model'].value,
        year: this.form.controls['year'].value
      }
    };
    
    this.service.newDriver(driver).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/dashboard/conductores']);
      },
      error => console.log(error)
    );

  }

}

export interface Driver {
  driver: any;
  unit: any;
}
