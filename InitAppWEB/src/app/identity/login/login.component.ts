import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
loginForm: FormGroup;
errorLabel;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) { }
  ngOnInit() {
    this.loginForm = this.buildLoginForm();
  }

buildLoginForm() {
  return this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
}

onSubmit(form: FormGroup) {
  if (form != null) {
    this.authService.login(form);
  }
  if (this.authService.loginFailureStatus === '401') {
    this.errorLabel = true;
  } else {
    this.errorLabel = false;
  }
}

register() {
  this.router.navigate(['/register']);
}
}

