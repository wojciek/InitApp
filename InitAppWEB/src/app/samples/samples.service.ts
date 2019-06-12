import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Sample } from './models/sample';
import { map } from 'rxjs/operators';
import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SamplesService {

  private apiDataUrl = 'http://localhost:5006/api/';
  constructor(private http: HttpClient) { }

  getSamples(id: string): Observable<Sample[]> {
    return this.http.get<Sample[]>(this.apiDataUrl + 'samples/' + id);
  }
  getSample(): Observable<Sample> {
    return this.http.get<Sample>(this.apiDataUrl + 'sample');
  }
}

