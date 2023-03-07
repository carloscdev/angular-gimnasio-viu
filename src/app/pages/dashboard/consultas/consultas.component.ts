import { Component } from '@angular/core';
import { ConsultaInterface } from 'src/app/interfaces/consulta.interface';
import {  Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent {
  consulta: ConsultaInterface | null = null;

  consultas: ConsultaInterface[] = [
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
  ];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParamMap
      .subscribe((params) => {
        const currentConsulta = this.consultas.find((consulta) => consulta.id === params.get('consulta'));
        if (currentConsulta) {
          this.consulta = currentConsulta;
        }
      })
  };

  setConsulta(consulta: ConsultaInterface) {
    this.router.navigate(['/dashboard/consultas'], { queryParams: { consulta: consulta.id } })
    this.consulta = consulta;
  };
}
