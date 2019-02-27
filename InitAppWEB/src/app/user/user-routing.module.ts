import { Route, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AuthGuard } from '../guards/auth.guard';
import { FormCanDeactivateGuard } from '../guards/form-can-deactivate.guard';
import { NgModule } from '@angular/core';

const userRoutes: Route[] = [
    {
        path: '',
        component: <any>UserComponent,
        children: [
            {
                path: '',
                component: <any>UserDashboardComponent,
                canActivate: [AuthGuard],
                canDeactivate: [FormCanDeactivateGuard]
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(userRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class UserRoutingModule {
}
