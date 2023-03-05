import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css'],
})
export class ProgressBarComponent {
  @Input() total = 0;
  @Input() instructor = '---';

  get totalColor() {
    if (this.total > 70) return 'bg-red-500';
    return this.total < 40
      ? 'bg-green-500'
      : 'bg-yellow-500';
  }
}
