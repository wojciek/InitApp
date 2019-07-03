import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserChangePasswordComponent } from './user-change-password/user-change-password.component';
import { UserService } from './user.service';
import { UserResolveService } from './user-resolve.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../auth/auth.interceptor.service';

@NgModule({
  declarations: [
    UserComponent,
    UserDashboardComponent,
    UserEditComponent,
    UserChangePasswordComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    UserRoutingModule
  ],
  exports: [
    UserDashboardComponent,
    UserEditComponent,
    UserComponent
  ],
  providers: [
    UserService,
    UserResolveService
  ]
})
export class UserModule { }
