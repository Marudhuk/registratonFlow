import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { GetpassComponent } from './getpass/getpass.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { VerifyComponent } from './verify/verify.component';
import { LoginComponent } from './login/login.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { VerifyForgotpassComponent } from './verify-forgot-email/verify-forgotpass.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { VerifyforgotTokenComponent } from './verifyforgot-token/verifyforgot-token.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    GetpassComponent,
    VerifyEmailComponent,
    VerifyComponent,
    LoginComponent,
    ForgotpassComponent,
    VerifyForgotpassComponent,
    ResetPasswordComponent,
    VerifyforgotTokenComponent,
    DashboardComponent,
    RegisterUserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ButtonModule,
    ToastModule
    
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
