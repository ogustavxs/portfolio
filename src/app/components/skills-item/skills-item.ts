import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TemplateRef } from '@angular/core';

@Component({
  selector: 'app-skills-item',
  imports: [CommonModule],
  templateUrl: './skills-item.html',
  styleUrl: './skills-item.css',
})
export class SkillsItem {
  @Input() iconTemplate!: TemplateRef<any>;
  @Input() titleItem!: string;
}
