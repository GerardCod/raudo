import { Component, OnInit } from '@angular/core';

export interface Promocion {
  id: number;
  title: string;
  description: string;
  dateBegin: string;
  dateEnd: string;
  category: string;
  status: boolean;
}

const PROMOTIONS: string[] = ['Descuento del 20% en sus viajes', 'Viaje gratis a Tehuacán',
'Descuento del 50% en su viaje', '2 viajes gratis'];

const PROMOTION_DESCRIPTIONS: string[] = ['Acumule 100 taxipuntos y obtenga un descuento del 20% en su próximo viaje',
  'Si es un cliente gold y tiene 100 taxipuntos disfrute de un viaje completamente gratis dentro de la ciudad de Tehuacán'];

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.css']
})
export class PromocionesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
