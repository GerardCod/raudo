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
      console.log('Conectado');
      this.socketStatus = true;
    });

    this.socket.on('disconnect', () => {
      console.log('Desconectado');
      this.socketStatus = false;
    });
  }

  listen(event: string) {
    return this.socket.fromEvent(event);
  }

  emit(event: string, payload: any, callback?: Function) {
    this.socket.emit(event, payload, callback);
  }

}
