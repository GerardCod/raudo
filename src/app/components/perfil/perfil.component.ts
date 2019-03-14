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
    const userLoged = JSON.parse(localStorage.getItem('user')).usuario;
    console.log(userLoged);
    this.user = {
      tax: userLoged.rate,
      centralName: userLoged.name,
      fullName: userLoged.attendant.name,
      phone: userLoged.attendant.telephone,
      city: userLoged.town,
      email: userLoged.email
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

  guardarCambios() {
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
