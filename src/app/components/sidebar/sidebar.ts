import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  @Input() isActive: boolean = false
  @Output() clicked = new EventEmitter()
  currentSection: string = "inicio"
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = document.querySelectorAll("section")
    const scrollPos = window.scrollY + window.innerHeight / 2

    sections.forEach(section => {
      const top = section.getBoundingClientRect().top + window.scrollY
      const height = section.clientHeight

      if (scrollPos >= top && scrollPos < top + height) {
        this.currentSection = section.id
      }
    })
  }

  closeSidebar() {
    this.clicked.emit("")
  }
}
