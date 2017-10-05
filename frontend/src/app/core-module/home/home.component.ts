import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../_services/AuthService";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: any;

  constructor(private _authService: AuthService) {
  }

  ngOnInit() {
    this.user = this._authService.currentUser;
  }

  logout(){
    this._authService.signOut();
  }


}
