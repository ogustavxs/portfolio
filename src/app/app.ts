import { Component } from '@angular/core';
import { Header } from "./components/header/header";
import { Hero } from "./components/hero/hero";
import { Skills } from "./components/skills/skills";
import { Projetos } from "./components/projetos/projetos";

@Component({
  selector: 'app-root',
  imports: [Header, Hero, Skills, Projetos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
