import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamplesComponent } from './samples.component';
import { SamplesListComponent } from './samples-list/samples-list.component';
import { SamplesRoutingModule } from './samples-routing.module';
import { SamplesService } from './samples.service';
import { HttpModule } from '@angular/http';
import { SampleEditComponent } from './sample-edit/sample-edit.component';
import { SampleAddComponent } from './sample-add/sample-add.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SamplesComponent,
    SamplesListComponent,
    SampleEditComponent,
    SampleAddComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    SamplesRoutingModule,
    RouterModule
  ],
  exports: [
    SamplesListComponent
  ],
  providers: [
    SamplesService
  ]
})
export class SamplesModule { }
