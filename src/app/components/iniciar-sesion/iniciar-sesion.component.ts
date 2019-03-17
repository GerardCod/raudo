import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  formulario: FormGroup;

  constructor(private router: Router, private authService: AuthService) {
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

      const user: User = {
        username: this.formulario.controls['email'].value,
        password: this.formulario.controls['password'].value
      };

      this.authService.centralSingIn(user)
      .subscribe(
        data => {

          this.router.navigate(['dashboard']);
        },
        error => console.log(error)
      );
    }
  }

}

export interface User {
  username: any;
  password: any;
}
