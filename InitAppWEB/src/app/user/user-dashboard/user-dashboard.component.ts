import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CanComponentDeactivate } from '../../guards/form-can-deactivate.guard';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.less']
})
export class UserDashboardComponent implements OnInit, CanComponentDeactivate {

  userDashboardForm: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userDashboardForm = this.buildUserDashboardForm();
  }

  buildUserDashboardForm() {
      return this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required],
        line1: [''],
        line2: [''],
        line3: [''],
        city: [''],
        zipCode: [''],
        country: [''],
      });
  }
  canDeactivate() {
      if (!this.userDashboardForm.dirty) {
        return true;
      }
      return window.confirm('Discard changes?');
  }
  userWallet() {
    this.router.navigate(['']);
  }
}
