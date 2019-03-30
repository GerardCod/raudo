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
  constructor(private driverService: DriversService, private socket: WebSocketService) {
    this.socket.listen('cab_available')
    .subscribe(
      msg => {
        this.driverService.getDriversAvailables().subscribe(
          (data: any) => {
            const dataArray: Array<any> = data.cabsAvaliables;
            console.log(data.cabsAvaliables);
            this.users = dataArray.map(this.createUser);
            console.log(this.users);
          },
          error => console.log(error)
        );
      },
      error => console.log(error)
    );
  }

  ngOnInit() {
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
      active: data.active
    }
  }

  redirectTo(lat: number, lng: number) {
    this.lat = lat;
    this.lng = lng;
  }
}

interface User {
  id: string;
  driver: any;
  img: string;
  location: any;
  active?: boolean;
}
