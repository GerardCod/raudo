import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {

  constructor() { }

  getRoutes(): Array<any> {
    const routes = [{
      name: 'Panel',
      path: './dashboard',
      children: [
        {
          name: 'Inicio',
          path: './inicio'
        },
        {
          name: 'Conductores',
          path: './conductores'
        },
        {
          name: 'Mapa',
          path: './mapa'
        },
        {
          name: 'Agregar',
          path: './agregar'
        },
        {
          name: 'Perfil',
          path: './perfil'
        },
        {
          name: 'Solicitudes',
          path: './solicitudes'
        }
      ]
    }];
    return routes;
  }
}
