import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { AppUserAddressDTO } from '../models/appUserAddressDTO';
import { AuthService } from 'src/app/auth/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.less']
})
export class UserDashboardComponent implements OnInit {

  appUserData: Observable<AppUserAddressDTO>;
  appUsername: Observable<string>
  constructor(private router: Router, private userService: UserService, private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit() {
    this.appUserData = this.route.snapshot.data['user'];
    
    if(this.authService.loggedInUserName$){
      this.appUsername = this.authService.takeLoggedInUserName();
    }
  }
changeUserAddress() {
  this.router.navigate(['edit']);
}
}
