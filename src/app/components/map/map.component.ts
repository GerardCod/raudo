import { Component, OnInit } from '@angular/core';
import { DriversService } from 'src/app/services/drivers.service';
import { WebSocketService } from 'src/app/services/web-socket.service';
import { showMessage } from 'src/app/models/exports';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  users: User[];
  usersConnected: User[];
  lat = 18.4654;
  lng = -97.4022;
  ready = false;
  dataArrayAvailable: Array<any>;
  dataArray: Array<any>;

  constructor(private driverService: DriversService, private snackBar: MatSnackBar, private socket: WebSocketService) {
    this.getListCabs();
    this.getCabs();
    this.socket.listen('cab_disconnect').subscribe(
      (data: any) => {
        showMessage(`Se desconectó ${data.driver.name} ${data.driver.last_name} hace un momento`, this.snackBar);
        this.getListCabs();
        this.getCabs();
      },
      error => console.log(error)
    );
  }

  ngOnInit() {
    this.listenAvailables();
  }

  createUser(data: any): User {
    return {
      id: data._id,
      driver: {
        name: data.driver.name,
        last_name: data.driver.last_name
      },
      img: data.img,
      location: data.location,
      active: data.available
    };
  }

  redirectTo(lat: number, lng: number) {
    this.lat = lat;
    this.lng = lng;
  }

  listenAvailables() {
    this.socket.listen('cab_available')
    .subscribe(
      msg => {
        this.getListCabs();
        this.getCabs();
      },
      error => console.log(error)
    );
  }

  getListCabs() {
    this.driverService.getDriversAvailables().subscribe(
      (data: any) => {
        this.dataArrayAvailable = data.cabsAvaliables;
        this.ready = true;
        this.usersConnected = this.dataArrayAvailable.map(this.createUser);
      },
      error => console.log(error)
    );
  }

  getCabs(){
    this.driverService.getDrivers().subscribe(
      (data) => {
        console.log(data);
        this.dataArray = data;
      },
      error => console.log(error)
    );
  }
}

interface User {
  id: string;
  driver: any;
  img: string;
  location: any;
  active?: boolean;
}
