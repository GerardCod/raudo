import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  servicios: Servicio[] = [
    {imagen: 'assets/img/map.JPG', titulo: 'Seleccione su destino',
    descripcion:
    'Gracias al mapa de Taximex usted podrá elegir su destino y seleccionar al coductor que se encuentre más cerca o más le agrade.'},
    {imagen: 'assets/img/dinero.jpg', titulo: 'Seleccione su forma de pago',
     descripcion:
     'Elija el método de pago que más le agrade además de poder consultar el precio de su viaje antes de hacerlo.'
    },
    {imagen: 'assets/img/conductor.jpg', titulo: 'Viaje seguro',
      descripcion:
      'Tenga la confianza de viajar con nosotros, ya que los conductores son confiables y seguros'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Servicio{
  imagen: string;
  titulo: string;
  descripcion: string;
}