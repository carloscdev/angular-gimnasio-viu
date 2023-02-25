import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sub-title',
  templateUrl: './sub-title.component.html',
  styleUrls: ['./sub-title.component.css']
})
export class SubTitleComponent {
  @Input() alignText: 'text-center' | 'text-right' | 'text-left' = 'text-center';
}
