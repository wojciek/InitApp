import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Sample } from './models/sample';
import { map } from 'rxjs/operators';
import { Http, Headers } from '@angular/http';

@Injectable()
export class SamplesService {

  public samples: Subject<Sample>;
  private apiDataUrl = 'http://localhost:5006/api';
  constructor(private http: Http) { }

  getSamples() {
    return this
    .http
    .get(this
      .apiDataUrl + 'currencies'
      , {headers: new Headers({'Authorization': 'Bearer ' + localStorage.getItem('authToken')})}).pipe(map((result) =>  
      result.json()
    ));
  }
}

