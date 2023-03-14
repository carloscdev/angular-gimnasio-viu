import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ConsultaInterface } from '../interfaces/consulta.interface';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  consultas = new BehaviorSubject<ConsultaInterface[]>([
    {
      id: 'con001',
      tipo: 'Nutrición',
      status: 'AGENDADA',
      fecha: '28/09/2022',
      hora: '02:00 pm',
      medico: 'Maria Morales',
      indicaciones: 'Venir con ropa deportiva',
    },
    {
      id: 'con002',
      tipo: 'Fisioterapia',
      status: 'AGENDADA',
      fecha: '28/09/2022',
      hora: '02:00 pm',
      medico: 'Pedro Morales',
      indicaciones: 'Venir con ropa deportiva',
    },
    {
      id: 'con004',
      tipo: 'Nutrición',
      status: 'AGENDADA',
      fecha: '28/09/2022',
      hora: '02:00 pm',
      medico: 'Maria Morales',
      indicaciones: 'Venir con ropa deportiva',
    },
    {
      id: 'con005',
      tipo: 'Fisioterapia',
      status: 'CANCELADA',
      fecha: '28/09/2022',
      hora: '02:00 pm',
      medico: 'Juan Rolando',
      indicaciones: 'Venir con ropa deportiva',
    },
    {
      id: 'con006',
      tipo: 'Nutrición',
      status: 'CANCELADA',
      fecha: '28/09/2022',
      hora: '02:00 pm',
      medico: 'Fernando Sosa',
      indicaciones: 'Venir con ropa deportiva',
    },
  ]);

  consultas$ = this.consultas.asObservable();
}
