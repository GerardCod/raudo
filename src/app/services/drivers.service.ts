import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { APÏ_URL } from '../global/config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DriversService {

  token: any;
  constructor(private httpClient: HttpClient) {
    this.token = JSON.parse(localStorage.getItem('user')).token;
  }

  newDriver (driver: any) {
    return this.httpClient.post(`${APÏ_URL}cabs`, driver, {headers: {'Authorization': 'Bearer ' + this.token}});
  }

  getDrivers () {
    return this.httpClient.get(`${APÏ_URL}cabs?limit=10&page=0`, {headers: {'Authorization': 'Bearer ' + this.token}})
    .pipe(map(
      (data:any) => {
        return data.cabs;
      }
    ));
  }
  // deleteDriver(id: any){
  //   const headers = new HttpHeaders({Authorization: ACCESS_TOKEN});
  //   const params = new HttpParams(new HttpOptions());
  //   return this.httpClient.delete(`${APÏ_URL}cabs`, {headers}, params);
  // }

}
