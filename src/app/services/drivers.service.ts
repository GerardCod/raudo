import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { APÏ_URL } from '../global/config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DriversService {

  token: any;
  options: any;

  constructor(private httpClient: HttpClient) {
    this.token = JSON.parse(localStorage.getItem('token'));
    this.options = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.token
      })
    }
  }

  newDriver (driver: any) {
    return this.httpClient.post(`${APÏ_URL}cabs`, driver, this.options);
  }

  getDrivers () {
    return this.httpClient.get(`${APÏ_URL}cabs?limit=10&page=0`, this.options)
    .pipe(map(
      (data:any) => {
        return data.cabs;
      }
    ));
  }

  deleteDriver(id: any) {
    return this.httpClient.delete(`${APÏ_URL}cabs/${id}`, this.options);
  }

  updateDriver(id: any, driver: any) {
    return this.httpClient.patch(`${APÏ_URL}cabs/${id}`, driver, this.options);
  }

  getDriversAvailables(){
    return this.httpClient.get(`${APÏ_URL}cabs/station/availables`, this.options);
  }

}
