import { Component } from '@angular/core';
import { faRightFromBracket, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Icons
  faRightFromBracket = faRightFromBracket;
  faCircleExclamation = faCircleExclamation;

  notifications: string[] = [
    'Recordatorio: Hoy vence la membresía de Carlos',
    'Recordatorio: Hoy vence la membresía de Juan',
    'Recordatorio: Hoy vence la membresía de Pedro',
    'Recordatorio: Hoy vence la membresía de Julio',
  ];
}
