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
    AuthCanLoadGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
