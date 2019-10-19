import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vote-sent',
  templateUrl: './vote-sent.component.html',
  styleUrls: ['./vote-sent.component.css']
})
export class VoteSentComponent implements OnInit {

  user:User;

  constructor(
    private loginService : AuthService,
    private router : Router
  ) { }

  ngOnInit() {
    this.user = this.loginService.userOnly;
  }

  singOut(){
    localStorage.clear();
    this.router.navigateByUrl('/login');
    this.loginService.userOnly = null;
  }

  loadStadistics(){
    this.router.navigateByUrl('/inicio/estadisticas');
  }
}
