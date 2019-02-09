import {Component, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-toolbar-notification',
  styleUrls: ['./toolbar-notification.component.scss'],
  templateUrl: './toolbar-notification.component.html'
})
export class ToolbarNotificationComponent implements OnInit {
  cssPrefix = 'toolbar-notification';
  isOpen = false;
  @Input() notifications = [];
  @HostListener('document:click', ['$event', '$event.target'])
  onClick(event: MouseEvent, targetElement: HTMLElement) {
    if (!targetElement) { return; }
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) { this.isOpen = false; }
  }
  constructor(private elementRef: ElementRef) { }
  ngOnInit(): void {
  }
}
