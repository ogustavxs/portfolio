import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TemplateRef } from '@angular/core';

@Component({
  selector: 'app-projetos-card',
  imports: [CommonModule],
  templateUrl: './projetos-card.html',
  styleUrl: './projetos-card.css',
})
export class ProjetosCard {
  @Input() imgSrc!: string
  @Input() isGroupProject: boolean = false
  @Input() moreSkills: boolean = false
  @Input() title!: string
  @Input() description!: string
  @Input() badgesTemplate!: TemplateRef<any>;
}
