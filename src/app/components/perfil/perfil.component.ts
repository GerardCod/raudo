import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  user: User;
  data: any;

  constructor() {
    const userLoged = JSON.parse(localStorage.getItem('user'));
    this.user = {
      tax: userLoged.rate,
      centralName: userLoged.name,
      fullName: userLoged.attendant.name,
      phone: userLoged.attendant.telephone,
      city: userLoged.town,
      email: userLoged.email
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
