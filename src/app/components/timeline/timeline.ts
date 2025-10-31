import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface ITimeline {
  title: string,
  start: string,
  end: string,
  status?: string,
  description: string
}

@Component({
  selector: 'app-timeline',
  imports: [CommonModule],
  templateUrl: './timeline.html',
  styleUrl: './timeline.css',
})
export class Timeline {
  @Input() timeline!: ITimeline[]
}
