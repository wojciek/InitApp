import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
navBarSource$ = new Subject<boolean>();

showNavBar(): void {
  this.navBarSource$.next(true);
}

hideNavBar(): void {
  this.navBarSource$.next(false);
}
}
