import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { showMessage } from 'src/app/models/exports';

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
      showMessage('No hay conexión a Internet, revisa tu conexión', this.snackBar);
    }
  }

  ngOnInit() { }

  mostrarOcultar() {
    this.activo = !this.activo;
  }

}
