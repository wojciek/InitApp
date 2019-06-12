import { RouterModule, Route } from '@angular/router';
import { NgModule } from '@angular/core';
import { SamplesComponent } from './samples.component';
import { SamplesListComponent } from './samples-list/samples-list.component';
import { SampleAddComponent } from './sample-add/sample-add.component';
import { SampleEditComponent } from './sample-edit/sample-edit.component';

const samplesRoutes: Route[] = [
    {
        path: '' ,
        component: <any>SamplesComponent,
        children: [
            {
                path: '',
                component: <any>SamplesListComponent
            },
            {
                path: 'add',
                component: <any>SampleAddComponent
            },
            {
                path: 'edit/:id',
                component: <any>SampleEditComponent
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
