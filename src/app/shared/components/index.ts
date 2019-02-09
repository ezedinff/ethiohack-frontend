import {NgModule} from '@angular/core';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatChipsModule, MatIconModule, MatListModule, MatToolbarModule} from '@angular/material';
import {UserMenuComponent} from './user-menu/user-menu-component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { PerfectScrollbarConfigInterface, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import {ToolbarNotificationComponent} from './toolbar-notification/toolbar-notification.component';
import {SideMenuComponent} from './side-menu/side-menu.component';
import {SideMenuItemComponent} from './side-menu-item/side-menu-item.component';
import {RouterModule} from '@angular/router';
const COMPONENTS = [
  ToolbarComponent,
  UserMenuComponent,
  ToolbarNotificationComponent,
  SideMenuComponent,
  SideMenuItemComponent
];

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    PerfectScrollbarModule,
    RouterModule,
    MatChipsModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class ComponentsModule { }
