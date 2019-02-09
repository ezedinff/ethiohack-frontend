import {Component, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {MediaChange, ObservableMedia} from '@angular/flex-layout';
import {Router} from '@angular/router';

@Component({
  selector: 'app-layout',
  styleUrls: ['./layout.container.scss'],
  templateUrl: './layout.container.html'
})
export class LayoutContainer implements OnInit {
  // public userImage = '';
  sideNavOpened = true;
  matDrawerOpened = false;
  matDrawerShow = true;
  sideNavMode = 'side';
  user;
  @ViewChild('drawerob') drawerob;
  constructor(private media: ObservableMedia, private route: Router) {
    this.media.subscribe((mediaCahnge: MediaChange) => this.toggleView());
    this.user = JSON.parse(localStorage.getItem('current_user'));
  }
  toggleView() {
    if (this.media.isActive('gt-md')) {
      this.sideNavMode = 'side';
      this.sideNavOpened = true;
      this.matDrawerOpened = false;
      this.matDrawerShow = true;
    } else if (this.media.isActive('gt-xs')) {
      this.sideNavMode = 'over';
      this.sideNavOpened = false;
      this.matDrawerOpened = false;
      this.matDrawerShow = false;
    } else if (this.media.isActive('lt-sm')) {
      this.sideNavMode = 'over';
      this.sideNavOpened = false;
      this.matDrawerOpened = false;
      this.matDrawerShow = false;
    }
  }

  ngOnInit(): void {
  }
}
