import { NgModule } from '@angular/core';
import { LoginComponent } from './identity/login/login.component';
import { RegisterComponent } from './identity/register/register.component';
import { Route, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared-module/page-not-found/page-not-found.component';
import { AuthCanLoadGuard } from './guards/auth-can-load.guard';
import { AppComponent } from './app.component';
import { SamplesListComponent } from './samples/samples-list/samples-list.component';

const appRoutes: Route[] = [
    {path : '', pathMatch: 'full', redirectTo: '/login'},
  { path: 'login' , component: LoginComponent},
  { path: 'register' , component: RegisterComponent},
  { path: 'user', canLoad: [AuthCanLoadGuard], loadChildren: './user/user.module#UserModule'},
  { path: 'samples', canLoad: [AuthCanLoadGuard], loadChildren: './samples/samples.module#SamplesModule'},
  { path: '', pathMatch: 'full', redirectTo: '/login'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes,
        { enableTracing: true }
        ),
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
