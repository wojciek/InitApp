import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { SamplesService } from './samples.service';
import { Sample } from './models/sample';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SamplesResolveService implements Resolve<Sample[]>  {

  constructor(private samplesService: SamplesService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Sample[]> {
    return this.samplesService.getSamples();
  }
}
