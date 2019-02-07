import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  formulario: FormGroup;

  constructor(private router: Router) {
    this.iniciarFormulario();
  }

  ngOnInit() {}

  iniciarFormulario() {
    this.formulario = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password' : new FormControl(null, Validators.required)
    });

  }

  login() {
    if (this.formulario.invalid) {
      console.log('invalido');
    } else {
      this.router.navigate(['dashboard']);
    }
  }

}
