import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonHeaderComponent } from './common-header/common-header.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { MainWeddingProfileComponent } from './main-wedding-profile/main-wedding-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    CommonHeaderComponent,
    LoginSignupComponent,
    MainWeddingProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
