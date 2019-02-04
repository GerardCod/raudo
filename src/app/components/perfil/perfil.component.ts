import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  user: User;

  constructor() {
    this.user = {
      tax: 20.50,
      centralName: 'RadioTaxi',
      fullName: 'Pancho López',
      phone: '238 180 4026',
      city: 'Tehuacán',
      email: 'pancho.lopez@gmail.com'
    };
  }

  ngOnInit() {
  }

}

interface User {
  tax: any;
  centralName: any;
  fullName: any;
  phone: any;
  city: any;
  email: any;
}
