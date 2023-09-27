import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './components/login/login.component';
import { CommonModule } from '@angular/common';
import { I18nModule } from 'src/app/shared/i18n/i18n.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
  LoginRoutingModule,
  CommonModule,
  SharedModule,
  I18nModule
],
})
export class LoginModule { }
