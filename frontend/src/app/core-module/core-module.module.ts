import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {CommonModule} from "@angular/common";
import {RegisterComponent} from "./register/register.component";
import {HomeComponent} from "./home/home.component";
import {ProfileComponent} from "./profile/profile.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModules} from "../shared-module/shared-module.module";
import { LoginPageComponent } from './login-page/login-page.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { LoginEmailComponent } from './login-email/login-email.component';

@NgModule({
  declarations: [
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    LoginPageComponent,
    LoginEmailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    SharedModules,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  exports: [
    LoginPageComponent,
    LoginEmailComponent
  ],
  providers: [
  ]
})
export class CoreModules { }
