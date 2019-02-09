import {Component, ElementRef, HostListener, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../asynServices/auth.service';

@Component({
  selector: 'app-user-menu',
  styleUrls: ['./user-menu-component.scss'],
  templateUrl: './user-menu-component.html'
})
export class UserMenuComponent implements OnInit {
  @Input() currentUser = null;
  isOpen = false;
  @Input() user;
  @HostListener('document:click', ['$event', '$event.target'])
  onClick(event: MouseEvent, targetElement: HTMLElement) {
    if (!targetElement) { return; }
    const clickedInsde = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInsde) { this.isOpen = false; }
  }
  constructor(private elementRef: ElementRef,
              private router: Router,
              private authService: AuthService) {
    console.log(this.user);
  }
  ngOnInit(): void {
  }
  logout() {
    this.authService.signOut().then(() => {
      this.router.navigate(['']);
    });
  }
}
