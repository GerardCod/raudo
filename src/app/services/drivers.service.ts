import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { APÏ_URL } from '../global/config';

@Injectable({
  providedIn: 'root'
})
export class DriversService {

  constructor(private httpClient: HttpClient) { }

  newDriver (driver: any) {
    const token = JSON.parse(localStorage.getItem('user')).token;
    return this.httpClient.post(`${APÏ_URL}cabs`, driver, {headers: {'Authorization': 'Bearer ' + token}});
  }

  // deleteDriver(id: any){
  //   const headers = new HttpHeaders({Authorization: ACCESS_TOKEN});
  //   const params = new HttpParams(new HttpOptions());
  //   return this.httpClient.delete(`${APÏ_URL}cabs`, {headers}, params);
  // }

}
