import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CanComponentDeactivate } from '../../guards/form-can-deactivate.guard';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { AppUser } from 'src/app/identity/models/appuser';
import { AppUserAddressDTO } from '../models/appUserAddressDTO';
import { UserResolveService } from '../user-resolve.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.less']
})
export class UserEditComponent implements OnInit, CanComponentDeactivate {
  appUser: AppUserAddressDTO;
  updateUserAddressForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.updateUserAddressForm = this.buildUserEditForm();
    this.appUser = this.route.snapshot.data['user'];
  }


  canDeactivate() {
    if (!this.updateUserAddressForm.dirty) {
      return true;
    }
    return window.confirm('Discard changes?');
  }

  buildUserEditForm(): FormGroup {
    return this.formBuilder.group({
      line1: [this.appUser.Line1],
      line2: [this.appUser.Line2],
      line3: [this.appUser.Line3],
      city: [this.appUser.City],
      zipCode: [this.appUser.ZipCode],
      country: [this.appUser.Country],
    });
  }

  updateUserAddress() {
    this.userService.updateUserAddress(this.updateUserAddressForm.value).subscribe(() =>
    this.router.navigate(['user']));
  }
}


