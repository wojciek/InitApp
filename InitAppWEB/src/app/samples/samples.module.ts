import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamplesComponent } from './samples.component';
import { SamplesListComponent } from './samples-list/samples-list.component';
import { SamplesRoutingModule } from './samples-routing.module';
import { SamplesService } from './samples.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    SamplesComponent,
    SamplesListComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    SamplesRoutingModule
  ],
  exports: [
    SamplesListComponent
  ],
  providers: [
    SamplesService
  ]
})
export class SamplesModule { }
