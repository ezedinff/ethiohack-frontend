import {Component} from '@angular/core';

@Component({
  selector: 'auth-container',
  template: '<div fxLayout="row" style="padding: 8% 0; background-color: #673ab7; height: 100vh; width: 100vw;">' +
    '<auth-component fxFlex="40" fxFlex.xs="100" fxFlexOffset="30" fxFlexOffset.xs="0"></auth-component>' +
    '</div>'
})
export class AuthContainer { }
