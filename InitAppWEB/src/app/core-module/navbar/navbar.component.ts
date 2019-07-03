import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {
   }
   loggedInUserName$: Observable<string>;
   ngOnInit() {
     this.loggedInUserName$ = this.authService.takeLoggedInUserName();
   }

  logOut() {
    this.authService.logOut();
    this.router.navigate(['/']);
  }

  userDashboard() {
    this.router.navigate(['/user']);
  }
}
