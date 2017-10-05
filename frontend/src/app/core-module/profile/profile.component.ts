import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from "../../_services/AuthService";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  personalForm: FormGroup;
  name: FormControl;
  email: FormControl;
  passwordForm: FormGroup;
  oldPassword: FormControl;
  newPassword: FormControl;
  confirmPassword: FormControl;

  response: string;
  error: string;
  loading: boolean;

  user: any;

  constructor(private _authService: AuthService) { }

  ngOnInit() {
    this.user = this._authService.currentUser;
    this.createFormControls();
    this.createForm();
  }

  private createFormControls(): void {
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern('(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])')
    ]);
    this.name = new FormControl('', [
      Validators.required
    ]);
    this.oldPassword = new FormControl('', [
      Validators.required
    ]);
    this.newPassword = new FormControl('', [
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
    this.personalForm = new FormGroup({
      email: this.email,
      name: this.name
    });
    this.passwordForm = new FormGroup({
      oldPassword: this.oldPassword,
      newPassword: this.newPassword,
      confirmPassword: this.confirmPassword
    });
  }
}
