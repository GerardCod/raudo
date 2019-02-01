import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formulario: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  iniciarFormulario(){
    this.formulario = new FormGroup({
      'tarifa': new FormControl(null, Validators.required),
      'nombreCentral': new FormControl(null, Validators.required),
      'nombreEncargado': new FormControl(null, Validators.required),
      'telefono': new FormControl(null, Validators.required),
      'localidad': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'contrasena1': new FormControl(null, Validators.required),
      'contrasena2': new FormControl(null, Validators.required)
    });
  }
}
