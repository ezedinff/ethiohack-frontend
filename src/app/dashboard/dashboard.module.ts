import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DashboardContainer} from './containers/dashboard.container';
const routes: Routes = [
  {
    path: '',
    component: DashboardContainer
  },
];
@NgModule({
  declarations: [DashboardContainer],
  exports: [DashboardContainer, RouterModule],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
