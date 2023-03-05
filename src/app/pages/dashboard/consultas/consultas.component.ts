import { Component } from '@angular/core';
import { ConsultaInterface } from 'src/app/interfaces/consulta.interface';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent {

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
  ]
}
