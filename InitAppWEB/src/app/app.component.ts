import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'app';
  public values: string[];
  constructor(private http: Http) {
    this.http.get('http://localhost:5006/api/values').subscribe(result => {
      this.values = result.json() as string[];
    }, error => console.error(error));
  }
}
