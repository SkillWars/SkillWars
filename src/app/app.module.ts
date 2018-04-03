import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignComponent } from './sign/sign.component';
import { FormSignInComponent } from './form-sign-in/form-sign-in.component';
import { FormSignUpComponent } from './form-sign-up/form-sign-up.component';
import { FormForgotModalComponent } from './form-forgot-modal/form-forgot-modal.component';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {UserService} from "./Additional/_servises/user.service";
import {AuthenticationService} from "./Additional/_servises/authentication.service";
import {AlertService} from "./Additional/_servises/alert.service";
import {AuthGuard} from "./Additional/_guards/auth.guard";
import {AppConfig} from "./app.config";
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';
import {routing} from "./app.routing";
import { RestorePasswordComponent } from './restore-password/restore-password.component';
import { TableComponent } from './table/table.component';

import { SteamAuthComponent } from './steam-auth/steam-auth.component';

import { PersonalRoomComponent } from './personal-room/personal-room.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignComponent,
    FormSignInComponent,
    FormSignUpComponent,
    FormForgotModalComponent,
    ConfirmEmailComponent,
    RestorePasswordComponent,
    TableComponent,
    SteamAuthComponent,

    PersonalRoomComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
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
