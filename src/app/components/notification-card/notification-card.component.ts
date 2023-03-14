import { Component, Input } from '@angular/core';
import {
  faCircleExclamation,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-notification-card',
  templateUrl: './notification-card.component.html',
  styleUrls: ['./notification-card.component.css']
})
export class NotificationCardComponent {
  faCircleExclamation = faCircleExclamation;
  @Input() notification: string = '';
}
