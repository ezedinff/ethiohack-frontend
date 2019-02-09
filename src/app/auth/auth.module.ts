import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AuthContainer} from './containers/auth.container';
import {AuthComponent} from './components/auth.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule, MatCardModule, MatToolbarModule} from '@angular/material';
const routes: Routes = [
  {
    path: '',
    component: AuthContainer
  }
];
@NgModule({
  declarations: [AuthContainer, AuthComponent],
  exports: [AuthContainer, RouterModule, AuthComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule
  ]
})
export class AuthModule { }
