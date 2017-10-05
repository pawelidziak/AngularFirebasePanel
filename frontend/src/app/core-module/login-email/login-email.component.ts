import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../_services/AuthService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-email',
  templateUrl: './login-email.component.html',
  styleUrls: ['./login-email.component.css'],
})
export class LoginEmailComponent implements OnInit {

  error: string;

  constructor(private _router: Router, private _authService: AuthService) {
  }

  ngOnInit() {
  }

  onSubmit(formData): void {
    this._authService.emailLogin(formData.value.email, formData.value.password)
      .then((res: any) => {
        this._router.navigate(['/home']);
        this.error = '';
      })
      .catch((error: any) => {
        this.error = error;
      });
  }

}
