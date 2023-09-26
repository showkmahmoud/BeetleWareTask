import { NgModule } from '@angular/core';
import { PrimengModule } from './primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
