import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-drivers',
  templateUrl: './list-drivers.component.html',
  styleUrls: ['./list-drivers.component.css']
})
export class ListDriversComponent implements OnInit {

  @Input() contactList: any[];
  @Output() contactEmitter: EventEmitter<any>;

  constructor() {
    this.contactEmitter = new EventEmitter();
  }

  ngOnInit() {
  }

  emitContact(contact: any){
    this.contactEmitter.emit(contact);
  }

}
