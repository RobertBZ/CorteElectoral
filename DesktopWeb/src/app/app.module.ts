import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { 
  MatCardModule, 
  MatIconModule, 
  MatFormFieldModule, 
  MatInputModule, 
  MatButtonModule, 
  MatSidenavModule 
} from '@angular/material';
import { LoginComponent } from './auth/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { VoteSentComponent } from './vote-sent/vote-sent.component';

const config : SocketIoConfig = { url: 'http://localhost:3000/corteElectoral', options: {} }

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VoteSentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SocketIoModule.forRoot(config),
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
