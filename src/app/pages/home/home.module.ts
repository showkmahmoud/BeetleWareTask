import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsersViewComponent } from './components/users-view/users-view.component';
import { AdminsViewComponent } from './components/admins-view/admins-view.component';
import { I18nModule } from 'src/app/shared/i18n/i18n.module';
import { AddEditUserComponent } from './components/add-edit-user/add-edit-user.component';


@NgModule({
  declarations: [
    HomeComponent,
    UsersViewComponent,
    AdminsViewComponent,
    AddEditUserComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    I18nModule
  ]
})
export class HomeModule { }
