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
import { PageNotFoundComponent } from './shared-module/page-not-found/page-not-found.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth/auth.interceptor.service';

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
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthService,
    AuthCanLoadGuard,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
