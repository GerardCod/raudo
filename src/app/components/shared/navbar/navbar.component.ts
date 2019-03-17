import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  activo: boolean;

  constructor(private snackBar: MatSnackBar) {
    this.activo = false;
    if (!window.navigator.onLine) {
      this.cargarMensaje('No hay Internet. Revisa tu conexión.');
    }
  }

  ngOnInit() { }

  cargarMensaje(mensaje: string) {
    this.snackBar.open(mensaje, 'Aceptar', {duration: 10000});
  }

  mostrarOcultar() {
    this.activo = !this.activo;
  }

}
