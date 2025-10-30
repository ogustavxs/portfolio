import { Component } from '@angular/core';
import { Header } from "./components/header/header";
import { Hero } from "./components/hero/hero";
import { Skills } from "./components/skills/skills";

@Component({
  selector: 'app-root',
  imports: [Header, Hero, Skills],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
