import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { routing } from './app.routing';
import {AuthService} from './_services/AuthService';
import {AngularFireAuth} from "angularfire2/auth";
import {AngularFireDatabase} from "angularfire2/database";

// Initialize Firebase
export const firebaseConfig = {
  apiKey: "AIzaSyBNWs6hRtJLwfMT3tHkL9w7HIScwJ0d2WM",
  authDomain: "angularfirebasepanel.firebaseapp.com",
  databaseURL: "https://angularfirebasepanel.firebaseio.com",
  projectId: "angularfirebasepanel",
  storageBucket: "angularfirebasepanel.appspot.com",
  messagingSenderId: "512213003997"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    AngularFireAuth,
    AngularFireDatabase
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
