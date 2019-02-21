import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  activo: boolean;
  @ViewChild('btnmenu') btnMenu: ElementRef;

  constructor(private snackBar: MatSnackBar) {
    this.activo = false;
    if (!window.navigator.onLine) {
      this.cargarMensaje('No hay Internet. Revisa tu conexión.');
    }
  }

  ngOnInit() {
    console.log(this.btnMenu);
  }

  cargarMensaje(mensaje: string) {
    this.snackBar.open(mensaje, 'Aceptar', {duration: 2000});
  }

  mostrarOcultar() {
    this.activo = !this.activo;
  }

}
