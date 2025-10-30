import { Component } from '@angular/core';
import { ProjetosCard } from "../projetos-card/projetos-card";
import { ProjetosBadge } from "../projetos-badge/projetos-badge";

@Component({
  selector: 'app-projetos',
  imports: [ProjetosCard, ProjetosBadge],
  templateUrl: './projetos.html',
  styleUrl: './projetos.css',
})
export class Projetos {

}
