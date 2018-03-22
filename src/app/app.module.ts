import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignComponent } from './sign/sign.component';
import { FormSignInComponent } from './form-sign-in/form-sign-in.component';
import { FormSignUpComponent } from './form-sign-up/form-sign-up.component';
import { FormForgotModalComponent } from './form-forgot-modal/form-forgot-modal.component';


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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
