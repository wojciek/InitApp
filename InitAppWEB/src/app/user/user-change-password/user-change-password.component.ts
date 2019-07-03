import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { HttpHandler, HttpEvent } from '@angular/common/http';

@Component({
  selector: 'app-user-change-password',
  templateUrl: './user-change-password.component.html',
  styleUrls: ['./user-change-password.component.less']
})
export class UserChangePasswordComponent implements OnInit {
  changeUserPasswordForm: FormGroup;

  testBool: boolean;
  constructor(private router: Router, private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.changeUserPasswordForm = this.buildUserPasswordForm();
  }

  buildUserPasswordForm(): FormGroup {
    return this.formBuilder.group({
      Password: ['', Validators.required]
    });
  }
  changeUserPassword() {
    this.userService.changeUserPassword(this.changeUserPasswordForm.value).subscribe((successResponse) =>
    console.log('udało się'+ successResponse),
    (errorResponse)=> console.log('dupa nie udało sie'),  
    ()=> console.log('to sie zawsze zrobi na koniec')
    )

  }
}
