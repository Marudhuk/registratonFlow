import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
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

const routes: Routes = [
  {path: 'registerUser', component:RegisterUserComponent},
  {path:'getPassword',component:GetpassComponent},
  {path: 'verifyUser', component:VerifyEmailComponent},
  {path:'verify',component:VerifyComponent},
  {path: 'verify/:token', component:VerifyComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:DashboardComponent},
  {path:'forgotPassword',component:ForgotpassComponent},
  {path:'verifyForgotPass',component:VerifyForgotpassComponent},
  {path:'resetPassword',component:ResetPasswordComponent},
  {path:'verifyPassToken',component:VerifyforgotTokenComponent},
  {path:'verifyPassToken/:token',component:VerifyforgotTokenComponent}


  // {path: '', redirectTo: '', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
