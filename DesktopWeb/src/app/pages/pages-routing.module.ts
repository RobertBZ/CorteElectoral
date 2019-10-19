import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { StadisticsComponent } from './stadistics/stadistics.component';


const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children:[
        { path: '', component: HomeComponent },
        { path: 'estadisticas', component: StadisticsComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }