import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userOnly : any;

  urlServer : string = "http://localhost:3000/user/";

  constructor(
    private http : HttpClient
  ) {
  }

  getUser(ci : string) : Observable<any> {
    return this.http.get<any>(this.urlServer + ci);
  }
}
