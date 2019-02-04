import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  names: string[] = ['María', 'Arturo', 'Olivia', 'Armando', 'Amelia', 'Javier',
  'Charlotte', 'Teodora', 'Israel', 'Oliver', 'Isabella', 'Juan',
  'Cora', 'Levi', 'Violeta', 'Axel', 'Mia', 'Tomas', 'Elizabeth'];
  colors: string[] = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];

  users: User[];
  lat = 18.4654;
  lng = -97.4022;
  constructor() {
    this.users = Array.from({length: 10}, (_, k) => this.createUser(k.toString()));
  }

  ngOnInit() {
  }

  createUser(id: string): User {
    return {
      id: id,
      user: this.names[Math.round(Math.random() * (this.names.length - 1 ))],
      color: this.colors[Math.round(Math.random() * (this.colors.length - 1))],
      img: 'http://lorempixel.com/80/80',
      lat: (Math.random() * (150.0000 + (-100.0000))),
      lng: (Math.random() * (150.0000 + (-100.0000)))
    };
  }

  redirectTo(lat: number, lng: number) {
    this.lat = lat;
    this.lng = lng;
  }
}

interface User {
  id: string;
  user: string;
  color: string;
  img: string;
  lat?: number;
  lng?: number;
}
