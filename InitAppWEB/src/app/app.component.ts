import { Component, OnInit } from '@angular/core';
import { LayoutService } from './shared-module/services/layout.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  constructor(private layoutService: LayoutService) {}
  title = 'app';
  isNavBarVisible = false;

  ngOnInit() {
    this.layoutService.navBarSource$.subscribe((isVisible) => {
      this.isNavBarVisible = isVisible;
    });
  }

}
