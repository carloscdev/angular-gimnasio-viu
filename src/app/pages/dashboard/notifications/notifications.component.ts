import { Component } from '@angular/core';
import { NotificationsService } from 'src/app/services/notifications.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {
  notifications: string[] = [];
  constructor(
    private notificationsService: NotificationsService,
  ) {}

  ngOnInit() {
    this.notificationsService.notifications
    .subscribe(notifications => this.notifications = notifications);
  }
}
