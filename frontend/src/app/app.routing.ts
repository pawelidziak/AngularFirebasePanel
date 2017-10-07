import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RegisterComponent} from './core-module/register/register.component';
import {HomeComponent} from "./core-module/home/home.component";
import {AuthGuard} from "./_quards/AuthGuard";
import {ProfileComponent} from "./core-module/profile/profile.component";
import {LoginEmailComponent} from "./core-module/login-email/login-email.component";
import {LoginPageComponent} from "./core-module/login-page/login-page.component";
import {ForgotPasswordComponent} from "./core-module/forgot-password/forgot-password.component";

const appRoutes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'login-email',
    component: LoginEmailComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  // otherwise redirect to main-content
  {
    path: '**',
    redirectTo: 'home'
  }
] as Routes;

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
