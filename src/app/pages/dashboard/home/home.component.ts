import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  faRightFromBracket,
  faCircleExclamation,
} from '@fortawesome/free-solid-svg-icons';
import { ClaseInterface } from 'src/app/interfaces/class.interface';
import { ConsultaInterface } from 'src/app/interfaces/consulta.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  // Icons
  faRightFromBracket = faRightFromBracket;
  faCircleExclamation = faCircleExclamation;

  showVideo = false;

  notifications: string[] = [
    'Recordatorio: Hoy vence la membresía de Carlos',
    'Recordatorio: Hoy vence la membresía de Juan',
    'Recordatorio: Hoy vence la membresía de Pedro',
    'Recordatorio: Hoy vence la membresía de Julio',
  ];

  classes: ClaseInterface[] = [
    {
      id: 'cla0001',
      tipo_clase: 'Yoga',
      observaciones: 'Traer tapete para la clase',
      aforo: 20,
      status: 'ABIERTA',
      fecha: '28/09/2022',
      hora: '02:00 pm',
      instructor: 'Rolando D.',
      inscritos: 12,
    },
    {
      id: 'cla0002',
      tipo_clase: 'Salsa',
      observaciones: 'Traer tapete para la clase',
      aforo: 50,
      status: 'ABIERTA',
      fecha: '28/09/2022',
      hora: '02:00 pm',
      instructor: 'Rolando D.',
      inscritos: 48,
    },
    {
      id: 'cla0003',
      tipo_clase: 'Fight Do',
      observaciones: 'Traer tapete para la clase',
      aforo: 45,
      status: 'ABIERTA',
      fecha: '28/09/2022',
      hora: '02:00 pm',
      instructor: 'Rolando D.',
      inscritos: 95,
    },
  ];

  consultas: ConsultaInterface[] = [
    {
      id: 'con001',
      tipo: 'Nutrición',
      status: 'AGENDADA',
      fecha: '28/09/2022',
      hora: '02:00 pm',
      medico: 'Maria Morales',
    },
    {
      id: 'con002',
      tipo: 'Fisioterapia',
      status: 'AGENDADA',
      fecha: '28/09/2022',
      hora: '02:00 pm',
      medico: 'Pedro Morales',
    },
    {
      id: 'con004',
      tipo: 'Nutrición',
      status: 'AGENDADA',
      fecha: '28/09/2022',
      hora: '02:00 pm',
      medico: 'Maria Morales',
    },
  ];

  constructor(private router: Router) {}

  onLogout() {
    console.log('Logout');
    this.router.navigate(['/auth/login']);
  }

  onToggleVideo() {
    this.showVideo = !this.showVideo;
  }
}
