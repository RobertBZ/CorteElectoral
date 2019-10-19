import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class StadisticsService {

  constructor(
    private socket : Socket
  ) {
  }

  getStadisticsVote(){
    this.socket.emit('candidate-stadistics');
  }

  responceStateVote(): Observable<any>{
    return this.socket.fromEvent('response-candidate-vote');
  }
}
