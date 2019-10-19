import { Component, OnInit } from '@angular/core';
import { VoteService } from 'src/app/services/vote.service';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { CandidateService } from 'src/app/services/candidate.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listCandidates : [];
  user : User;

  constructor(
    private voteService : VoteService,
    private loginService : AuthService,
    private candidateService : CandidateService,
    private router : Router,
    private _snackBar: MatSnackBar
  ) {
    this.user = this.loginService.userOnly;
    this.getResponseSocket();
  }

  ngOnInit() {
    this.getAllCandidates();
  }

  getAllCandidates(){
    this.candidateService.getCandidates().subscribe((data) => {
      this.listCandidates = data.content;
    }, (err) => {
      console.log(err);
    });
  }

  emitVoteNull(){
    this.user.stateVote = true;
    this.user.typeVote = 'nulo';
    this.voteService.registryVote(this.user, '5da8f6c89e784c1920fffb63');
  }

  emitVoteAsign(idcandidate : string){
    this.user.stateVote = true;
    this.user.typeVote = 'asignado';
    this.voteService.registryVote(this.user, idcandidate);
  }

  getResponseSocket(){
    this.voteService.responceStateVote().subscribe((data) => {
      if(data.content.stateVote && data.content.rol == 'votante'){
        this.router.navigateByUrl('/login');
        localStorage.clear();
        this.loginService.userOnly = null;
      }else{
        this.router.navigateByUrl('/inicio/estadisticas');
      }
      this.openSnackBar(data.message, 'aceptar');
    }, (err) => {
      console.log(err)
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
