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
    {path: 'conductores', title: 'Conductores', icon: 'commute'},
    {path: 'mapa', title: 'Mapa', icon: 'location_on'},
    {path: 'solicitudes', title: 'Solicitudes', icon: 'library_books'},
    {path: 'mensajes', title: 'Mensajes', icon: 'near_me'}
  ];

  constructor() {
  }

  ngOnInit() {

  }

}

