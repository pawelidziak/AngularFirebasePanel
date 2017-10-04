import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from "../_services/AuthService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  email: FormControl;
  password: FormControl;

  error: string;
  loading: boolean;

  user: any;

  constructor(private _router: Router, private _authService: AuthService) {
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  private createFormControls(): void {
    this.email = new FormControl('', [
      Validators.required
    ]);
    this.password = new FormControl('', [
      Validators.required
    ]);
  }

  private createForm(): void {
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password
    });
  }

  googleLogin(): void {
    this._authService.googleLogin();
    this._router.navigate(['/home']);
  }

}
