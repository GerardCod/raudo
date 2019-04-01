import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Central } from '../../models/central';
import { Router } from '@angular/router';
import { showMessage } from 'src/app/models/exports';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  [x: string]: any;

  formulario: FormGroup;

  constructor(private auth: AuthService, private router: Router, private snackBar: MatSnackBar) {
    this.iniciarFormulario();
  }

  ngOnInit() {
  }

  singUp(){
    const central: Central = new Central(
      this.formulario.controls['nombreCentral'].value,
      this.formulario.controls['tarifa'].value,
      {
        name: this.formulario.controls['nombreEncargado'].value,
        telephone: this.formulario.controls['telefono'].value
      },
      this.formulario.controls['localidad'].value,
      this.formulario.controls['contrasena1'].value,
      this.formulario.controls['email'].value
    );

    this.auth.centralSignUp(central).subscribe(
      response => showMessage('Central registrada', this.snackBar),
      error => console.log(error)
    );

    this.router.navigate(['/landing','inicio-sesion','iniciar']);
  }

  iniciarFormulario(){
    this.formulario = new FormGroup({
      'tarifa': new FormControl(null, Validators.required),
      'nombreCentral': new FormControl(null, Validators.required),
      'nombreEncargado': new FormControl(null, Validators.required),
      'telefono': new FormControl(null, Validators.required),
      'localidad': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'contrasena1': new FormControl(null),
      'contrasena2': new FormControl(null)
    });

    this.formulario.controls['contrasena1'].setValidators([Validators.required, this.longitud]);
    this.formulario.controls['contrasena2'].setValidators([Validators.required, this.noIgual.bind(this.formulario)]);
  }

  noIgual(control: FormControl): {[s: string]: boolean} {

    let formulario = this;
    if(control.value !== formulario.controls['contrasena1'].value) {
      return {
        noiguales: true
      };
    }

    return null;
  }

  longitud (control: AbstractControl): {[s: string]: boolean} {
    const value = '' + control.value + '';
    if (value.length < 8 ) {
      return {
        min: true
      }
    }
    return null;
  }

}

export interface Attendant {
  name: any;
  telephone: any;
}
