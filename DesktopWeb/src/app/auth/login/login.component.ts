import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login : FormGroup;

  constructor(
    private router : Router,
    private formBuilder : FormBuilder,
    private loginService : AuthService
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  singIn(){
    if(this.login.valid){
      this.loginService.getUser(this.login.value.ci).subscribe((user) => {
        localStorage.setItem('user', JSON.stringify(user.content));
        this.loginService.userOnly = user.content;
        this.validateVote(user.content.stateVote);
      },(error) => {
        alert("Ocurrio " + error);
      });
    }else{
      alert("debe ingresar su ci");
    }
  }

  validateVote(stateVote : boolean){
    if(stateVote){
      this.router.navigateByUrl('/voto-emitido');
    }else{
      this.router.navigateByUrl('/inicio');
    }
  }

  createForm(){
    this.login = this.formBuilder.group({
      ci : ['', Validators.required ]
    });
  }

}
