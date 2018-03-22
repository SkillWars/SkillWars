import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignComponent } from './sign/sign.component';
import { FormSignInComponent } from './form-sign-in/form-sign-in.component';
import { FormSignUpComponent } from './form-sign-up/form-sign-up.component';
import { FormForgotModalComponent } from './form-forgot-modal/form-forgot-modal.component';
import {UserService} from "./Additional/_servises/user.service";
import {AuthenticationService} from "./Additional/_servises/authentication.service";
import {AlertService} from "./Additional/_servises/alert.service";
import {AuthGuard} from "./Additional/_guards/auth.guard";
import {AppConfig} from "./app.config";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignComponent,
    FormSignInComponent,
    FormSignUpComponent,
    FormForgotModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    AppConfig,
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
