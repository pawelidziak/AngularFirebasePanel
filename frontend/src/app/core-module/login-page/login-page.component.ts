import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../_services/AuthService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private _router: Router, private _authService: AuthService) {
  }

  ngOnInit(){
  }

  googleLogin(): void {
    this._authService.googleLogin();
    this._router.navigate(['/home']);
  }

}
