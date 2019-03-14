import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APÏ_URL } from '../global/config';

@Injectable({
  providedIn: 'root'
})
export class CentralService {
  token: any;
  constructor(private httpClient: HttpClient) {
    this.token = JSON.parse('user').token;
  }

  patchUser(user: any){
    const accessToken = 'Bearer ' + this.token;
    return this.httpClient.patch(`${APÏ_URL}`, user, {headers: {'Authorization': accessToken}});
  }
}
