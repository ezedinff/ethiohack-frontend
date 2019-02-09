import {Component, Input, OnInit} from '@angular/core';
import {menus} from './menus';


@Component({
  selector: 'app-side-menu',
  styleUrls: ['./side-menu.component.scss'],
  templateUrl: './side-menu.component.html'
})
export class SideMenuComponent implements OnInit {
  public menus = menus;
  @Input() user;
  constructor() {
  }
  ngOnInit(): void {

  }
}
