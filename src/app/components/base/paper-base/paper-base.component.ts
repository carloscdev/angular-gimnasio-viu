import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paper-base',
  templateUrl: './paper-base.component.html',
  styleUrls: ['./paper-base.component.css']
})
export class PaperBaseComponent {
  @Input() customClass = '';
  @Input() isActive = false;
}
