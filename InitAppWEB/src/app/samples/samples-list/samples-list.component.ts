import { Component, OnInit } from '@angular/core';
import { SamplesService } from '../samples.service';
import { Observable } from 'rxjs';
import { Sample } from '../models/sample';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-samples-list',
  templateUrl: './samples-list.component.html',
  styleUrls: ['./samples-list.component.less']
})
export class SamplesListComponent implements OnInit {

  Samples$: Observable<Sample[]>;

  constructor(private samplesService: SamplesService) {
    this.Samples$ = this.samplesService.getSamples(localStorage.getItem('authUser'));
  }

  ngOnInit() {

    this.Samples$.subscribe(x => console.log('Observer got a next value: ' + x),
    err => console.log('Observer got a next value: ' + err));
  }

}
