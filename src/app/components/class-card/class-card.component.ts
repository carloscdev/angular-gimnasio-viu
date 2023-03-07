import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ClaseInterface } from 'src/app/interfaces/class.interface';

@Component({
  selector: 'app-class-card',
  templateUrl: './class-card.component.html',
  styleUrls: ['./class-card.component.css']
})
export class ClassCardComponent {
  @Input() currentClass: ClaseInterface | null = null;
  @Output() setClass = new EventEmitter<ClaseInterface>();

  sendClass() {
    if (this.currentClass) {
      this.setClass.emit(this.currentClass);
    }
  }
}
