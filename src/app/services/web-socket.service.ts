import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { showMessage } from '../models/exports';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  public socketStatus = false;

  constructor( private socket: Socket, private snackBar: MatSnackBar ) {
    this.checkStatus();
  }

  checkStatus() {
    this.socket.on('connect', () => {
      showMessage('Conectado', this.snackBar);
      this.socketStatus = true;
    });

    this.socket.on('disconnect', () => {
      showMessage('Desconectado', this.snackBar);
      this.socketStatus = false;
    });
  }
}
