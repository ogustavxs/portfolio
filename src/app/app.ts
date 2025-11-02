import { Component } from '@angular/core';
import { Header } from "./components/header/header";
import { Hero } from "./components/hero/hero";
import { Skills } from "./components/skills/skills";
import { Projetos } from "./components/projetos/projetos";
import { Jornada } from "./components/jornada/jornada";
import { Contato } from "./components/contato/contato";
import { Footer } from "./components/footer/footer";
import { Sidebar } from "./components/sidebar/sidebar";

@Component({
  selector: 'app-root',
  imports: [Header, Hero, Skills, Projetos, Jornada, Contato, Footer, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  isActive: boolean = false
  toggleSidebar() {
    this.isActive = !this.isActive
    if (this.isActive) {
      document.body.classList.add("no-scroll")
    } else {
      document.body.classList.remove("no-scroll")
    }
  }
  closeSidebar() {
    this.isActive = false
    document.body.classList.remove("no-scroll")
  }
}
