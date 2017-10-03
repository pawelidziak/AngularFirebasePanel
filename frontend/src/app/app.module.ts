import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

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
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
