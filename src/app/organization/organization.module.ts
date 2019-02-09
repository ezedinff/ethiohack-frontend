import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { OrganizationsViewComponent } from './components/organizations-view/organizations-view.component';
import {MatCardModule, MatIconModule, MatToolbarModule} from '@angular/material';
const orgRoutes: Routes = [
  {
    path: '',
    component: OrganizationsViewComponent
  }
];
@NgModule({
  declarations: [OrganizationsViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(orgRoutes),
    MatToolbarModule,
    MatCardModule,
    MatIconModule
  ]
})
export class OrganizationModule { }
