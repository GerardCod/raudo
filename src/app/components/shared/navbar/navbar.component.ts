import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  activo: boolean;
  @ViewChild('btnmenu') btnMenu: ElementRef;

  constructor() {
    this.activo = false;
  }

  ngOnInit() {
    console.log(this.btnMenu);

  }

  mostrarOcultar() {
    this.activo = !this.activo;
  }

}
