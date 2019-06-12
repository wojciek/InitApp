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

  private apiDataUrl = 'http://localhost:5001/api/';
  constructor(private http: HttpClient) { }

  updateUserAddress(data: UpdateAppUserAddressCommand) {
    return this.http.put(this.apiDataUrl + localStorage.getItem('authUser'), data);
  }

  changeUserPassword(data: ChangeAppUserPasswordCommand) {
    return this.http.put(this.apiDataUrl + localStorage.getItem('authUser'), data);
  }

  getUserAddress(): Observable<AppUserAddressDTO> {
    return this.http.get<AppUserAddressDTO>(this.apiDataUrl + localStorage.getItem('authUser'));
  }
}
