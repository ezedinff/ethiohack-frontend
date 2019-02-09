import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComponentsModule} from '../components';
import {LayoutContainer} from './layout/layout.container';
import { PerfectScrollbarConfigInterface, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import {RouterModule, Routes} from '@angular/router';
import {MatSidenavModule, MatToolbarModule} from '@angular/material';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
const routes: Routes = [
      {
        path: '',
        component: LayoutContainer,
        children: [
          {
            path: 'dashboard',
            loadChildren: '../../dashboard/dashboard.module#DashboardModule'
          },
          {
            path: 'organization',
            loadChildren: '../../organization/organization.module#OrganizationModule'
          },
          {
            path: '', redirectTo: 'dashboard', pathMatch: 'full'
          }
        ]
      },
];
@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    PerfectScrollbarModule,
    RouterModule.forChild(routes),
    MatSidenavModule,
    MatToolbarModule,
  ],
  declarations: [LayoutContainer],
  exports: [LayoutContainer, RouterModule],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class ContainersModule { }
