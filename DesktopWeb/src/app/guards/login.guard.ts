import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  
  constructor(
    private loginService:AuthService,
    private router : Router
  ){
    this.canActivate();
  }

  canActivate(){
    if(this.loginService.userOnly == null){
      this.router.navigateByUrl('/login');
      return false;
    }
    return true;
  }
  
}
