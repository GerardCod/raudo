import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  encabezado = '¿Quiénes somos?';
  texto =
  'Devops TI es una empresa mexicana de desarrollo de software con sede en la ciudad de Tehuacán ubicada en el estado de Puebla,' +
  ' decidida a brindar el mejor servicio y trato a sus clientes' +
  ', además está comprometida a proporcionar servicios de calidad que puedan mejorar el trabajo de los demás para que tengan ' +
  'una vida más cómoda.\n\nEn Devops TI nos regimos por una cultura de valores para cumplir con el trabajo que nuestros clientes' +
  ' nos brindan.';
  imagen = 'assets/img/oficina.jpg';

  constructor() { }

  ngOnInit() {
  }

}
