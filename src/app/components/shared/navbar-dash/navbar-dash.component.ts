import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CentralService } from 'src/app/services/central.service';
import { WebSocketService } from 'src/app/services/web-socket.service';
import { showMessage } from 'src/app/models/exports';
import { MatSnackBar } from '@angular/material';
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

  constructor(private centralService: CentralService, private authService: AuthService,
    private socket: WebSocketService, private snackBar: MatSnackBar) {
    const {attendant: {name}} = JSON.parse(localStorage.getItem('user'));
    this.username = name;
    this.username = this.username.split(' ')[0];
    this.img = JSON.parse( localStorage.getItem('user') ).img;
    this.connecToSocketServer();
  }

  ngOnInit() {
  }

  logOut(){
    this.authService.centralSingOut();
  }

  connecToSocketServer(){
    const id = JSON.parse(localStorage.getItem('user'))._id;
    this.socket.emit('connectStation', {_id: id});
  }
}
