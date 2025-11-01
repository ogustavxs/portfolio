import { Component } from '@angular/core';
import { Header } from "./components/header/header";
import { Hero } from "./components/hero/hero";
import { Skills } from "./components/skills/skills";
import { Projetos } from "./components/projetos/projetos";
import { Jornada } from "./components/jornada/jornada";
import { Contato } from "./components/contato/contato";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [Header, Hero, Skills, Projetos, Jornada, Contato, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
