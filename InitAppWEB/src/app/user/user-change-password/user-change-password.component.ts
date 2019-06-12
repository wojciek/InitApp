import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-change-password',
  templateUrl: './user-change-password.component.html',
  styleUrls: ['./user-change-password.component.less']
})
export class UserChangePasswordComponent implements OnInit {
  changeUserPasswordForm: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.changeUserPasswordForm = this.buildUserPasswordForm();
  }

  buildUserPasswordForm(): FormGroup {
    return this.formBuilder.group({
      password: ['']
    });
  }
  changeUserPassword() {
    this.userService.changeUserPassword(this.changeUserPasswordForm.value.password).subscribe(() =>
    this.router.navigate(['user']));
  }
}
