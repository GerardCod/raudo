import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import { WebSocketService } from '../../services/web-socket.service';
import { CentralService } from 'src/app/services/central.service';
import { Message } from 'src/app/models/exports';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit, OnChanges {

  @Input() user: any;
  @ViewChild('txtMessage') txtMessage: ElementRef;
  messages: any[];
  currentUser: any;

  constructor(private socket: WebSocketService, private centralService: CentralService) {
    this.socket.listen('new_message_stations').subscribe(
      (msg: any) => this.getConversation(),
      error => console.log(error)
    );
    this.currentUser = JSON.parse(localStorage.getItem('user'));
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getConversation();
  }

  getConversation(){
    this.centralService.getConversation(this.user._id).subscribe(
      (data: any) => {
        this.messages = data.messages;
        console.log(this.messages);
      },
      (error) => console.log(error)
    );
  }

  sendMessage() {
    const message: Message = {
      text: this.txtMessage.nativeElement.value,
      to: this.user._id
    };

    this.centralService.sendMessageCabs(message).subscribe(
      data => {
        this.getConversation();
        this.txtMessage.nativeElement.value = '';
      },
      error => console.log(error)
    );
  }

}
