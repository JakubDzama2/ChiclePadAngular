import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Login } from './login';


@Injectable()
export class AuthenticationService {

  private serverUrl = 'http://localhost:8080/authentication';

  constructor(private http: HttpClient) { }

  authenticate(loginData: Login): Observable<any> {
    return this.http.post(this.serverUrl, loginData);
  }
}
