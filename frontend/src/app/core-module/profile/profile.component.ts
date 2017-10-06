import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from "../../_services/AuthService";
import {Subject} from "rxjs/Subject";
import {debounceTime} from "rxjs/operator/debounceTime";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  personalForm: FormGroup;
  newName: FormControl;

  emailForm: FormGroup;
  newEmail: FormControl;

  user: any;

  private _response = new Subject<string>();
  response: string;
  isResError: boolean;

  constructor(private _authService: AuthService) {
  }

  ngOnInit() {
    this.user = this._authService.currentUser;
    this.createFormControls();
    this.createForm();

    this._response.subscribe((message) => this.response = message);
    debounceTime.call(this._response, 5000).subscribe(() => this.response = null);
  }

  private createFormControls(): void {
    this.newName = new FormControl();
    this.newEmail = new FormControl('', Validators.required);
  }

  private createForm(): void {
    this.personalForm = new FormGroup({
      newName: this.newName
    });
    this.emailForm = new FormGroup({
      newEmail: this.newEmail
    });
  }


  resetPassword() {
    this._authService.resetPassword(this.user.email)
      .then(() => {
        this.isResError = false;
        this._response.next('Email has been send. Follow the instructions in e-mail.');
      })
      .catch((error: any) => {
        this.isResError = true;
        this._response.next(error);
      });
  }

  updateEmail(): void {
    this._authService.updateEmail(this.newEmail.value)
      .then(() => {
        this.isResError = false;
        this._response.next('Email updated correctly.');
        this.user = this._authService.currentUser;
        this.emailForm.reset();
      })
      .catch((error: any) => {
        this.isResError = true;
        this._response.next(error);
      });
  }

  updatePersonal(): void {
    this._authService.updatePersonal(this.newName.value)
      .then((res: any) => {
        this.isResError = false;
        this._response.next('Profile updated correctly.');
        this.user = this._authService.currentUser;
        this.emailForm.reset();
      })
      .catch((error: any) => {
        this.isResError = true;
        this._response.next(error);
      });
  }

  checkRes = () => this.isResError ? 'danger' : 'success';
}
