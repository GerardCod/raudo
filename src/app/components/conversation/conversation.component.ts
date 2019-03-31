import { Component, OnInit, Input } from '@angular/core';
import { WebSocketService } from '../../services/web-socket.service';
import { MatSnackBar } from '@angular/material';
import { showMessage } from 'src/app/models/exports';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {

  @Input() user: any;

  constructor(private socket: WebSocketService, private snackBar: MatSnackBar) {
    this.socket.listen('new_message_station').subscribe(
      (msg: any) => console.log(msg),
      error => console.log(error)
    );
  }

  ngOnInit() {
  }

}
