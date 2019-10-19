import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  urlServer : string = "http://localhost:3000/candidate/";

  constructor(
    private http : HttpClient
  ) {
  }

  getCandidates() : Observable<any> {
    return this.http.get<any>(this.urlServer);
  }
}
