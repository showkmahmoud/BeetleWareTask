import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminCardComponent } from './shared/components/admin-card/admin-card.component';
import { UserCardComponent } from './shared/components/user-card/user-card.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { I18nModule } from './shared/i18n/i18n.module';

@NgModule({
  declarations: [
    AppComponent,
    AdminCardComponent,
    UserCardComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    I18nModule
  ],

  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
