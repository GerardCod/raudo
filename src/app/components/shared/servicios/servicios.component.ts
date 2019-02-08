import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  servicios: Servicio[] = [
    {imagen: 'assets/img/map.JPG', titulo: 'Conozca la ubicación de sus empleados',
    descripcion:
    'Gracias a la app de administración de TaxiMex usted podrá saber la ubicación exacta en tiempo real de sus empleados.'},
    {imagen: 'assets/img/charts-dashboard.png', titulo: 'Observe el flujo de su negocio',
     descripcion:
     'TaxiMex le brindará gráficas acerca del rendimiento de sus empleados y de sus ganancias, por lo que podrá tomar mejores decisiones' +
      ' en su negocio'
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