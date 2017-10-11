import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../../_services/AuthService";
import {fadeInAnimation} from "../../router.animations";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  animations: [fadeInAnimation()]
})
export class LoginPageComponent implements OnInit, OnDestroy {

  error: string;
  visibility: string;

  constructor(public _authService: AuthService) {
  }

  ngOnInit() {
    this.error = '';
    this.visibility = 'shown';
  }

  ngOnDestroy() {
    this.visibility = 'hidden';
  }

  googleLogin(): void {
    this._authService.googleLogin()
      .catch((error: any) => {
        this.error = error;
      });
  }

  facebookLogin(): void {
    this._authService.facebookLogin()
      .catch((error: any) => {
        this.error = error;
      });
  }

  githubLogin(): void {
    this._authService.githubLogin()
      .catch((error: any) => {
        this.error = error;
      });
  }

  anonymousLogin(): void {
    this._authService.anonymousLogin()
      .catch((error: any) => {
        this.error = error;
      });
  }

}
