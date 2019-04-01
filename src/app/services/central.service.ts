import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APÏ_URL } from '../global/config';

@Injectable({
  providedIn: 'root'
})
export class CentralService {
  token: any;
  options: any;
  constructor(private httpClient: HttpClient) {
    this.token = JSON.parse(localStorage.getItem('token'));
    this.options = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.token
      })
    };
  }

  patchUser(user: any) {
    return this.httpClient.patch(`${APÏ_URL}stations`, user, this.options);
  }

  changePassword(oldPassword: any, newPassword: any) {
    return this.httpClient.patch(`${APÏ_URL}stations/password`, {oldPassword: oldPassword, newPassword: newPassword}, this.options);
  }

  uploadImage(image: FormData) {
    return this.httpClient.patch(`${APÏ_URL}upload/stations`, image, this.options);
  }

  getImage() {
    const img = JSON.parse(localStorage.getItem('user')).img;
    return this.httpClient.get(`${APÏ_URL}images/stations/${img}`, {responseType: 'blob'});
  }

  getConversation(id: any) {
    return this.httpClient.get(`${APÏ_URL}messages/${id}`, this.options);
  }

  sendMessageCabs(message: any) {
    return this.httpClient.post(`${APÏ_URL}messages/cabs`, message, this.options);
  }

  setManageable(flag: boolean){
    return this.httpClient.patch(`${APÏ_URL}stations/manageable`,{manageable: flag}, this.options);
  }

}
