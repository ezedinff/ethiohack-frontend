import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './shared/asynServices/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: 'app',
    loadChildren: './shared/containers/container.module#ContainersModule',
    canActivate: [AuthGuard]
  },
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
