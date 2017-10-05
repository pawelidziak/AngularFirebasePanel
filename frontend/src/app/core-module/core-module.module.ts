import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {CommonModule} from "@angular/common";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {ProfileComponent} from "./profile/profile.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModules} from "../shared-module/shared-module.module";

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    SharedModules,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [],
  providers: [
  ]
})
export class CoreModules { }
