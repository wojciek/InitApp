import { Injectable } from '@angular/core';
import { LayoutService } from '../shared-module/services/layout.service';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
  constructor(
    private layoutService: LayoutService,
    private http: HttpClient,
    private router: Router
    ) {}

  loggedInUserName$: Observable<string>;
  loggedInUserId: string;
  isUserLoggedIn = false;
  loginFailureStatus: string;
  registerFailureStatus: string;

login(form: FormGroup) {

  const credentials = JSON.stringify(form.value);
  return this.http.post('http://localhost:5006/api/authenticate', credentials)
  .subscribe(
    response => {
    localStorage.setItem('authToken', (<any>response).token);
    this.loggedInUserName$ = (<any>response).username;
    this.loggedInUserId = (<any>response).id;
    localStorage.setItem('authUser', (<any>response).id);
    this.isUserLoggedIn = true;
    this.onLoginSubmitSuccess();
  }, err => {
    this.onLoginSubmitFailure();
    this.loginFailureStatus = err.status;
  });
}

register(form: FormGroup) {
  const registerData = JSON.stringify(form.value);
  return this.http.post('http://localhost:5006/api/register', registerData).subscribe(response => {
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
  this.router.navigate(['/']);
}

isLoggedIn() {
  return this.isUserLoggedIn;
}
}
