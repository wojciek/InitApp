import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth/auth.service';
import { IdentityModule } from './identity/identity.module';
import { IdentityRoutingModule } from './identity/identity-routing.module';
import { AuthCanLoadGuard } from './guards/auth-can-load.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    IdentityModule,
    IdentityRoutingModule
  ],
  providers: [
    AuthService,
    AuthCanLoadGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
