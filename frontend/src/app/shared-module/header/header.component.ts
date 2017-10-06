import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../_services/AuthService";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: any;
  username: string;

  constructor(public _authService: AuthService) {
  }

  ngOnInit() {
    this.user = this._authService.currentUser;
    this.username = this._authService.currentUserDisplayName;
  }

  logout(){
    this._authService.signOut();
  }


}
