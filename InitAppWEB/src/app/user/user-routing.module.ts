import { Route, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AuthGuard } from '../guards/auth.guard';
import { FormCanDeactivateGuard } from '../guards/form-can-deactivate.guard';
import { NgModule } from '@angular/core';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserResolveService } from './user-resolve.service';

const userRoutes: Route[] = [
    {
        path: '',
        component: UserComponent,
        children: [
            {
              path: '',
              component: UserDashboardComponent,
              canActivate: [AuthGuard],
              canDeactivate: [FormCanDeactivateGuard],
              resolve: { user: UserResolveService}
            },
            {
              path: 'edit',
              component: UserEditComponent,
              canActivate: [AuthGuard],
              canDeactivate: [FormCanDeactivateGuard],
              resolve: { user: UserResolveService}
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

