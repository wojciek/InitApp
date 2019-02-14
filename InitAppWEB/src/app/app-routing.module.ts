import { NgModule } from '@angular/core';
import { LoginComponent } from './identity/login/login.component';
import { RegisterComponent } from './identity/register/register.component';
import { Route, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared-module/page-not-found/page-not-found.component';

const appRoutes: Route[] = [
  {path: 'login' , component: LoginComponent},
  {path: 'register' , component: RegisterComponent},
  {path : '', pathMatch: 'full', redirectTo: '/login'},
  {path: '**' , component: PageNotFoundComponent}
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
