import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  user: User;
  formulario: FormGroup;

  constructor() {
    this.user = {
      tax: 20.50,
      centralName: 'RadioTaxi',
      fullName: 'Pancho López',
      phone: '238 180 4026',
      city: 'Tehuacán',
      email: 'pancho.lopez@gmail.com'
    };
    this.iniciarFormulario();
  }

  ngOnInit() {
  }

  iniciarFormulario() {
    this.formulario = new FormGroup({
      'centralName': new FormControl(null, Validators.required),
      'fullName': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'phone': new FormControl(null, Validators.required),
      'tax': new FormControl(null, Validators.required),
      'city': new FormControl(null, Validators.required)
    });
    console.log(this.formulario.controls['centralName']);
  }

  guardarCambios(newUser) {
  }
}

interface User {
  tax: any;
  centralName: any;
  fullName: any;
  phone: any;
  city: any;
  email: any;
}
