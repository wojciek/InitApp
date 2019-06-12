import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { AppUserAddressDTO } from '../models/appUserAddressDTO';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.less']
})
export class UserDashboardComponent implements OnInit {

  appUserData: AppUserAddressDTO;
  appUsername: string;
  constructor(private router: Router, private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.appUserData = this.route.snapshot.data['user'];
    this.appUsername = localStorage.getItem('authUser');
  }
changeUserAddress() {
  this.router.navigate(['edit']);
}
}
