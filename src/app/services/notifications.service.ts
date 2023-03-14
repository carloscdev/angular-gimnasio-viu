import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  notifications = new BehaviorSubject<string[]>([
    'Hoy vence la membresía de Carlos',
    'Hoy vence la membresía de Juan',
    'Hoy vence la membresía de Pedro',
    'Hoy vence la membresía de Julio',
    'Hoy vence la membresía de Aldo',
    'Hoy vence la membresía de Fernando',
    'Hoy vence la membresía de Felix',
  ]);

  notifications$ = this.notifications.asObservable();
}
