import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nofications',
  templateUrl: './nofications.component.html',
  styleUrls: ['./nofications.component.css']
})
export class NoficationsComponent implements OnInit {

  @Input('request') request: any;

  constructor() { }

  ngOnInit() {
    console.log(this.request);
  }

}
