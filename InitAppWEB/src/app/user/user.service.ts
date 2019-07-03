import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { UpdateAppUserAddressCommand } from './models/updateAppUserAddressCommand';
import { ChangeAppUserPasswordCommand } from './models/changeAppUserPasswordCommand';
import { AppUserAddressDTO } from './models/appUserAddressDTO';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiDataUrl = 'http://localhost:5006/api/';
  constructor(private http: HttpClient) { }

  updateUserAddress(data: UpdateAppUserAddressCommand) {
    return this.http.put(this.apiDataUrl + localStorage.getItem('authUser'), data);
  }

  changeUserPassword(password: ChangeAppUserPasswordCommand) {
    return this.http.put<ChangeAppUserPasswordCommand>(this.apiDataUrl + 'password/' + localStorage.getItem('authUser'), password)
  }

  getUserAddress(): Observable<AppUserAddressDTO> {
    return this.http.get<AppUserAddressDTO>(this.apiDataUrl + 'address/' + localStorage.getItem('authUser'));
  }
}
