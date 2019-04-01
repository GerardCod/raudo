import { Component, OnInit } from '@angular/core';
import { DriversService } from 'src/app/services/drivers.service';
import { WebSocketService } from 'src/app/services/web-socket.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  users: User[];
  lat = 18.4654;
  lng = -97.4022;
  ready = false;

  constructor(private driverService: DriversService, private socket: WebSocketService) {
    this.driverService.getDriversAvailables().subscribe(
      (data: any) => {
        const dataArray: Array<any> = data.cabsAvaliables;
        this.ready = true;
        this.users = dataArray.map(this.createUser);
      },
      error => console.log(error)
    );

    this.socket.listen('cab_disconnect').subscribe(
      data => console.log(data),
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
        this.driverService.getDriversAvailables().subscribe(
          (data: any) => {
            console.log(data);
            const dataArray: Array<any> = data.cabsAvaliables;
            this.users = dataArray.map(this.createUser);
            console.log(this.users);
          },
          error => console.log(error)
        );
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
