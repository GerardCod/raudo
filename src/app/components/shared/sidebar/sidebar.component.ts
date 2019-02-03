import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Inicio',  icon: 'dashboard', class: 'font-white' },
    { path: '/user-profile', title: 'Perfil',  icon:'person', class: 'font-white' },
    { path: '/table-list', title: 'Conductores',  icon:'commute', class: 'font-white' },
    { path: '/typography', title: 'Typography',  icon:'library_books', class: 'font-white' },
    { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: 'font-white' },
    { path: '/maps', title: 'Maps',  icon:'location_on', class: 'font-white' },
    { path: '/notifications', title: 'Notifications',  icon:'notifications', class: 'font-white' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      return $(window).width() > 991;
  }
}

