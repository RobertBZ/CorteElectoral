import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DesktopWeb';

  constructor(
    private loginService : AuthService,
    private router : Router
  ){
    this.loginService.userOnly = JSON.parse(localStorage.getItem('user'));
    if(this.loginService.userOnly != null){
      this.validateVote(this.loginService.userOnly.stateVote);
    }
  }

  validateVote(stateVote : boolean){
      if(stateVote){
        this.router.navigateByUrl('/voto-emitido');
      }else{
        this.router.navigateByUrl('/inicio');
      }
  }
}
