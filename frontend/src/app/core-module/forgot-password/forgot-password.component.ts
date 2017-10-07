import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../_services/AuthService";
import {Location} from '@angular/common';
import {moveInLeft} from "../../router.animations";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
  animations: [moveInLeft()],
  host: {'[@moveInLeft]': ''}
})
export class ForgotPasswordComponent implements OnInit {

  error: string;
  response: string;

  email: string;

  constructor(public _authService: AuthService, private _location: Location) {
  }

  ngOnInit() {
  }

  resetPassword() {
    this.response = this.error = '';
    this._authService.resetPassword(this.email)
      .then(() => {
        this.response = 'Email has been send. Follow the instructions in the e-mail.';
      })
      .catch((error: any) => {
        this.error = error;
      });
  }

  goBack() {
    this._location.back();
  }
}
