import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { IdentityComponent } from './identity.component';
import { RegisterComponent } from './register/register.component';
import { IdentityRoutingModule } from './identity-routing.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    IdentityRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [RegisterComponent, LoginComponent],
  declarations: [LoginComponent, RegisterComponent, IdentityComponent]
})
export class IdentityModule { }
