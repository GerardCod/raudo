import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { APÏ_URL } from '../global/config';
import { map } from 'rxjs/operators';
import { toBase64String } from '@angular/compiler/src/output/source_map';

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

    return this.httpClient.post(`${APÏ_URL}auth`, user, options)
    .pipe(map(
      (data: any) => {
        if (data) {
          localStorage.setItem('user', JSON.stringify(data));
        }
        return user;
      }
    ));
  }

  public centralSingOut() {
    localStorage.removeItem('user');
    location.reload(true);
  }
}
