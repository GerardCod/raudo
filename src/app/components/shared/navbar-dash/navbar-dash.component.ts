import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-dash',
  templateUrl: './navbar-dash.component.html',
  styleUrls: ['./navbar-dash.component.css']
})
export class NavbarDashComponent implements OnInit {

  list: any[] = [
    {avatar: 'person_pin', from: 'Calle José Maria Morelos y Pavón', to: 'Universidad Tecnológica de Tehuacan'},
    {avatar: 'person_pin', from: 'Calle José Maria Morelos y Pavón', to: 'Universidad Tecnológica de Tehuacan'},
    {avatar: 'person_pin', from: 'Calle José Maria Morelos y Pavón', to: 'Universidad Tecnológica de Tehuacan'},
    {avatar: 'person_pin', from: 'Calle José Maria Morelos y Pavón', to: 'Universidad Tecnológica de Tehuacan'},
    {avatar: 'person_pin', from: 'Calle José Maria Morelos y Pavón', to: 'Universidad Tecnológica de Tehuacan'}
  ];

  view = false;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  logOut(){
    this.router.navigate(['/landing','home']);
  }
}
