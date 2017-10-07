import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../_services/AuthService";
import {moveInLeft} from "../../router.animations";

@Component({
  selector: 'app-login-email',
  templateUrl: './login-email.component.html',
  styleUrls: ['./login-email.component.css'],
  animations: [moveInLeft()],
  host: {'[@moveInLeft]': ''}
})
export class LoginEmailComponent implements OnInit {

  error: string;

  constructor(public _authService: AuthService) {
  }

  ngOnInit() {
  }

  onSubmit(formData): void {
    this.error = '';
    this._authService.emailLogin(formData.value.email, formData.value.password)
      .catch((error: any) => {
        this.error = error;
      });
  }

}
