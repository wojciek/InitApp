import { NgModule } from '@angular/core';
import { LoginComponent } from './identity/login/login.component';
import { RegisterComponent } from './identity/register/register.component';
import { Route, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared-module/page-not-found/page-not-found.component';
import { AuthCanLoadGuard } from './guards/auth-can-load.guard';
import { AppComponent } from './app.component';

const appRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: '/login'},
  { path: '', component: AppComponent, canLoad: [AuthCanLoadGuard]},
  { path: 'user', canLoad: [AuthCanLoadGuard], loadChildren: './user/user.module#UserModule'},
  { path: 'login' , component: LoginComponent},
  { path: 'register' , component: RegisterComponent},
  { path: '**' , component: PageNotFoundComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
