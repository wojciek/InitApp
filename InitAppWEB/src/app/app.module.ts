import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth/auth.service';
import { IdentityModule } from './identity/identity.module';
import { IdentityRoutingModule } from './identity/identity-routing.module';
import { AuthCanLoadGuard } from './guards/auth-can-load.guard';
import { SamplesModule } from './samples/samples.module';
import { CoreModule } from './core-module/core-module.module';
import { SharedModule } from './shared-module/shared-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth/auth.interceptor.service';
import { AuthGuard } from './guards/auth.guard';
import { LayoutService } from './shared-module/services/layout.service';
import { SamplesRoutingModule } from './samples/samples-routing.module';
import { UserModule } from './user/user.module';
import { UserRoutingModule } from './user/user-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    IdentityModule,
    IdentityRoutingModule,
    SamplesModule,
    SamplesRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthCanLoadGuard,
    AuthGuard,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    LayoutService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
