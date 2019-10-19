import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { 
    MatCardModule, 
    MatIconModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule, 
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatGridListModule,
    MatToolbarModule,
    MatSnackBarModule
  } from '@angular/material';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { StadisticsComponent } from './stadistics/stadistics.component';

import { ChartsModule } from 'ng2-charts';

@NgModule({
    declarations: [
        PagesComponent,
        HomeComponent,
        StadisticsComponent
    ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        MatSidenavModule,
        MatDividerModule,
        MatListModule,
        MatGridListModule,
        MatToolbarModule,
        MatSnackBarModule,
        ChartsModule 
    ]
})
export class PagesModule { }