import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

//const ENDPOINT = 'http://localhost:3000/users/';
const ENDPOINT = 'users/';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  authToken: any;
  user: any;

  constructor(private http: HttpClient) { }

  registerUser(user): Observable<any> {
    return this.http.post(ENDPOINT + 'register', user, httpOptions);
  }

  authenticateUser(user): Observable<any> {
    return this.http.post(ENDPOINT + 'authenticate', user, httpOptions);
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }
}
