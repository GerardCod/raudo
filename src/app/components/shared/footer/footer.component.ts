import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  formulario: FormGroup;

  constructor() {
    this.iniciarFormulario();
  }

  ngOnInit() {
  }

  iniciarFormulario(){
    this.formulario = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'numero': new FormControl(null, Validators.required)
    });
  }

  sendEmail(){
    console.log('Enviando email f');
  }
}
