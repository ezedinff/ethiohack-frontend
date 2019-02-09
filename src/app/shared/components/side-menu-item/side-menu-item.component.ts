import {Component, Input, OnInit} from '@angular/core';
import {SubjectService} from '../../asynServices/subject.service';

@Component({
  selector: 'app-side-menu-item',
  styleUrls: ['./side-menu-item.component.scss'],
  templateUrl: './side-menu-item.component.html'
})
export class SideMenuItemComponent implements OnInit {
  @Input() menu;
  @Input() iconOnly: boolean;
  @Input() secondaryMenu = false;
  constructor(private subjectService: SubjectService) {}
  ngOnInit(): void {
  }
  toggleMenu() {
    this.menu.open = !this.menu.open;
    const name = this.menu.name.split(' ');
    if (name.length > 1 && this.chechForChildMenu() && this.menu.open) {
  //      this.prepareSubMenu(name[1]);
    }
  }
  chechForChildMenu() {
    return !!(this.menu && this.menu.sub);
  }
}
