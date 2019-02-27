import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Sample } from './models/sample';
import { map } from 'rxjs/operators';
import { Http, Headers } from '@angular/http';

@Injectable()
export class SamplesService {

  private apiDataUrl = 'http://localhost:5006/api/';
  constructor(private http: Http) { }

  getSamples(id: string): Observable<Sample[]> {
    return this
    .http
    .get(this
      .apiDataUrl + 'samples/' + id
      , {headers: new Headers({'Authorization': 'Bearer ' + localStorage.getItem('authToken')})}).pipe(map((result) =>
      result.json()
    ));
  }
  getSample(): Observable<Sample> {
    return this
    .http
    .get(this
      .apiDataUrl + 'sample'
      , {headers: new Headers({'Authorization': 'Bearer ' + localStorage.getItem('authToken')})}).pipe(map((result) =>
      result.json()
    ));
  }
}

