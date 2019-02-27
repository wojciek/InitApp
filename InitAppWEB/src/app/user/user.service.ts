import { Injectable } from '@angular/core';
import { AppUserAddress } from '../identity/models/address';
import { Observable } from 'rxjs';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiDataUrl = 'http://localhost:5001/api/';
  constructor(private http: Http) { }

  getUserAddress(): Observable<AppUserAddress> {
    return this
    .http
    .get(
      this.apiDataUrl + 'currencies'
      , { headers: new Headers({'Authorization': 'Bearer' + localStorage.getItem('authToken')})}).pipe(map((result) =>
      result.json()
    ));
  }
}
