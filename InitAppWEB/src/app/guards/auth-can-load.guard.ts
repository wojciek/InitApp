import { Injectable } from '@angular/core';
import { Route, Router, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthCanLoadGuard implements CanLoad {
  constructor(private router: Router, private authService: AuthService) {}

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    }

    this.router.navigate(['/login']);
       return false;
  }
}
