import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not found/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
{
  path:'login',
  loadChildren: () => import('./pages/login/login.module').then((m) => m.LoginModule),
},
{
  path:'home',
  loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule),
},
{
  path:'**',
  component:NotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
