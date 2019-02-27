import { Injectable } from '@angular/core';
import { LayoutService } from '../shared-module/services/layout.service';
import { Http, Headers } from '@angular/http';
import {  FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(
    private layoutService: LayoutService,
    private http: Http,
    private router: Router
    ) {}

  loggedInUserName$: Observable<string>;
  loggedInUserId: string;
  private isUserLoggedIn = false;
  loginFailureStatus: string;
  registerFailureStatus: string;

login(form: FormGroup) {

  const credentials = JSON.stringify(form.value);
  return this.http.post('http://localhost:5006/api/authenticate', credentials, {
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }).subscribe(response => {
    const token = (<any>response).json().token;
    localStorage.setItem('authToken', token);
    this.loggedInUserName$ = (<any>response).json().username;
    this.loggedInUserId = (<any>response).json().id;
    localStorage.setItem('authUser', (<any>response).json().id);
    this.isUserLoggedIn = true;
    this.onLoginSubmitSuccess();
  }, err => {
    this.onLoginSubmitFailure();
    this.loginFailureStatus = err.status;
  });
}

register(form: FormGroup) {
  const registerData = JSON.stringify(form.value);
  return this.http.post('http://localhost:5006/api/register', registerData, {
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }).subscribe(response => {
    this.onRegisterSubmitSuccess();
  }, err => {
    this.onRegisterSubmitFailure();
    this.registerFailureStatus = err;
  });
}




takeLoggedInUserName(): Observable<string> {
  if (this.loggedInUserName$ != null) {
  return this.loggedInUserName$;
  }
}

onLoginSubmitSuccess() {
  this.router.navigate(['/user']).then(() => this.layoutService.showNavBar());
}

onLoginSubmitFailure() {
  console.log('Login is incorrect!');
}

onRegisterSubmitSuccess() {
  this.router.navigate(['/login']);
}

onRegisterSubmitFailure() {
  console.log('Register Failure!');
}

logOut() {
  this.isUserLoggedIn = false;
  localStorage.removeItem('authToken');
  this.layoutService.hideNavBar();
  this.router.navigate(['/login']);
}

isLoggedIn() {
  return this.isUserLoggedIn;
}
}
