import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Route } from '@angular/router';

const identityRoutes: Route[] = [
  {
    path: 'login',
    component: <any>LoginComponent,
  },
  {
    path: 'register',
    component: <any>RegisterComponent
  }
];

@NgModule({
  imports: [
      RouterModule.forChild(identityRoutes)
  ],
  exports: [
      RouterModule
  ]
})
export class IdentityRoutingModule {}
