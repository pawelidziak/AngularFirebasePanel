import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from "../../_services/AuthService";
import {fadeInAnimation} from "../../router.animations";
import {Location} from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [fadeInAnimation()]
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  name: FormControl;
  email: FormControl;
  password: FormControl;
  confirmPassword: FormControl;

  error: string;
  response: string;

  constructor(public _authService: AuthService, private _location: Location) {
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  private createFormControls(): void {
    this.name = new FormControl('', Validators.required);
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern('(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])')
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(30),
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$&+,:;=?@#|\'<>.^*()\\%!-]).+$')
    ]);
    this.confirmPassword = new FormControl('', [
      Validators.required
    ]);
  }

  private createForm(): void {
    this.registerForm = new FormGroup({
      name: this.name,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword
    });
  }

  register(): void {
    this.response = '';
    this.error = '';
    this._authService.emailSignUp(this.name.value, this.email.value, this.password.value)
      .then((res: any) => {
        this.response = "You have been registered! You can log in now.";
        this.error = '';
      })
      .catch((error: any) => {
        this.error = error;
        this.response = '';
      });
  }

  goBack() {
    this._location.back();
  }

}
