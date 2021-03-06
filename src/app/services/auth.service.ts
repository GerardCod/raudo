import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { APÏ_URL } from '../global/config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  public centralSignUp(central: any) {
    return this.httpClient.post(`${APÏ_URL}stations`, central);
  }

  public centralSingIn(user: any) {

    const options = {
      headers: new HttpHeaders({
        'Authorization': 'Basic ' + window.btoa(user.username + ':' + user.password)
      })
    };

    return this.httpClient.post(`${APÏ_URL}auth/station`, user, options)
    .pipe(map(
      (data: any) => {
        if (data) {
          localStorage.setItem('token', JSON.stringify(data.token));
          localStorage.setItem('user', JSON.stringify(data.station));
        }
        return user;
      }
    ));
  }

  public centralSingOut() {
    localStorage.clear();
// tslint:disable-next-line: deprecation
    location.reload(true);
  }
}
