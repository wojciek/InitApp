import { RouterModule, Route } from '@angular/router';
import { NgModule } from '@angular/core';
import { SamplesComponent } from './samples.component';
import { SamplesListComponent } from './samples-list/samples-list.component';

const samplesRoutes: Route[] = [
    {
        path: '' ,
        component: <any>SamplesComponent,
        children: [
            {
            path: '',
            component: <any>SamplesListComponent
            }
        ]
    }
  ];

@NgModule({
    imports: [
        RouterModule.forChild(samplesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class SamplesRoutingModule {

}