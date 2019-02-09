import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  styles: [
  ':host{z-index: 4} '],
  templateUrl: './toolbar.component.html'
})
export class ToolbarComponent implements OnInit {
  @Input() sidenav;
  @Input() matDrawerShow;
  @Input() user;
  ngOnInit(): void {
  }
}
