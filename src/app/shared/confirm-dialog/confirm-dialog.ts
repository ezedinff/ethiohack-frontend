import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'confirm-dialog',
  template: '<mat-card style="min-height: 200px;">' +
    '<mat-card-content style="min-height: 100px; font-size: 1.2em;">' +
    '<span fxLayout="row" style="padding-top: 24px;">' +
    '<mat-icon fxFlex="10" style="font-size: 2.5em;">' +
    '{{data?.icon}}</mat-icon>' +
    '<span fxFlex="90" style="margin-left: 24px; margin-top: 24px; position: relative; top: -16px;">{{data?.message}}</span>' +
    '</span>' +
    '</mat-card-content>' +
    '<mat-card-actions>' +
    '<div fxLayout="row">' +
    '<div fxFlex fxLayoutAlign="end">' +
    '<button style="margin-right: 8px;" mat-raised-button' +
    ' *ngFor="let action of data?.actions" (click)="actionPerformed(action?.type)">' +
    '<mat-icon>{{action?.icon}}</mat-icon>' +
    '{{action?.title}}' +
    '</button>' +
    '</div>' +
    '</div>' +
    '</mat-card-actions>' +
    '</mat-card>' +
    '',
  styles: ['::ng-deep .mat-dialog-container{ padding: 0 0 5em; overflow: hidden;}']
})
export class ConfirmDialog implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<ConfirmDialog> ) {}
  ngOnInit(): void {
  }
  actionPerformed(actionType) {
    this.dialogRef.close(actionType);
  }
}
