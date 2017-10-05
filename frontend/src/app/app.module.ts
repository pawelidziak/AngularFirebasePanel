import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import {AuthService} from './_services/AuthService';
import {AngularFireAuth} from "angularfire2/auth";
import {AngularFireDatabase} from "angularfire2/database";
import {AuthGuard} from "./_quards/AuthGuard";
import {CoreModules} from "./core-module/core-module.module";

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
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    CoreModules
  ],
  providers: [
    AuthGuard,
    AuthService,
    AngularFireAuth,
    AngularFireDatabase
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
