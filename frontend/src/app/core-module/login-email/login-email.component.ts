import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../_services/AuthService";
import {fadeInAnimation} from "../../router.animations";
import {Location} from '@angular/common';

@Component({
  selector: 'app-login-email',
  templateUrl: './login-email.component.html',
  styleUrls: ['./login-email.component.css'],
  animations: [fadeInAnimation()]
})
export class LoginEmailComponent implements OnInit {

  error: string;
  email: string;
  password: string;

  constructor(public _authService: AuthService, private _location: Location) {
  }

  ngOnInit() {
  }

  onSubmit(): void {
    this.error = '';
    this._authService.emailLogin(this.email, this.password)
      .catch((error: any) => {
        this.error = error;
      });
  }

  goBack() {
    this._location.back();
  }

}
