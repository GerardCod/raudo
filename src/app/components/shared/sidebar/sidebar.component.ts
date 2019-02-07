import { Component, OnInit} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  items = [
    {path: 'inicio', title: 'Inicio', icon: 'dashboard'},
    {path: 'perfil', title: 'Perfil', icon: 'person'},
    {path: 'conductores', title: 'Conductores', icon: 'commute'},
    {path: 'mapa', title: 'Mapa', icon: 'location_on'},
    {path: 'clientes', title: 'Clientes', icon: 'library_books'},
    {path: 'promociones', title: 'Promociones', icon: 'local_offer'}
  ];

  constructor() {
  }

  ngOnInit() {

  }

}

