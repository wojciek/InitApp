import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { AppUserAddressDTO } from './models/appUserAddressDTO';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements Resolve<AppUserAddressDTO>  {

  constructor(private userService: UserService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.userService.getUserAddress();
  }
}
