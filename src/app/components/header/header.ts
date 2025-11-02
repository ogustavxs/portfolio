import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  @Output() clickSidebar = new EventEmitter();
  scrollPosition!: number
  @HostListener("window:scroll", ['$event'])
  onWindowScroll(_event: Event) {
    this.scrollPosition = window.scrollY || document.documentElement.scrollTop
    console.log("Window scrolled to:", this.scrollPosition)
  }

  toggleSidebar() {
    this.clickSidebar.emit("")
  }
}
