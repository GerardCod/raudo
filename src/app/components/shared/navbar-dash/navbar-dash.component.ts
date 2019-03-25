import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CentralService } from 'src/app/services/central.service';

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
  username: string;
  img: any;

  constructor(private centralService: CentralService, private authService: AuthService) {
    const {attendant: {name}} = JSON.parse(localStorage.getItem('user'));
    this.username = name;
    this.username = this.username.split(' ')[0];

    this.centralService.getImage().subscribe(
      data => {
        
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
  }

  logOut(){
    this.authService.centralSingOut();
  }
}
