import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { usersDataResolver } from 'src/app/shared/resolvers/users-data.resolver';

const routes: Routes = [
  { path: '', component: HomeComponent,
  canActivate: [AuthGuard],
  resolve: {
    users: usersDataResolver,
  },
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
