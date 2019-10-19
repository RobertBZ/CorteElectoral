import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  user : User;

  constructor(
    private router: Router,
    private loginService : AuthService
  ) {
    this.user = loginService.userOnly;
  }

  ngOnInit() {
  }

  singOut(){
    this.router.navigateByUrl('/login');
    localStorage.clear();
    this.loginService.userOnly = null;
  }

}
