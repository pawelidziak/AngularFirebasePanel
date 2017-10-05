import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RegisterComponent} from './core-module/register/register.component';
import {LoginComponent} from './core-module/login/login.component';
import {HomeComponent} from "./core-module/home/home.component";
import {AuthGuard} from "./_quards/AuthGuard";
import {ProfileComponent} from "./core-module/profile/profile.component";

const appRoutes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
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
