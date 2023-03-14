import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ClaseInterface } from '../interfaces/class.interface';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  classes = new BehaviorSubject<ClaseInterface[]>([
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
    {
      id: 'cla0004',
      tipo_clase: 'Fight Do',
      observaciones: 'Traer tapete para la clase',
      aforo: 45,
      status: 'CERRADA',
      fecha: '06/09/2022',
      hora: '02:00 pm',
      instructor: 'Rolando D.',
      inscritos: 95,
    },
    {
      id: 'cla0005',
      tipo_clase: 'Fight Do',
      observaciones: 'Traer tapete para la clase',
      aforo: 45,
      status: 'CERRADA',
      fecha: '12/09/2022',
      hora: '02:00 pm',
      instructor: 'Rolando D.',
      inscritos: 100,
    },
  ]);

  classes$ = this.classes.asObservable();
}
