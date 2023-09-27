import { NgModule } from '@angular/core';
import { PrimengModule } from './primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { I18nModule } from './i18n/i18n.module';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { TranslateModule } from '@ngx-translate/core';
import { ToastModule } from 'primeng/toast';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
    I18nModule,
    ToastModule,
  ],
  exports: [
    CommonModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    I18nModule,
    TranslateModule,
    ToastModule,
  ]
})
export class SharedModule { }
