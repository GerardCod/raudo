import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  formulario: FormGroup;

  constructor() {
    this.iniciarFormulario();
  }

  ngOnInit() {}

  iniciarFormulario() {
    this.formulario = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password' : new FormControl(null, [Validators.required])
    });

  }

  login() {
    if (this.formulario.invalid) {
      console.log('invalido');
    }
  }

}
