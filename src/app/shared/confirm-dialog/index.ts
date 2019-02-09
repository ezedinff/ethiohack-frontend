import {NgModule} from '@angular/core';
import {ConfirmDialog} from './confirm-dialog';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatCardModule, MatDialogModule, MatIconModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatCardModule
  ],
  declarations: [ConfirmDialog],
  entryComponents: [ConfirmDialog],
  exports: [ConfirmDialog],
})
export class ConfirmDialogModule { }
