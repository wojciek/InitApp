import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  errorInfo;
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
    ) { }

  ngOnInit() {
    this.registerForm = this.buildRegisterForm();
  }

  buildRegisterForm() {
    return this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(form: FormGroup) {
    if (form != null) {
      this.authService.register(form);
    }
    if (this.authService.registerFailureStatus != null) {
      this.errorInfo = this.authService.registerFailureStatus;
    }
  }
  back() {
    this.router.navigate(['/login']);
  }
}
