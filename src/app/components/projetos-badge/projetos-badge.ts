import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TemplateRef } from '@angular/core';

@Component({
  selector: 'app-projetos-badge',
  imports: [CommonModule],
  templateUrl: './projetos-badge.html',
  styleUrl: './projetos-badge.css',
})
export class ProjetosBadge {
  @Input() badgeTemplate!: TemplateRef<any>;
  @Input() badgeName!: string;
}
