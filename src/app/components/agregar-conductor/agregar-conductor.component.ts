import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormControlDirective } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-conductor',
  templateUrl: './agregar-conductor.component.html',
  styleUrls: ['./agregar-conductor.component.css']
})
export class AgregarConductorComponent implements OnInit {

  form: FormGroup;

  constructor(private router: Router) {
    this.formInit();
  }

  ngOnInit() {
  }

  formInit(){
    this.form = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'lastName': new FormControl(null, Validators.required),
      'phone': new FormControl(null, Validators.required),
      'unity': new FormControl(null, Validators.required),
      'plate': new FormControl(null, Validators.required),
      'model': new FormControl(null, Validators.required),
      'year': new FormControl(null, Validators.required),
      'user': new FormControl(null, Validators.required)
    });

    console.log(this.form.controls);
  }

  saveDriver() {
    this.router.navigate(['/dashboard/conductores']);
  }
}
