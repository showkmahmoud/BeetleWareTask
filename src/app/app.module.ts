import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { I18nModule } from './shared/i18n/i18n.module';
import { NotFoundComponent } from './pages/not found/not-found/not-found.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    I18nModule,
    DropdownModule,
    ReactiveFormsModule,
    FormsModule
  ],
exports:[
  DropdownModule
],
  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
