import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsersViewComponent } from './components/users-view/users-view.component';
import { AdminsViewComponent } from './components/admins-view/admins-view.component';


@NgModule({
  declarations: [
    HomeComponent,
    UsersViewComponent,
    AdminsViewComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
