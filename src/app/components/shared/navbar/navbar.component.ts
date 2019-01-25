import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  activo = false;
  @ViewChild('btnMenu') btnMenu: ElementRef;
  pantalla = window.matchMedia('screen and (max-width:768px)');

  constructor() { }

  ngOnInit() {
    this.pantalla.addListener(this.validar);
  }

  validar(event: any) {
    if (event.matches) {
      console.log(this.btnMenu);
    }
  }

  mostrarOcultar(){
    this.activo = !this.activo;
  }
}
