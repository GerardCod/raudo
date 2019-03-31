import { Component, OnInit } from '@angular/core';
import { DriversService } from 'src/app/services/drivers.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  contacts: any[] = [];
  contactSelected: any;
  ready = false;

  constructor(private driverService: DriversService) {
    this.driverService.getDrivers().subscribe(
      data => {
        this.contacts = data;
        this.ready = true;
        this.contactSelected = this.contacts[0];
      },
      error => console.log(error)
    );
  }

  ngOnInit() {
  }

  changeContact(contact: any) {
    this.contactSelected = contact;
  }
}
