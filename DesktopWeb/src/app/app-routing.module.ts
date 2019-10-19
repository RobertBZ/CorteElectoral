import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { VoteSentComponent } from './vote-sent/vote-sent.component';
import { LoginGuard } from './guards/login.guard';


const routes: Routes = [
  {
    path: 'auth',
    component : LoginComponent
  },
  {
    path : 'inicio' , 
    canActivate:[LoginGuard],
    loadChildren : () => import('./pages/pages.module').then(pages => pages.PagesModule)
  },
  {
    path: 'voto-emitido',
    component: VoteSentComponent
  },
  {
    path:'**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
