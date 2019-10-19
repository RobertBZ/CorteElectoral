import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor(
    private socket : Socket
  ) { }

  registryVote(user : any, idcandidate : string){
    this.socket.emit('user-register-vote', { user, idcandidate });
  }

  responceStateVote(): Observable<any>{
    return this.socket.fromEvent('response-user-vote');
  }
}
